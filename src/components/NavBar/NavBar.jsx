import * as React from "react";
import styled from 'styled-components/macro';
import headerLogo from "./Assets/Images/HeaderLogo.png";

import "./NavBar.css";


const NavBar = () => {
  return(
    <Container >
      <LeftSide>
        <Logo src={headerLogo}></Logo>
        <LeftContent>
          <HeaderLink href="#logo-details">Specialties</HeaderLink>
          <HeaderLink href="#design-details-buffer">Before/After</HeaderLink>
          <HeaderLink href="#story-containor-buffer">Story</HeaderLink>
          <HeaderLink href="#reviews-container">Testimonials</HeaderLink>
        </LeftContent>
      </LeftSide>
      <RightSide>
        Hello World
      </RightSide>

    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 15%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #c2abaf;
  background-color: rgb(248, 235, 212);
  z-index: 3;
`;

const LeftSide = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const RightSide = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;

  border: 5px solid blue;
`;

const Logo = styled.img`
  height: 60px;
  width: 225px;
`;

const LeftContent = styled.div`
  height: 60px;
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const HeaderLink = styled.a`
  cursor: pointer;
  color: black;
  text-decoration: none;
  font-size: 14pt;

  &:hover {
    color: #c2abaf;
  };
`;



export default NavBar;
