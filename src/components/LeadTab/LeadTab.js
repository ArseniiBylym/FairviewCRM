import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import './LeadTab.scss';
import iconClose from '../../resources/img/icon-close.svg';
import { LeadsActions } from '../../actions/AllActions';


function LeadTab ({id, title}) {

    const closeHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        LeadsActions.removeFromActiveTabs(id);
    }

    return (
        <li>    
            <NavLink to={`/leads/${id}`}>
                <div className="lead-name">{title}</div>
                <div onClick={closeHandler} className="lead-close">
                    <img src={iconClose} alt='' />
                </div>
            </NavLink>
        </li>
    )
}

export default LeadTab;