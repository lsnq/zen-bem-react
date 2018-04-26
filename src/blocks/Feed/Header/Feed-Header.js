import React from 'react';
import { decl } from 'bem-react-core';
import Logo from 'e:Logo';

export default decl({
  block: 'feed',
  elem: 'header',
  tag: 'header',
  content() {
    return <Logo/>;
  }
});
