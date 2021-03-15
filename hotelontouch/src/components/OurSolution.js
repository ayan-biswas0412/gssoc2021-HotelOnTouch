import React from 'react'
import styled from 'styled-components'
import {Card,Button} from 'react-bootstrap'
import logo1 from '../assets/logo1.svg'
import logo2 from '../assets/logo2.svg'
import logo3 from '../assets/logo3.svg'
const Grid=styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-around;
align-items:center;
text-align:center;
`
const OurSolution = () => {
    const cardInfo = [
        {
            "name" : "Hotel Guest App",
            "url" :"https://github.com/ayan-biswas0412/gssoc2021-HotelOnTouch/tree/main/hotel-restraunt-frontend",
            "logo" :logo1
        },
        {
            "name": "Hotel Admin App",
            "url": "https://admin-hotelontouch.netlify.app/",
            "logo" : logo2
        },
        {
            "name": "Hotel Services End App",
            "url": "https://restraunt-hotelontouch.netlify.app/",
            "logo" : logo3
        }
    ];
  const renderCard = (card, index) => {
      return (
        <div>
          <Card style={{ width: "20rem",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" }} key={index} className="box">
          <Card.Img variant="top" src={card.logo}/>
          <Card.Body>
            <Card.Title>{card.name}</Card.Title>
            <a href={card.url}><Button style={{justifyContent:'center', margin:'auto'}} variant="primary" src={card.url}>Website</Button></a>
          </Card.Body>
        </Card>
        </div>
        );
    };
return(
    <div>  <h4 style={{fontWeight:'bold',fontFamily:'sans-serif',textAlign:'center',marginTop:'15px'}}>Our Solution</h4>
 <Grid>
  {cardInfo.map(renderCard)}
  </Grid>;
  </div>
)
};
export default OurSolution;