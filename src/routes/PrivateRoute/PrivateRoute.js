import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { inject, observer } from 'mobx-react';

inject('store')
@observer
class PrivateRoute extends Component {
    render() {
        const { component: Component, ...rest } = this.props
        const isUserAuth = this.props.store.User.isLoged;
        if (isUserAuth) {
            return (
                <Component />
            )
        } else {
            return (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: this.props.location }
                    }}
                />
            )
        }
    }
}

export default PrivateRoute;