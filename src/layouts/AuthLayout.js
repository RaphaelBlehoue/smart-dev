import React  from 'react';
import Footer from '../ui/Footer';

const AuthLayout = props => (
    <div>
         {props.children}
        <Footer />
    </div>
);

AuthLayout.propTypes = {
    children: React.PropTypes.isRequired
};
export default AuthLayout;