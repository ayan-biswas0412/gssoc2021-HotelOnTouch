import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { AdminCard ,OpenSourceProgramme,AllContributors} from '../components/index';
import { projectRepository } from '../data/projectData';
import styled from 'styled-components';





const Jumbotron=styled.div`
background-image:url("https://images.unsplash.com/photo-1574083438348-f4158ba994b3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80");

background-position: 0 -70px;
padding: 60px;
padding:30px;
margin: 10px;
margin-top:0px;
border-radius:15px;
box-shadow: 10px 10px 5px grey;

@import url(https://fonts.googleapis.com/css?family=Montserrat);
@import url(https://fonts.googleapis.com/css?family=Droid+Sans);

h1{
  color:#FFF;
  background: rgba(0, 0, 0, 0.6);
  font-size: 3.0rem;
  text-align: center;
  padding-bottom:8px;
  margin-bottom: 0px;
  border-radius:15px;
  font-family: "Montserrat", sans-serif;
  text-decoration: none;
  font-size: 50px;
  font-weight: bold;
   
    
}


p{
  background: rgba(0, 0, 0, 0.7);
  color:#fff;
}

div[class*=box] {
	height: 33.33%;
	width: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
}
.box-1 {
  background-color: #440a67;
  border-radius:5px;
 }

.btn {
	line-height: 38px;
	height: 50px;
	text-align: center;
	width: 300px;
	cursor: pointer;
  margin-top:5px;
  margin-bottom:5px;
  font-size: 18px;
  font-weight: bold;
  
  
}
.btn-one {
	color: #FFF;
	transition: all 0.3s;
	position: relative;
  
}
.btn-one span {
	transition: all 0.3s;
}
.btn-one::before {
	content: '';
	position: absolute;
	bottom: 5pxpx;
	left: 0;
	width: 100%;
	height: 80%;
	z-index: 1;
	opacity: 0;
	transition: all 0.3s;
	border-top-width: 1px;
	border-bottom-width: 1px;
	border-top-style: solid;
	border-bottom-style: solid;
	border-top-color: rgba(255,255,255,0.5);
	border-bottom-color: rgba(255,255,255,0.5);
	transform: scale(0.1, 1);
}
.btn-one:hover span {
	letter-spacing: 2px;
}
.btn-one:hover::before {
	opacity: 1;	
	transform: scale(1, 1);	
}
.btn-one::after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	transition: all 0.3s;
	background-color: rgba(255,255,255,0.1);
}
.btn-one:hover::after {
	opacity: 0;	
	transform: scale(0.1, 1);
}


`

function HomePage() {
  return (
    <Container>
      <br />
      <br />
      <Jumbotron>
        <h1>Welcome to project HotelOnTouch</h1>
        <p>
          In Todays Generation the Hotel Industries are changing rapidly so this
          platform will manage the in house needs of hotels like laundry
          service, Room Service Management, Bar, Restraunt Order
          Management.There will be one customer end system and hotel end system
          and customer can request hotel for one of the above service. We will
          use the basic ReactJS, MongoDB and ExpressJS for the web development
          purpose and the entire project will be open source and free to use for
          the end users. This project aims to give a hands on experience to the
          beginners a hand on experience in the open source journey
        </p>
        <p>
          {/* <Button variant='primary' href={projectRepository}>
            Contribue to this Project
          </Button> */}
          <div class="box-1">
  <div class="btn btn-one">
    <span>Contribute To This Project</span>
  </div>
</div>
          
        </p>
      </Jumbotron>
      <AdminCard />
      <OpenSourceProgramme/>
      <AllContributors />
    </Container>
  );
}

export default HomePage;
