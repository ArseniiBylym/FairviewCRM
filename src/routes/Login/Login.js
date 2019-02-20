import React, { Component } from 'react';
import './Login.scss';
import { UserActions } from '../../actions/AllActions'

class Login extends Component {

    loginUser = () => {
        UserActions.login();
        this.props.history.push('/leads')
    }

    render() {
        return (
            <div className="Login">
                <div className="container-fluid" style={{height: '100vh'}}>
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-4 ">
                            <div className="card mt-3 p-3">
                                <h2 className="text-center my-3">Log in</h2>
                                <form >
                                    <div className="form-group">
                                        <label className="w-100">Email
                                            <input name="email" type="email" className="form-control"/>
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label className="w-100">Password
                                            <input name="password" type="password" className="form-control" />
                                        </label>
                                    </div>
                                    <button onClick={this.loginUser} className="btn btn-primary col-6 offset-0">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
