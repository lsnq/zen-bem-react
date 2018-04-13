import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

import 'b:Page';
import Feed from 'b:Feed';

ReactDOM.render(<Feed />, document.getElementById('root'));
registerServiceWorker();
