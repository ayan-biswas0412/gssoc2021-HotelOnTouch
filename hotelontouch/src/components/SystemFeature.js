import React from 'react';
import styled from 'styled-components'
import { Jumbotron } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import image from '../assets/undraw_project_team_lc5a.svg';

const Centering = styled.div`
justify-content:space-around;
align-items:center;
text-align:center;
padding-bottom:40px;
`

function SystemFeature() {
    return (
        <Jumbotron >
            <Centering>
                <Image src={image} style={{ textAlign: 'center' }} fluid />
            </Centering>

            <h1>Completely Open Sourced Hotel Management System</h1>
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
        </Jumbotron>
    );
}

export default SystemFeature;