import React from 'react';

import { Route, Switch, useLocation } from 'react-router-dom';
import './assets/scss/App.scss';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import Nav from './components/Nav';

function App() {
  const location = useLocation();

  return (
    <>
      <Nav />
      <AnimatePresence> 
        <Switch location={location} key={location.key}>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} exact={true} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;

// import logo from './logo.svg';

// <img src={logo} className="App-logo" alt="logo" />
