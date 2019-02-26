import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Routes } from '../../utils/constansts';


function MainMenu(props) {
    return (
        <Fragment>
            <li>
                <NavLink className="mainLinks" to={Routes.LEADS} >
                    Leads
                </NavLink>
            </li>
            <li>
                <NavLink className="mainLinks" to={Routes.ACTIVITES} >
                    Activities
                </NavLink>
            </li>
            <li>
                <NavLink className="mainLinks" to={Routes.PRICING_REQUESTS} >
                    Pricing Requests
                </NavLink>
            </li>
        </Fragment>
    );
}

export default MainMenu;