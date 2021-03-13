import React from 'react';
import styled from 'styled-components';
import { Card, Button } from 'react-bootstrap';
import Wave from 'react-wavify';
const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

const Button2 = styled.button`
  justify-content: center;
  font-size: 1.3rem;
  border: 3px solid grey;
  margin: auto;
  background-color: orange;
  border-radius: 6px;
  margin-top: 3%;
  box-shadow: 0px 4px 4px #282828;
  color: #fff;

  &:hover {
    background-color: black;
    color: white;
  }
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

const StyleCard = styled(Card)`
  width: 20rem;
  border: 2px solid grey;
  boxshadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-left: 15%;
  background-image: url("https://www.transparenttextures.com/patterns/psychedelic.png");
`;
const StyleImg = styled(Card.Img)`
  margin-top: 3%;
  border-radius: 50%;
  width: 50%;
  border: 4px solid #2c5364;
  box-shadow: 0px 4px 4px #2c5364;
`;

const OpenSourceProgramme = () => {
  const cardInfo = [
    {
      "name": "Girlscript Summer of Code 2021",
      "url": "https://gssoc.girlscript.tech/index.html",
      "logo": "https://gssoc.girlscript.tech/images/favicon/favicon.png",
    },
  ];
  const renderCard = (card, index) => {
    return (
      <div>
        <Heading>We are part of</Heading>
        <StyleCard key={index} className="box">
          <Wave
            fill="url(#gradient)"
            paused={false}
            options={{
              height: 20,
              amplitude: 20,
              speed: 0.5,
              points: 3,
            }}
          >
            <defs>
              <linearGradient id="gradient" gradientTransform="rotate(90)">
                <stop offset="10%" stopColor="#0F2027" />
                <stop offset="90%" stopColor="#203A43" />
              </linearGradient>
            </defs>
          </Wave>

          <Card.Title>
            <StyleImg variant="top" src={card.logo} />
          </Card.Title>

          <Card.Body
            style={{ background: "linear-gradient(#0F2027,#203A43,#2C5364)" }}
          >
            <Card.Title style={{ color: "white" }}>{card.name}</Card.Title>
            <a href={card.url}>
              <Button2 src={card.url}>Website</Button2>
            </a>
          </Card.Body>
        </StyleCard>
      </div>
    );
  };
  return <Grid>{cardInfo.map(renderCard)}</Grid>;
};
export default OpenSourceProgramme;
