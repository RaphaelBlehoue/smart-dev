import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import Main from './layouts/Main';

import Dashboard from './pages/views/Dashboard';
import Client from './pages/views/Client';
import Layout from "./layouts/Layout";

const Root = () => (
    <div>
        <Layout>
            <Router>
                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/client" component={Client}/>
                </Switch>
            </Router>
        </Layout>
    </div>
);
//import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root/>, document.getElementById('root'));
//registerServiceWorker();
