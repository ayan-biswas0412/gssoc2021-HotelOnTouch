import React from 'react';
import { Container } from 'react-bootstrap';
import { AdminCard ,OpenSourceProgramme,AllContributors,GoodFirstIssue,OurSolution} from '../components/index';
import SystemFeature from '../components/SystemFeature';
function HomePage() {
  return (
    <Container>
      <br />
      <br />
      <SystemFeature />
      <AdminCard />
      <OpenSourceProgramme/>
       <GoodFirstIssue />
      <AllContributors />
      <OurSolution/>
      <AllContributors/>
    </Container>
  );
}
export default HomePage;
