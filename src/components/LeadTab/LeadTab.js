import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './LeadTab.scss';
import iconClose from '../../resources/img/icon-close.svg';
import { LeadsActions } from '../../actions/AllActions';
import { withRouter } from "react-router";
// import {store} from '../../store/AllStores'
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class LeadTab extends Component {

    closeHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        LeadsActions.removeFromActiveTabs(this.props.id);
        if(+this.props.store.Leads.currentLead.databaseId === +this.props.id) {
            this.props.history.push('/customers');
        }
    }

    render() {
        return (
            <li>    
                <NavLink to={`/customers/${this.props.id}`}>
                    <div className="lead-name">{this.props.title}</div>
                    <div onClick={this.closeHandler} className="lead-close">
                        <img src={iconClose} alt='' />
                    </div>
                </NavLink>
            </li>
        )
    }

}

export default withRouter(LeadTab);