import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { HomePage } from './pages';
import { NavbarComponent } from './components';
import Footer from './components/Footer';
import Darkmode from 'darkmode-js';


import './App.css';
const options = {
  bottom: '64px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '32px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: true, // default: true,
  label: 'Ｄ', // default: ''
  autoMatchOsTheme: true // default: true
}
new Darkmode().showWidget();

const darkmode = new Darkmode(options);
darkmode.showWidget();
const App = () => (
  <MemoryRouter>
      <NavbarComponent/>
      <Switch>
        <Route path="/" component={HomePage}></Route>
      </Switch>
      <Footer/>
  </MemoryRouter>
  );
export default App;
