import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import * as serviceWorker from './service-worker/serviceWorker';

import './shared/styling/global-styling.scss';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
