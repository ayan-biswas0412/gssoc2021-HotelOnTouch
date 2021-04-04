import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import styled from "styled-components";
import Wave from "react-wavify";

const Heading = styled.h1`
  font-size: 4rem;
  font-family: "sans-serif";
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  letter-spacing: 3px;
  color: #333;
  -webkit-text-stroke: 1px #282828;
  text-shadow: 0px 4px 4px #282828;
`;
const Grid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  text-align: center;
`;

const CardBody = styled(Card.Body)`
  background: #0069d9;
  opacity: 0.9;
  position: absolute;
  top: 0%;
  right: -100%;
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
  width: 17rem;
  height: 23rem;
  position: relative;
  margin: 10px auto;
  overflow: hidden;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.5);
`;

const Image = styled(Card.Img)`
  width: 100%;
  height: auto;
  overflow: hidden;
`;

const AdminCard = () => {
  const [set, setState] = useState(false);
  const cardInfo = [
    {
      projectAdminName: "Ayan Biswas",
      GitHubUserName: "ayan-biswas0412",
      webSite: "https://ayanbiswas.in",
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
        <Heading>Project Admin</Heading>

        <Box key={index} onMouseEnter={hoverIn} onMouseLeave={hoverOut}>
          <Card.Title
            style={{
              marginTop: "2%",
              textShadow: "0px 4px 10px rgba(0,0,0,0.5)",
              color: "black",
              letterSpacing: "2px",
              fontSize: "2rem",
              margin: "0%",
              visibility: set ? "hidden" : "visible",
              backgroundColor: "lightblue",
              padding: "5px",
            }}
          >
            {card.projectAdminName}
          </Card.Title>

          <Image
            variant="top"
            src={`https://avatars.githubusercontent.com/${card.GitHubUserName}`}
          />

          <a href={`https://github.com/${card.GitHubUserName}`}>
            <CardBody style={{ right: set ? "0%" : "-100%" }}>
              <Card.Title style={{ fontWeight: "bold", fontSize: "2rem" }}>
                {card.projectAdminName}
              </Card.Title>
              <Button
                style={{
                  justifyContent: "center",
                  margin: "auto",
                  marginBottom: "5px",
                  color: "#000",
                  backgroundColor: "#fff",
                  border: "3px solid #000",
                  borderOutline: "#000",
                  borderRadius: "1rem",
                }}
                src={card.url}
              >
                <a
                  href={card.webSite}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    src="https://www.saganetwork.net/img/domainikon.png"
                    alt="WebSite Logo"
                    height="30"
                    width="30"
                  />{" "}
                </a>
              </Button>
              <Button
                style={{
                  justifyContent: "center",
                  margin: "auto",
                  marginBottom: "16px",

                  color: "#000",
                  backgroundColor: "#fff",
                  border: "3px solid #000",
                  borderOutline: "#000",
                  borderRadius: "1rem",
                }}
                src={card.url}
              >
                <img
                  src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                  alt="GitHub Profile"
                  height="30"
                  width="30"
                />
                ayan-biswas0142
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
    );
  };
  return <Grid>{cardInfo.map(renderCard)}</Grid>;
};
export default AdminCard;
