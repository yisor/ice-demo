import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history'
import { Route, Switch } from 'react-router-dom'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware, connectRouter, ConnectedRouter } from 'connected-react-router'
// 载入默认全局样式 normalize 、.clearfix 和一些 mixin 方法等
import '@icedesign/base/reset.scss';

import Login from './pages/Login';
import rootReducer from './redux/reducers'
import App from './router';
import { store } from './redux/store';

const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/hello" render={() => (<div>Miss</div>)} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
  , document.getElementById('root'));
