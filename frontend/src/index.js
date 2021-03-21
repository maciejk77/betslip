import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { OddsProvider } from './odds';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <OddsProvider>
    <App />
  </OddsProvider>,
  document.getElementById('root')
);
registerServiceWorker();
