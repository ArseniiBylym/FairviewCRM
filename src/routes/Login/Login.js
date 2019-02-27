import React, { Component } from 'react';
import './Login.scss';
import { UserActions } from '../../actions/AllActions'
import { User } from '../../store';
import { observer, inject } from 'mobx-react';

@inject('store')
@observer
class Login extends Component {

    state = {
        name: '',
        password: ''
    }

    inputHandler = field => e => {
        this.setState({
            [field]: e.target.value
        })
    }

    loginUser = async(e) => {
        e.preventDefault();
        if (!this.state.name || !this.state.password) {
            UserActions.setLoginError('All fields are required')    
            return 
        }
        await UserActions.login(this.state.name, this.state.password);
        this.props.history.push('/customers')
    }

    keyUpHandler = (e) => {
        const keyCode = e.keyCode;
        if(keyCode === 13) {
            e.preventDefault();
            this.loginUser(e);
        }
    }

    render() {
        return (
            <div className="Login">
                <div className="container-fluid" style={{height: '100vh'}}>
                    <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-4 ">
                            <div className="card mt-3 p-3">
                                <h2 className="text-center my-3">Log in</h2>
                                {/* <form > */}
                                    <div className="form-group">
                                        <label className="w-100">Name
                                            <input onKeyUp={this.keyUpHandler} onChange={this.inputHandler('name')} name="name" type="text" className="form-control"/>
                                        </label>
                                    </div>
                                    <div className="form-group">
                                        <label className="w-100">Password
                                            <input onKeyUp={this.keyUpHandler} onChange={this.inputHandler('password')} name="password" type="password" className="form-control" />
                                        </label>
                                    </div>
                                    {this.props.store.User.loginError && 
                                        <p className="text-danger">{this.props.store.User.loginError}</p>
                                    }
                                    <button onClick={this.loginUser} className="btn mainBgColor col-6 offset-3">Login</button>
                                {/* </form> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
