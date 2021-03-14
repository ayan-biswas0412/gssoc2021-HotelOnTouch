
import React, {useState} from 'react';
import { Container, Jumbotron, Button } from 'react-bootstrap';
import { AdminCard ,OpenSourceProgramme,AllContributors} from '../components/index';
import { projectRepository } from '../data/projectData';
import {lightTheme , darkTheme} from "./Theme" ;
import {ThemeProvider} from "styled-components";
import SystemFeature from '../components/SystemFeature';


function HomePage() {


  const [theme] = useState('light');
  return (
    <ThemeProvider theme={theme === 'light'? lightTheme: darkTheme}>
    <Container>
      <br />
      <br />
      <SystemFeature />
      <AdminCard />
      <OpenSourceProgramme/>
      <AllContributors />
    </Container>
  </ThemeProvider>
  );
}

export default HomePage;
