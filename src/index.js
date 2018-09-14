import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
// 载入默认全局样式 normalize 、.clearfix 和一些 mixin 方法等
import '@icedesign/base/reset.scss';
import App from './router';
import getStore from './redux/store';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={getStore(history)}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

