import React from 'react';
import Navbar from '../../ui/Navbar';
import Footer from '../../ui/Footer';

const FrontLayout = (props) => (
    <div>
        <Navbar />
             {props.children}
        <Footer />
    </div>
);

FrontLayout.propTypes = {
    children: React.PropTypes.node
};

FrontLayout.defaultProps = {
    children: null
};

export default FrontLayout;
