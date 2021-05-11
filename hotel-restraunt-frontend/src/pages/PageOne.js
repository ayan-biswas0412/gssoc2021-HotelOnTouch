import React from "react";
//import Badge from "react-bootstrap/Badge";
import { Container, Jumbotron, Button } from "react-bootstrap";

const PageOne = () => {
  return (
    <>
      <Container>
        <br />
        <br />
        <Jumbotron>
          <h3>page 1</h3>
          <h1>Welcome to project Hotel-restarunt-frontend</h1>

          <p>
            In Todays Generation the Hotel Industries are changing rapidly so
            this platform will manage the in house needs of hotels like laundry
            service, Room Service Management, Bar, Restraunt Order
            Management.There will be one customer end system and hotel end
            system and customer can request hotel for one of the above service.
            We will use the basic ReactJS, MongoDB and ExpressJS for the web
            development purpose and the entire project will be open source and
            free to use for the end users. This project aims to give a hands on
            experience to the beginners a hand on experience in the open source
            journey
          </p>
          <p>
            <Button
              variant="primary"
              href="https://github.com/ayan-biswas0412/gssoc2021-HotelOnTouch"
            >
              Contribue to this Project
            </Button>
          </p>
        </Jumbotron>
      </Container>
    </>
  );
};

export default PageOne;
