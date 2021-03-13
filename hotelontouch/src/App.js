import React, {useState} from 'react';
import {MemoryRouter, Switch, Route} from 'react-router-dom';
import {HomePage} from './pages';
import {NavbarComponent} from './components';
import Footer from './components/Footer';
import './App.css';
import {lightTheme , darkTheme} from "./components/Theme" ;
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from './components/Global';



const App = () => {

  const [theme, setTheme] = useState('dark');
  const themeToggler = () => {  theme === 'dark'? setTheme('light'): setTheme('dark')  }

  return (
    <ThemeProvider theme={theme === 'light'? lightTheme: darkTheme}>
      <>
      <GlobalStyles/>
      <MemoryRouter>
        <NavbarComponent
          dark = {themeToggler}
          />
        <Switch>
          <Route path="/" component={HomePage}></Route>
        </Switch>
        <Footer/>
      </MemoryRouter>
      </>
  </ThemeProvider>
)
};
export default App;
