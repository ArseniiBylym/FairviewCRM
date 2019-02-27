import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Routes } from '../../utils/constansts';


function MainMenu(props) {
    return (
        <Fragment>
            <li>
                <NavLink exact className="mainLinks" to={Routes.LEADS} >
                    Customers
                </NavLink>
            </li>
            <li>
                <NavLink exact className="mainLinks" to={Routes.ACTIVITES} >
                    Activities
                </NavLink>
            </li>
            <li>
                <NavLink exact className="mainLinks" to={Routes.PRICING_REQUESTS} >
                    Pricing Requests
                </NavLink>
            </li>
            <li>
                <NavLink exact className="mainLinks" to={Routes.EMPTY_PAGE} >
                    Leads
                </NavLink>
            </li>
        </Fragment>
    );
}

export default MainMenu;