import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { LinkContainer } from "react-router-bootstrap";

const NavbarO = () => {
  return (
    <>
      <nav>
        <Navbar bg="light" expand="lg">
          <LinkContainer to="/">
            <Navbar.Brand>Restraunt user frontend</Navbar.Brand>
          </LinkContainer>
          <LinkContainer to="/">
            <Navbar.Brand>Home</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/pageone">
                <Nav.Link>page 1</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/pagetwo">
                <Nav.Link>page 2</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    </>
  );
};

export default NavbarO;
