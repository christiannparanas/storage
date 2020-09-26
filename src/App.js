import React from 'react';

import { Route, Switch } from 'react-router-dom';
import './assets/scss/App.scss';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

import Nav from './components/Nav';

function App() {


  return (
    <>
      <Nav />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} exact={true} />
        </Switch>
    </>
  );
}

export default App;
