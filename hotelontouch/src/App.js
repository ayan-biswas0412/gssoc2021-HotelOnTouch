import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages';
import { NavbarComponent } from './components';
import Footer from './components/Footer';
import OpenSourceProgramme from './components/OpensourceProgramme'
import './App.css';
const App = () => (
  <MemoryRouter>
      <NavbarComponent/>
      <Switch>
        <Route path="/" component={HomePage}></Route>
      </Switch>
      <OpenSourceProgramme/>
      <Footer/>
  </MemoryRouter>
  );
export default App;
