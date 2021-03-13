import React, {useState} from 'react';
import { Navbar, Nav  } from 'react-bootstrap';


function NavbarComponent(props) {

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
               HotelOnTouch
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <button onClick = {props.dark}>Change Theme</button>
        </Navbar>
    );
}

export default NavbarComponent;
