import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { hashHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';



export default function configureStore(initialState,history) {
  const router = routerMiddleware(hashHistory);

  const enhancer = applyMiddleware(thunk, router);

  return createStore(rootReducer, initialState, enhancer);
}