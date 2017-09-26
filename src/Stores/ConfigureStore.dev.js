/* eslint-disable no-underscore-dangle */

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import reducer from '../Reducers';

export default function configureStore (initialState) {

 const finalCreateStore = composeWithDevTools(applyMiddleware(promise(), thunk))(createStore);
 const store = finalCreateStore(reducer, initialState);
 if (module.hot) {
   // Enable Webpack hot module replacement for reducers
   module.hot.accept(reducer, () => {
       const nextReducer = reducer;
       store.replaceReducer(nextReducer);
   });
 }
 return store;
}