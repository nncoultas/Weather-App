import React, { Component } from 'react';

import TitleBar from './components/titleBar';
import CurrentWeather from './components/currentWeather';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TitleBar />
        <CurrentWeather />
      </div>
    );
  }
}

export default App;
