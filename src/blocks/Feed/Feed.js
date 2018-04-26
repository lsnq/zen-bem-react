import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Header from 'e:Header';
import FeedList from 'e:List';
import client from '../../db/client.js';

export default decl({
  block: 'feed',
  setSize() {
    const sizes = ['s','m','l'];
    return sizes[Math.floor(Math.random()*3)]
  },
  willInit() {
    this.state = {
      feed: [],
      isLoading: false
    };
  },
  _loadFeed() {
    this.setState({isLoading: true}, () => {
      client().then(data => {
        this.setState({
          feed: [...this.state.feed, ...data],
          isLoading: false
        })
      });
    });
  },
  _watchScroll(e) {
    /** высота контента              текущая позиция Y  высота экрана            загрузка контента не выполняется*/
    if (document.body.offsetHeight  - window.scrollY < window.innerHeight * 2 && !this.state.isLoading) {
      this._loadFeed();
    }
  },
  willMount() {
    this._loadFeed();
    document.addEventListener('scroll', e => this._watchScroll(e));
  },
  content() {
    return (
      <Fragment>
        <Header />
        <FeedList setSize={this.setSize} feed={this.state.feed} />
      </Fragment>
    );
  }
});
