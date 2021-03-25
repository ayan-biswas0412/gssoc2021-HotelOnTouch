import React from 'react';
import {Switch, Route } from 'react-router-dom';
import { HomePage, ContactPage, AppLaunch } from './pages';
import { NavbarComponent } from './components';
import Footer from './components/Footer';


import './App.css';

const App = () => (
  <>
      <NavbarComponent/>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/contact" component={ContactPage}></Route>
        <Route path="/applaunch" component={AppLaunch}></Route>
      </Switch>
      <Footer/>
  </>
  );
export default App;
