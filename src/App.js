import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import First from './Container/First';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Route exact path = "/" component = {First } />
      </div>
    );
  }
}

export default App;
