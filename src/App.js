import React, { Component } from 'react';
import Cart from './components/Cart'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>TIY<img src={logo} className="App-logo" alt="logo" />Shop</h2>
        </div>
        <br/>
        <Cart />
      </div>
    );
  }
}

export default App;
