import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import rootReducer from './reducers';
import rootSaga from './sagas';

const history = createHistory();
const initialState = {};
// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  connectRouter(history)(rootReducer),
  composeEnhancer(applyMiddleware(sagaMiddleware, routerMiddleware(history)))
);

// then run the saga
sagaMiddleware.run(rootSaga)
store.subscribe(() => {
  console.log(store.getState());
})

export {
  store
}