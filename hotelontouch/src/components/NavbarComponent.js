import React from "react";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  Navbar,
  Nav,
  Container,
} from "react-bootstrap";
import {
  AiOutlineContacts,
  AiOutlineHome,
  AiOutlineSearch
} from "react-icons/ai"
import {
  FiLogIn
} from "react-icons/fi"

import {
  SiHotelsDotCom
} from "react-icons/si"
function NavbarComponent() {
  return (
    <Container fluid className="navbar-wrap ml-3">
    <Navbar
      collapseOnSelect
      expand="lg"
      className="mt-3"
    >
      <Navbar.Brand href="/" className="navbar-brand">
        <SiHotelsDotCom size={32} /> HotelOnTouch
      </Navbar.Brand>
      <div class="search-bar d-none d-sm-block d-md-block">
        <input type="search" name="search" pattern=".*\S.*" className="search-input" />
        <button class="search-btn" type="submit">
          <AiOutlineSearch size={30} className="search-icon" />
        </button>
      </div>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto mr-3">
            <Nav.Link href="/register" className="navs mr-3"><AiOutlineHome className="mr-1" size={16} />Register</Nav.Link>
            <Nav.Link href="/login" className="navs mr-3"><FiLogIn className="mr-1" size={16} />Login</Nav.Link>
            <Nav.Link href="/contact" className="navs"><AiOutlineContacts className="mr-1" size={16} />Contact Us</Nav.Link>         
            <div class="search-bar d-block d-sm-none">
              <input type="search" name="search" pattern=".*\S.*" className="search-input" />
              <button class="search-btn" type="submit">
                <AiOutlineSearch size={30} className="search-icon" />
              </button>
            </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </Container>
  );
}
export default NavbarComponent;
library.add(faBuilding);

