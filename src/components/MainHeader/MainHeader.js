import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './MainHeader.scss';
import { Routes } from '../../utils/constansts';
// import UserIcon from '../../resources/img/user.svg'
// import BellIcon from '../../resources/img/notification.svg'

class MainHeader extends Component {
    render() {
        return (
            <div className="MainHeader topbar">
                <div className="dropdown epics-collapsible-dropdown">
                    <button className="btn btn-drop no-caret dropdown-toggle" id="epicsDrop" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="hamburgerIcon"></div>
                    </button>
                    <div class="dropdown-menu dropdown-menu-right dropdownMenu" aria-labelledby="epicsDrop">
                        <NavLink className="mainLinks" to={Routes.LEADS}activeClassName="active">
                            Leads
                        </NavLink>
                        <NavLink className="mainLinks" to={Routes.ACTIVITES}activeClassName="active">
                            Activities
                        </NavLink>
                        <NavLink className="mainLinks" to={Routes.PRICING_REQUESTS}activeClassName="active">
                            Pricing Requests
                        </NavLink>
                    </div>
                </div>
                <div className="logo">
                    <NavLink className="mainLinks" to={Routes.LEADS}activeClassName="active">
                        <div className="logo-demo">Fairview</div>
                    </NavLink>    
                </div>
                <ul className="epics-menu epics-collapsible border-right">
                    <li>
                        <NavLink className="mainLinks" to={Routes.LEADS}activeClassName="active">
                            Leads
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="mainLinks" to={Routes.ACTIVITES}activeClassName="active">
                            Activities
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="mainLinks" to={Routes.PRICING_REQUESTS}activeClassName="active">
                            Pricing Requests
                        </NavLink>
                    </li>
                </ul>
                <ul className="epics-menu leads-menu border-right flex-grow-1">
                    <li className="ml-auto">
                        <div className="mr-2 bellIcon"/>
                    </li>
                </ul>
                <div className="user-avatar ml-auto">
                    <div className="dropdown">
                        <button className="btn btn-drop btn-drop-image dropdown-toggle" id="userDrop" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div className="mr-2 userIcon"/>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDrop">
                            <a className="dropdown-item" href="#">User Profile</a>
                            <a className="dropdown-item" href="#">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainHeader;
