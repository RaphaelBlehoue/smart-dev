import React  from 'react';
import Navbar from '../ui/Navbar';
import Footer from '../ui/Footer';

const Main = props => (
    <div>
        <Navbar />
            {props.children}
        <Footer />
    </div>
);

Main.propTypes = {
    children: React.PropTypes.isRequired
};

export default Main;