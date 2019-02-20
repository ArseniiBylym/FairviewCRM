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

@inject('store')
@observer
class MainRoutes extends Component {
    render() {
        console.log(this.props.store.User.isLoged)
        return (
            <div className="MainRoutes">
                <BrowserRouter>
                    <Fragment>
                        {this.props.store.User.isLoged && <MainHeader />}
                        <Switch >
                            <Route path="/login" component={Login} />
                            <PrivateRoute store={this.props.store} path={Routes.LEADS} component={Leads} />
                            <PrivateRoute store={this.props.store} path={Routes.ACTIVITES} component={Activities} />
                            <PrivateRoute store={this.props.store} path={Routes.PRICING_REQUESTS} component={PricingRequests} />
                            <Redirect from='/' to={this.props.store.User.isLoged ? '/leads' : '/login'} />
                        </Switch>
                    </Fragment>
                </BrowserRouter>
            </div>
        );
    }
}

export default MainRoutes;
