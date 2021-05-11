import React from "react";
import '../style/Home.css';
import Chef from '../assets/chef.svg';
import Wine from '../assets/wine.svg';
import { Container,Jumbotron, Button } from "react-bootstrap";

const HomePage = () => {
  return (
    <>
    <Container><br></br><br></br>
      <Jumbotron className="jumbotron-card">
    <div className="main">
      <div>
        <img src={Chef} alt="restaurant" className="rest1"/>
      </div>
      <div className="head">
        <h1 className="h1tag">Welcome</h1>
        <h2 className="h2tag">
          To Hotel Restaurant page
        </h2>
        <br></br>
        <Button className="btn"
              variant="secondary"
              href="https://github.com/ayan-biswas0412/gssoc2021-HotelOnTouch"
            >
              <h5>Contribue to this Project</h5>
            </Button>
      </div>
      <div>
        <img src={Wine} alt="restaurant" className="rest2"/>
      </div>
      <div className="about_rest">
        <h2 className="h2tag2">About Restaurant</h2>
        <p className="ptag">
            In Todays Generation the Hotel Industries are 
            changing rapidly so this platform will manage the
            in house needs of hotels like laundry service, Room 
            Service Management, Bar, Restraunt Order Management.
            There will be one customer end system and hotel end
            system and customer can request hotel for one of the above service.
            We will use the basic ReactJS, MongoDB and ExpressJS for the web
            development purpose and the entire project will be open source and
            free to use for the end users. This project aims to give a hands on
            experience to the beginners a hand on experience in the open source
            journey
          </p>
          <Button className="btn2"
              variant="secondary"
              href="https://github.com/ayan-biswas0412/gssoc2021-HotelOnTouch"
            >
              <h5>Contribue to this Project</h5>
            </Button>
      </div>
    </div>
    </Jumbotron>
    </Container> 
    </>
  );
};

export default HomePage;