import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Header from 'e:Header';
import Card from 'b:Card';

export default decl({
  block: 'App',
  content() {
    return (
      <Fragment>
        <Header />
        <Card title="Title Props" tale="Tale" size="m" />
      </Fragment>
    );
  }
});
