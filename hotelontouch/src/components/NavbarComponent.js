// import React from 'react';
// import {Navbar, Nav} from 'react-bootstrap';
// import Switch from '@material-ui/core/Switch';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
//
// function NavbarComponent(props) {
//
//   return (<Navbar bg="light" expand="lg">
//     <Navbar.Brand href="/">
//       HotelOnTouch
//     </Navbar.Brand>
//     <Navbar.Toggle aria-controls="basic-navbar-nav"/>
//     <Navbar.Collapse id="basic-navbar-nav">
//       <Nav className="mr-auto">
//         <Nav.Link href="/">Home</Nav.Link>
//       </Nav>
//     </Navbar.Collapse>
//     <FormControlLabel onClick={props.dark} value="end" control={<Switch color = "secondary" />} label="Change Theme" labelPlacement="end"/>
//   </Navbar>);
// }
//
// export default NavbarComponent;

import React from "react";
import {faBuilding} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
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
    </Navbar.Collapse>
    <FormControlLabel onClick = {props.dark} value="top" control={<Switch color = "secondary" />} label="Switch Theme" labelPlacement="Top"/>
  </Navbar>);
}
export default NavbarComponent;
library.add(faBuilding);
