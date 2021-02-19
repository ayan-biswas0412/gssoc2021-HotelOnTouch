import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

import { HomePage } from './pages';
import { NavbarComponent } from './components';

import './App.css';

const App = () => (
  <MemoryRouter>
      <NavbarComponent/>
      <Switch>
        <Route path="/" component={HomePage}></Route>
      </Switch>
  </MemoryRouter>
);

export default App;
