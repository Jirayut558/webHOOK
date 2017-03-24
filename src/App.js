import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home';
class App extends Component {
  render() {
     
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to HOOK</h2>      
        </div>
        <p className="App-intro">
             
        </p>
        <Home/>
      </div>
    );
  }
}

export default App;
