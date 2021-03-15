import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

function NavbarComponent(props) {

  return (<Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">
      HotelOnTouch
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    <FormControlLabel onClick={props.dark} value="end" control={<Switch color = "secondary" />} label="Change Theme" labelPlacement="end"/>
  </Navbar>);
}

export default NavbarComponent;
