import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  HomePage from './pages/HomePage';
import Navbar from './pages/NavbarComp';
import About from './pages/About';


const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Switch>
        <Router>
        <Route exact path='/' component={HomePage} />
        <Route path='/about' component={About} />
        </Router>
        
      </Switch>
    </div>
  );
};

export default App;
