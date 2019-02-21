import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
// import './MainRoutes.scss';
import Leads from './Leads/Leads';
import Activities from './Activities/Activities';
import PricingRequests from './PricingRequests/PricingRequests';
import Login from './Login/Login';
import { Routes } from '../utils/constansts';
import MainHeader from '../components/MainHeader/MainHeader'
import { observer, inject } from 'mobx-react';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PageNotFound from '../routes/PageNotFound/PageNotFound';

@inject('store')
@observer
class MainRoutes extends Component {
    render() {
        // console.log(this.props.store.User.isLoged)
        return (
            <div className="MainRoutes">
                    <MainHeader />
                    <Switch>
                        <Route path={Routes.LEADS} component={Leads} />
                        <Route path={Routes.ACTIVITES} component={Activities} />
                        <Route path={Routes.PRICING_REQUESTS} component={PricingRequests} />
                        <Route path='/*' component={PageNotFound} />
                    </Switch>
            </div>
        );
    }
}

export default MainRoutes;
