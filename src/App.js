import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './assets/scss/App.scss';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

// import logo from './logo.svg';

// <img src={logo} className="App-logo" alt="logo" />
