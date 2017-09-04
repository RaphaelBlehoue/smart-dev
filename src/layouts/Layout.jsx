import React , { Component } from 'react';

class Layout extends Component{
    render() {
        return (
            <div>
                <div>Navbar</div>
                {this.props.children}
                <div>Footer</div>
            </div>
        )
    }
}

export default Layout;