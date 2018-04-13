import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Header from 'e:Header';
import FeedList from 'e:List';

export default decl({
  block: 'feed',
  setSize() {
    const sizes = ['s','m','l'];
    return sizes[Math.floor(Math.random()*3)]
  },
  content() {
    return (
      <Fragment>
        <Header />
        <FeedList setSize={this.setSize}/>
      </Fragment>
    );
  }
});
