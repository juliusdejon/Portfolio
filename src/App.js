import React, { Component } from 'react';

 
import './App.css';

import Navbar from './navbar';
import HomePage from './homepage';
import Footer from './footer';

class App extends Component {
  render() {
    return (
    <div className="App">
    <Navbar />
    <HomePage />
    <Footer />
    </div>
    );
  }
}

export default App;