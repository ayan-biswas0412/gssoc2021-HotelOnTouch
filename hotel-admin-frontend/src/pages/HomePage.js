import React from 'react';
import '../Stylesheet/Home.css';
import Imgage from '../Images/lorem.png';

export default function HomePage() {
  return (
    <>
        
        <div >
            <div class="card" >
              <div class="card2 " >
                <div>
                <img src={Imgage} class="img" alt="lorem image" />
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
              <div class="card-body">
              <h1 class="card-title" className="h1tag">Welcome ! To Admin Page</h1>
              <p class="card-text" className="ptag">Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of 
              type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 
              typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            <br></br>
            <a href="#" className="btn" class="btn btn-primary">Know more</a>
              </div>
            </div>
          </div>
    </>
  )
}

