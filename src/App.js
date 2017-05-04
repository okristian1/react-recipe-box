import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Layout from './components/Layout';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Recipe Box</h2>
        </div>
        <Layout />
      </div>
    );
  }
}

export default App;
