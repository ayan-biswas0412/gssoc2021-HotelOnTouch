import React from 'react';
import { Container, Jumbotron, Button } from 'react-bootstrap';
import { AdminCard ,OpenSourceProgramme,AllContributors} from '../components/index';
import { projectRepository } from '../data/projectData';
import SystemFeature from '../components/SystemFeature';

function HomePage() {
  return (
    <Container>
      <br />
      <br />
      <SystemFeature />
      <AdminCard />
      <OpenSourceProgramme/>
      <AllContributors />
    </Container>
  );
}

export default HomePage;
