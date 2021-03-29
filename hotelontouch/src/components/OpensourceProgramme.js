import React from 'react'
import styled from 'styled-components'
import {Card,Button} from 'react-bootstrap'
const Grid=styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:space-around;
align-items:center;
text-align:center;
`
const OpenSourceProgramme = () => {
    const cardInfo = [
        {
            "name" : "Girlscript Summer of Code 2021",
            "url" :"https://gssoc.girlscript.tech/index.html",
            "logo" :"https://gssoc.girlscript.tech/images/favicon/favicon.png"
        }
    ];
  const renderCard = (card, index) => {
      return (
        <div>
          <h4 style={{fontWeight:'bold',fontFamily:'sans-serif'}}>We are part of</h4>
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
return <Grid>
 {cardInfo.map(renderCard)}
  </Grid>; 
};
export default OpenSourceProgramme