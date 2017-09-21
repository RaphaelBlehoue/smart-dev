import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import rootReducers from '../reducers';

const enhancer = applyMiddleware(promise);

export default function configureStore(initialState) {
  return createStore(rootReducers, initialState, enhancer);
}