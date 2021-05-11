import React from 'react';
import '../Stylesheet/Home.css';
import Lorem from '../Images/lorem.png';
import { Container, Jumbotron } from "react-bootstrap";

export default function HomePage() {
  return (
    <>
    <br></br>
      <Container> 
        <br></br>
        <Jumbotron className="jumbotron-card">
          
              <div class="card2 " >
                <div>
                  <img src={Lorem} class="lorem" alt="lorem " />
                </div>
                <br></br>
                <div>
                <div className="details">
                  <h5>Name : - kumari shalini</h5>
                  <h5>Email:- abc123@gmail.com</h5>
                  <h5>Phone no.:- 98787547</h5>
                </div>
                <hr></hr>
                <div className="hotel_details">
                  <div className="card3">
                    <h5>Hotel Nmae:- ABCDEFG HOTEL</h5>
                  </div>
                  <div className="card4">
                    <h6> Booking Date : 6/9/2021</h6>
                  </div>
                  <div className="card5">
                    <h6>Apperture Date: - 4/10/2021</h6>
                  </div>
                  <div className="card6">
                    <h6>Type of Room :- single</h6>
                  </div>
                </div>
              </div>
                
              </div>
              <div className="about">
                <h1  className="h1tag">Welcome ! To Admin Page</h1>
                <p  className="ptag">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
              type and scrambled it to make a type specimen book.simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
              type and scrambled it to make a type specimen book.text ever since the 1500s,
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
              type and scrambled it to make a type specimen book,text ever since the 1500s,
              Lorem Ipsum is simply dummy text,specimen book,text ever since the 1500s,
              Lorem Ipsum is simply dummy text.specimen book,text ever since the 1500s,
              Lorem Ipsum is simply dummy text.
              </p>
                <a href="/about" className="btn" class="btn btn-secondary">Know more</a>
              </div>
            
            
          </Jumbotron>
        </Container>     
    </>
  )
}

