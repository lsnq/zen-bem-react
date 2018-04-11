import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import 'e:Logo';

export default decl({
  block: 'App',
  elem: 'Header',
  tag: 'header',
  content() {
    return (
      <Fragment>
        <Bem elem="Title" tag="h1">Welcome to React</Bem>
      </Fragment>
    );
  }
});
