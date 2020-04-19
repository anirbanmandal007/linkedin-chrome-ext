import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <h3>Profile Picture: </h3>
        <img id="imgSrc" src=""></img>
        <h3>Name: </h3>
        <p id="profName"></p>
        <h3>Position: </h3>
        <p id="position"></p>
      </div>
    );
  }
}

export default App;
