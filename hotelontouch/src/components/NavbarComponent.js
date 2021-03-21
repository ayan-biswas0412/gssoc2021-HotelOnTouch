import React from "react";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Navbar,
  Nav,
  Form,
  Button,
  FormControl,
  NavDropdown,
} from "react-bootstrap";

function NavbarComponent() {
  return (
    <Navbar
      sticky="top"
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
    >
      <Navbar.Brand href="/">
        <FontAwesomeIcon icon="building" /> HotelOnTouch
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="SignUp/SignIn" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Register</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Login</NavDropdown.Item>
            <NavDropdown.Item href="/contact">Contact Us</NavDropdown.Item>         
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavbarComponent;
library.add(faBuilding);
