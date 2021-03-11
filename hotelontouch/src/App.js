import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages';
import { ContactUsPage } from './pages';
import { NavbarComponent } from './components';
import Footer from './components/Footer';

import './App.css';
const App = () => (
  <MemoryRouter>
    <NavbarComponent />
    <Switch>
      <Route path='/' component={HomePage}></Route>
      <Route exact path='/contact' component={ContactUsPage} />
    </Switch>
    <Footer />
  </MemoryRouter>
);
export default App;
