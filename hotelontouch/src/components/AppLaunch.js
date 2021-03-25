import React from 'react';
import styled from 'styled-components'
import { Container, Jumbotron } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { Row, Col } from 'react-bootstrap';
import { projectRepository } from '../data/projectData';
import travelImage from '../assets/travel_plans.svg';
import apartmentImage from '../assets/apartment_rent.svg';

const Centering = styled.div`
justify-content:space-around;
align-items:center;
text-align:justify;
font-size:1.3rem;
line-height:200%;
padding-bottom:40px;
`

const desc = "In Todays Generation the Hotel Industries are changing rapidly so this platform will manage the in house needs of hotels like laundry service, Room Service Management, Bar, Restraunt Order Management.There will be one customer end system and hotel end system and customer can request hotel for one of the above service.";
const feat = "In Todays Generation the Hotel Industries are changing rapidly so this platform will manage the in house needs of hotels like laundry service, Room Service Management, Bar, Restraunt Order Management.There will be one customer end system and hotel end system and customer can request hotel for one of the above service.";


function AppLaunch() {
    return (
        <Jumbotron>
            <h1 style={{ marginBottom: '4rem', fontSize:'250%', letterSpacing:'0.3rem' }} className="d-flex flex-column justify-content-center align-items-center">Welcome to HotelOnTouch!</h1>
            <Container fluid >
                <Row>
                    <Col><Image src={travelImage} style={{ width: '90%', height: '90%' }} fluid /></Col>
                    <Col style={{ textAlign: 'justify' }} className="d-flex flex-column justify-content-center align-items-center"><Centering>{desc}</Centering></Col>
                </Row>

                <Row>
                    <Col className="d-flex flex-column justify-content-center align-items-center"><Centering>{desc}</Centering></Col>
                    <Col><Image src={apartmentImage} style={{ width: '90%', height: '90%' }} fluid /></Col>
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default AppLaunch;