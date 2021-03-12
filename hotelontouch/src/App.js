import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from './pages';
import { ContactUsPage } from './pages/index';
import { NavbarComponent } from './components';
import Footer from './components/Footer';

import './App.css';
const App = () => (
  <>
    <NavbarComponent />
    <Switch>
      <Route path='/' component={HomePage}></Route>
      <Route exact path='/contact' component={ContactUsPage} />
    </Switch>
    <Footer />
  </>
);
export default App;
