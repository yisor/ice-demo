import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from 'history/createBrowserHistory';
// 载入默认全局样式 normalize 、.clearfix 和一些 mixin 方法等
import '@icedesign/base/reset.scss';
import App from './router';
import { store } from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history()}>
      <App />
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'));
