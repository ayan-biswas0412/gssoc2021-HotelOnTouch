import React from "react";
import {
  Navbar
} from "react-bootstrap";

import {Link} from 'react-router-dom';

export default function NavbarComp() {
    return (
        <Navbar
          sticky="top"
          collapseOnSelect
          expand="lg"
          bg="light"
          variant="light"
        >
          <Navbar.Brand as={Link} to='/'>
             HotelOnTouch
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </Navbar>
      );
}
