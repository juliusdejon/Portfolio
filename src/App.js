import React, { Component } from 'react';
import './App.css';
import ShowCase from './components/showcase';
import SectionA from './components/SectionA';
import SectionB from './components/SectionB';
import SectionC from './components/SectionC';
import SectionD from './components/SectionD';
import Footer from './unused/footer';
class App extends Component {
  render() {
    return (
    <div className="App">
    <ShowCase title="Julius Dejon" />
    <SectionA />
    <SectionB />
    <Footer />
    </div>
    );
  }
}

export default App;