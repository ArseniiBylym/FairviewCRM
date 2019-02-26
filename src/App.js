import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import MainRoutes from './routes/MainRoutes'
import { Provider } from 'mobx-react';
import { store } from './store/AllStores';
import PrivateRoute from './routes/PrivateRoute/PrivateRoute';
import Login from './routes/Login/Login';
import { UserActions } from './actions/AllActions';



class App extends Component {

	state = {
		user: null,
		isUserFetched: false,
	}

	componentDidMount = async () => {
		const result = await UserActions.session();
		this.setState({isUserFetched: true})
	}


	render() {
		if(!this.state.isUserFetched) return null
		return (
			<Provider store={store}>
				<div className="App">
					<BrowserRouter >
						<Switch >
							<Route path="/login" component={Login} />
							<PrivateRoute store={store} path='/' component={MainRoutes} />
						</Switch>
					</BrowserRouter>
				</div>
			</Provider>
		);
	}
}

export default App;
