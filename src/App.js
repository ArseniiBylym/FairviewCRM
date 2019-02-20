import React, { Component } from 'react';
import './App.scss';
import MainRoutes from './routes/MainRoutes'
import { Provider } from 'mobx-react';
import { store } from './store/AllStores';


class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<MainRoutes />
				</div>
			</Provider>
		);
	}
}

export default App;
