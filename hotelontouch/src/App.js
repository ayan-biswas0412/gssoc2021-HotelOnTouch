import React from 'react';
import {Switch, Route } from 'react-router-dom';
import { HomePage, ContactPage } from './pages';
import { NavbarComponent } from './components';
import Footer from './components/Footer';

import * as ROUTES from './constants/routes';

import './App.css';

const App = () => (
  <>
      <NavbarComponent/>
      <Switch>
        <Route exact path={ROUTES.HOMEPAGE} component={HomePage}></Route>
        <Route path={ROUTES.CONTACT_PAGE} component={ContactPage}></Route>
      </Switch>
      <Footer/>
  </>
  );
export default App;
