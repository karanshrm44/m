import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import First from './Container/First';
import Second from './Container/Second';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path = "/" component = {First } />
          <Route path = "/airtel" component = {Second} />
      </div>
    );
  }
}

export default App;
