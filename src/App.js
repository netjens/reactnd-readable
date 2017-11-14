import React, { Component } from 'react';
import Categories from './components/Categories'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        
          <h1 className="App-title">Readable App</h1>
        </header>
        <p className="App-intro">
          <Categories />
        </p>
      </div>
    );
  }
}

export default App;
