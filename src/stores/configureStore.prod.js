import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import rootReducers from '../reducers';

const enhancer = applyMiddleware(promise(), thunk);

export default function configureStore(initialState) {
  return createStore(rootReducers, initialState, enhancer);
}