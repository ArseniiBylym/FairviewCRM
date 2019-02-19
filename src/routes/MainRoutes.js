import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// import './MainRoutes.scss';
import Leads from './Leads/Leads';
import Activities from './Activities/Activities';
import PricingRequests from './PricingRequests/PricingRequests';
import { Routes } from '../utils/constansts';
import MainHeader from '../components/MainHeader/MainHeader'


class MainRoutes extends Component {
    render() {
        return (
            <div className="MainRoutes">
                <BrowserRouter>
                    <Fragment>
                        <MainHeader />
                        <Switch >
                            <Route exact path={Routes.LEADS} component={Leads} />
                            <Route exact path={Routes.ACTIVITES} component={Activities} />
                            <Route exact path={Routes.PRICING_REQUESTS} component={PricingRequests} />
                            <Redirect from='/' to={Routes.LEADS} />
                        </Switch>
                    </Fragment>
                </BrowserRouter>
            </div>
        );
    }
}

export default MainRoutes;
