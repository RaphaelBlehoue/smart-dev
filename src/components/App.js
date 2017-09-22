import React from 'react';
import PropTypes from 'prop-types';
import FrontRoute from '../Routes/FrontRoute';
import SecurityRoute from '../Routes/SecurityRoute';
import DashboardPage from '../pages/Dashboard/DashboardPage';
import ProfilePage from '../pages/Dashboard/ProfilePage';
import SignInPage from '../pages/Security/SignInPage';


const App = ({ location }) => (
    <div>
        <FrontRoute location={location} path="/" exact component={DashboardPage}/>
        <FrontRoute location={location} path="/profile" exact component={ProfilePage}/>
        <SecurityRoute location={location}  path="/login" exact component={SignInPage} />
    </div>
);

App.propTypes = {
    location : PropTypes.shape({
        pathname: PropTypes.string.isRequired
    }).isRequired
};

export default App;