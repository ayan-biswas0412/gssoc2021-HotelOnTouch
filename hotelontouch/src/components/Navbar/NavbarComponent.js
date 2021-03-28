import React, { useState } from "react";
import "./Navbar.css"
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import styled from "styled-components";

import {
  AiOutlineContacts,
} from "react-icons/ai"
import {
  FiLogIn,
} from "react-icons/fi"
import {
  IoIosPeople
} from "react-icons/io"
import {
  SiHotelsDotCom
} from "react-icons/si";

//styled Components

const Navbar = styled.div`
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

`;


const NavbarBrand = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
  letter-spacing: 2px;
  cursor: pointer;

  :hover{
    text-decoration: none
  }
`;

const Hamburger = styled.div`
  flex-direction: column;
  display: none;
  cursor: pointer;

  span {
    width: 3.5rem;
    height: 3px;
    margin-bottom: 8px;
    background: black;
    border-radius: 5px;
  }


  @media (max-width: 800px) {
    display: flex;

  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  

  @media (max-width: 800px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({isOpen}) => (isOpen ? "300px" : "0")}; 
    transition: max-height 0.3s ease-in-out;

  }
`;

const Links = styled.a`
  text-align: center;
  padding: 0 10px;
  color: black;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 2px;

  &:hover{
    text-decoration: none
  }
`;

function NavbarComponent() {
  const [ isOpen, setOpen ] = useState(false);
  return (
    <div>
    <Navbar>
      <NavbarBrand href="/" className="mt-3">
        <SiHotelsDotCom size={40} className="mr-2" />
        HotelOnTouch
      </NavbarBrand>

      <Hamburger className="mt-3" onClick={() => setOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>

      <Menu isOpen={isOpen}>
        <Links href="/register" className="mt-3">
          <IoIosPeople size={28} className="mr-2" />
          Register
        </Links>
        <Links href="/login" className="mt-3">
          <FiLogIn size={28} className="mr-2" />
          Login
        </Links>
        <Links href="/contact" className="mt-3">
          <AiOutlineContacts size={28} className="mr-2" />
          Contact us
        </Links>
      </Menu>
    </Navbar>
    </div>
  );
}

export default NavbarComponent;
library.add(faBuilding);

