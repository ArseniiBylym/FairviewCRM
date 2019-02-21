import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './LeadsCard.scss';
import { Routes } from '../../utils/constansts';
import NavMenu from '../NavMenu/NavMenu';
import { UserActions } from '../../actions/AllActions';
import { withRouter } from "react-router";
import { observer, inject } from 'mobx-react';
import iconUser from '../../resources/img/icon-user.svg'
import iconActivity from '../../resources/img/icon-activity.svg'

@inject('store')
@observer
class LeadsCard extends Component {
    render() {
        const { databaseId, providerId, legalBusName, dba, plCity, plState, plZipcode, plPhone } = this.props.config;

        return (
            <div className="LeadsCard col-sm-6 col-lg-4 col-xl-3">
            <div className="c-card c-card-shadow p-0">
                <div className="p-3 border-bottom"><a href="lead.html">
                    <div className="t-600-h text-truncate">{legalBusName}</div></a>
                    <div className="t-400 c-gray-400">{dba}</div>
                </div>
                <div className="p-3">
                    <div className="media"><img className="icon-16 mt-1 mr-3 ml-1" src={iconUser} alt="user icon" />
                        <div className="media-body">
                            <div className="t-400">Johnatan Doe</div>
                            <div className="t-400 c-gray-400">{plPhone}</div>
                        </div>
                    </div>
                </div>
                <div className="p-3 bg-gray-100">
                    <div className="media"><img className="icon-16 mt-1 mr-3" src={iconActivity} alt="activity icon" />
                        <div className="media-body">
                            <div className="t-400 c-gray-400">Last: Call, Sep 28th, 10:56am</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default LeadsCard;