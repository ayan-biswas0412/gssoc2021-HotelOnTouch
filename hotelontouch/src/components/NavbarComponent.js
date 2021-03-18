import React from "react";
import {faBuilding} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined';
import IconButton from '@material-ui/core/IconButton';

import {
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
  NavDropdown
} from "react-bootstrap";

function NavbarComponent(props) {



  return (<Navbar sticky="top" collapseOnSelect="collapseOnSelect" expand="lg" bg="light" variant="light">
    <Navbar.Brand href="/">
      <FontAwesomeIcon icon="building"/>
      HotelOnTouch
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <NavDropdown title="SignUp/SignIn" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Register</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Login</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      <Form inline="inline">
        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
        <Button variant="outline-info">Search</Button>
      </Form>

 <FormControlLabel onClick= {props.dark} size="Normal" control={<Switch/>} labelPlacement = "start" color = "primary" label= <Brightness5OutlinedIcon/>  />


    </Navbar.Collapse>
  </Navbar>);
}
export default NavbarComponent;
library.add(faBuilding);
