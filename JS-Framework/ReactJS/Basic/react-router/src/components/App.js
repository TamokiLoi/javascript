import React, { Component } from 'react';
import '../css/App.css';
import Nav from './Nav';
import Footer from './Footer';
import NavigateURL from '../router/NavigateURL';
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <NavigateURL />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
