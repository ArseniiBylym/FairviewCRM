import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './MainHeader.scss';
import { Routes } from '../../utils/constansts';
import NavMenu from '../NavMenu/NavMenu';
import { UserActions } from '../../actions/AllActions';
import { withRouter } from "react-router";
import { observer, inject } from 'mobx-react';
import LeadTab from '../LeadTab/LeadTab';
import mainLogo from '../../resources/img/logo.png';


@inject('store')
@observer
class MainHeader extends Component {

    logOut = (e) => {
        e.preventDefault();
        UserActions.logout();
        this.props.history.push('/login')
    }

    render() {

        let openedTabs = null;
        if (this.props.store.Leads && this.props.store.Leads.activeLeads.length > 0) {
            openedTabs = this.props.store.Leads.activeLeads.map((item, i) => {
                return (
                    <LeadTab key={item.id} id={item.id} title={item.title} />
                )
            })
        }
        return (
            <div className="MainHeader topbar">
                <div className="dropdown epics-collapsible-dropdown">
                    <button className="btn btn-drop no-caret dropdown-toggle" id="epicsDrop" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <div className="mr-2 hamburgerIcon"/>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right dropdownMenu" aria-labelledby="epicsDrop">
                        <ul>
                            <NavMenu />
                        </ul>
                    </div>
                </div>
                <div className="logo mainLogo">
                    <Link className="mainLinks" to={Routes.LEADS} >
                        <div className="logo-demo"><img className="mainLogoImg" src={mainLogo} alt="mainLogo" /></div>
                    </Link>    
                </div>
                <ul className="epics-menu epics-collapsible border-right">
                    <NavMenu />
                </ul>
                <ul className="epics-menu leads-menu border-right flex-grow-1 leadLinks">
                    {openedTabs}
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
                            <a onClick={this.logOut} className="dropdown-item" href="#">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(MainHeader);
