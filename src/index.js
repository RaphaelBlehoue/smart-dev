import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Switch, Route } from 'react-router';
import { Provider } from 'react-redux';
import  { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import TodoApp from './reducers';

import Main from './layouts/Main';

import Dashboard from './pages/views/Dashboard';
import Client from './pages/views/Client';

import registerServiceWorker from './registerServiceWorker';


let store = createStore(
    TodoApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const Root = () => (
    <Main>
        <Router>
            <Switch>
                <Route exact path="/" component={Dashboard}/>
                <Route path="/client" component={Client}/>
            </Switch>
        </Router>
    </Main>
);

render(
    <Provider store={store}>
        <Root/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
