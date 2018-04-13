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
      feed: {}
    }
  },
  willMount() {
    client().then(data => {
      this.setState({
        feed: data
      })
    })
  },
  content() {
    console.log(this.state);
    return (
      <Fragment>
        <Header />
        <FeedList setSize={this.setSize} feed={this.state.feed} />
      </Fragment>
    );
  }
});
