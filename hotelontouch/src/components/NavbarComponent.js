import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

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
    <FormControlLabel onClick={props.dark} value="end" control={<Switch color = "secondary" />} label="Change Them" labelPlacement="end"/>
  </Navbar>);
}

export default NavbarComponent;
