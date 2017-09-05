import React, { Component } from 'react';
import StockAlert from './Alerts/StockAlert';
import LanguageWidget from './Widgets/LanguageWidget';
import MessageNotification from './Notifications/MessageNotification';
import SessionSetting from './Settings/SessionSetting';
import  NavbarLink from './NavbarLink';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar navbar-inverse">
                <div className="navbar-header">
                    <a className="navbar-link">
                        <h4 className="ml-10"> <i className="icon-grid fa fa-3x"/> Dashboard</h4>
                    </a>

                    <ul className="nav navbar-nav visible-xs-block">
                        <li><a data-toggle="collapse" data-target="#navbar-mobile"><i className="icon-tree5"/></a></li>
                        <li><a className="sidebar-mobile-main-toggle"><i className="icon-paragraph-justify3"/></a></li>
                    </ul>
                </div>
                <div className="navbar-collapse collapse" id="navbar-mobile">
                    <ul className="nav navbar-nav">
                        <li><a className="sidebar-control sidebar-main-toggle hidden-xs"><i className="icon-paragraph-justify3"/></a></li>
                        <StockAlert />
                    </ul>
                    <p className="navbar-text"><span className="label bg-success-400">Online</span></p>
                    <NavbarLink/>
                    <ul className="nav navbar-nav navbar-right">
                        <LanguageWidget/>
                        <MessageNotification/>
                        <SessionSetting/>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;