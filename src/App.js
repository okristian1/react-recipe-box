import React, { Component } from 'react';
import './App.css';

import Layout from './components/Layout';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>FreeCodeCamp Recipe Book</h1>
        </div>
        <Layout />
      </div>
    );
  }
}

export default App;
