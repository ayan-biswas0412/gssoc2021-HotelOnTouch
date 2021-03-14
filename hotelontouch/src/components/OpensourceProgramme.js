import React, { useState } from 'react'
import styled from 'styled-components'
import { Card, Button } from 'react-bootstrap'
import Wave from 'react-wavify'
const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;
const Heading = styled.h1`
  font-size: 4.5rem;
  font-family: "sans-serif";
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  color: #333;
  -webkit-text-stroke: 1px #282828;
  text-shadow: 0px 4px 4px #282828;
`;

const CardBody = styled(Card.Body)`
  background: #0069d9;
  opacity: 0.9;
  position: absolute;
  top: 0%;
  left: -100%;
  height: 100%;
  width: 100%;
  color: #fff;
  padding: 20px;
  display: grid;
  place-items: center;
  align-items: center;
  box-sizing: border-box;
  transition: all 0.5s;
`;

const Box = styled.div`
  width: 20rem;
  height: 24rem;
  position: relative;
  margin: 10px auto;
  overflow: hidden;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);
`;

const Image = styled(Card.Img)`
  width: 70%;
  height: auto;
  overflow: hidden;
`;

const OpenSourceProgramme = () => {
  const [set, setState] = useState(false);

  const cardInfo = [
    {
      name: "Girlscript Summer of Code 2021",
      url: "https://gssoc.girlscript.tech/index.html",
      logo: "https://gssoc.girlscript.tech/images/favicon/favicon.png",
    },
  ];
  function hoverIn() {
    setState(true);
  }
  function hoverOut() {
    setState(false);
  }
  const renderCard = (card, index) => {
    return (
      <div>
        <Heading>We are part of</Heading>

        <Box key={index} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
          <Card.Title
            style={{
              marginTop:'2%',
              textShadow: "0px 4px 10px rgba(0,0,0,0.5)",
              letterSpacing:'2px',
              fontSize: "1.5rem",
              visibility: set ? "hidden" : "visible",
            }}
          >
            {card.name}
          </Card.Title>

          <Image variant="top" src={card.logo} />

          <a href={card.url}>
            <CardBody style={{ left: set ? "0%" : "-100%" }}>
              <Card.Title style={{ fontWeight: "bold", fontSize: "2rem" }}>
                {card.name}
              </Card.Title>
              <Button
                  style={{
                    justifyContent: "center",
                    margin: "auto",
                    color: "#000",
                    backgroundColor: "#fff",
                    border: "3px solid #000",
                    borderOutline: "#000",
                  }}
                  src={card.url}
                >
                  Website
                </Button>
              
            </CardBody>
          </a>
          <Wave
            fill="#0069D9"
            paused={false}
            options={{
              height: 20,
              amplitude: 20,
              speed: 0.5,
              points: 3,
            }}
          />
        </Box>
      </div>
    )
  }
  return <Grid>{cardInfo.map(renderCard)}</Grid>
};
export default OpenSourceProgramme;
