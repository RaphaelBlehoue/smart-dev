import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Switch, Route } from 'react-router';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import  configureStore from './stores/configureStore';
import Main from './layouts/Main';
import Dashboard from './pages/Dashboard/dashboard';
import registerServiceWorker from './registerServiceWorker';


const store = configureStore();

const Root = () => (
    <Main>
        <Router>
            <Switch>
                <Route exact path="/" component={Dashboard}/>
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
