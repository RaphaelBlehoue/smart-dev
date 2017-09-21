/* eslint-disable no-underscore-dangle */

import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import reducer from '../reducers';

export default function configureStore (initialState) {
 const devToolsExtension =  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

 const finalCreateStore = compose(
     applyMiddleware(promise),
     devToolsExtension
 )(createStore);

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