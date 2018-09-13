import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootReducer from './reducers';
import rootSaga from './sagas';

const history = createBrowserHistory()
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(
    applyMiddleware(routerMiddleware(history), sagaMiddleware)
  ),
);

// then run the saga
sagaMiddleware.run(rootSaga)
store.subscribe(() => {
  console.log(store.getState());
})

export {
  store
}