import React, { Component } from 'react';
import './App.scss';
import MainRoutes from './routes/MainRoutes'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainRoutes />
      </div>
    );
  }
}

export default App;
