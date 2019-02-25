import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// import './MainRoutes.scss';
import Leads from './Leads/Leads';
import LeadsItem from './LeadsItem/LeadsItem';

import Activities from './Activities/Activities';
import PricingRequests from './PricingRequests/PricingRequests';
import Login from './Login/Login';
import { Routes } from '../utils/constansts';
import MainHeader from '../components/MainHeader/MainHeader'
import { observer, inject } from 'mobx-react';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PageNotFound from '../routes/PageNotFound/PageNotFound';
import Modal from '../components/Modal/Modal'
import PricingRequestItem from './PricingRequestItem/PricingRequestItem'

@inject('store')
@observer
class MainRoutes extends Component {
    render() {
        return (
            <div className="MainRoutes">
                    <MainHeader />
                    <Switch>
                        <Route exact path={Routes.LEADS} component={Leads} />
                        <Route path={Routes.LEADS_ITEM} component={LeadsItem} />
                        <Route exact path={Routes.ACTIVITES} component={Activities} />
                        <Route exact path={Routes.PRICING_REQUESTS} component={PricingRequests} />
                        <Route path={Routes.PRICING_REQUESTS_ITEM} component={PricingRequestItem} />
                        <Route path='/' component={PageNotFound} />
                    </Switch>
                    {/* <Modal/> */}
            </div>
        );
    }
}

export default MainRoutes;
