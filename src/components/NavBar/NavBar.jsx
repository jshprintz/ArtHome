import * as React from "react";
import styled from "styled-components/macro";
import headerLogo from "./Assets/Images/HeaderLogo.png";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";

import "./NavBar.css";

const NavBar = () => {
  return (
    <Container>
      <LeftSide>
        <Logo src={headerLogo}></Logo>
        <LeftContent>
          <HeaderLink href="#logo-details">Specialties</HeaderLink>
          <HeaderLink href="#design-details-buffer">Before/After</HeaderLink>
          <HeaderLink href="#story-container-buffer">Story</HeaderLink>
          <HeaderLink href="#reviews-container">Testimonials</HeaderLink>
        </LeftContent>
      </LeftSide>
      <RightSide>
        <RightContent>
          <HeaderLink href="https://arthomelv.com/">
            <BsInstagram size={30} />
          </HeaderLink>
          <HeaderLink href="https://www.facebook.com/artandhomelv">
            <BsFacebook size={30} />
          </HeaderLink>
          <HeaderLink href="https://www.honeybook.com/widget/art_home_lv_238447/cf_id/6377d02f1aaa730ed3bc8ee4">
            <HiOutlineMail size={30} />
          </HeaderLink>
          <MenuContainer>
            <GiHamburgerMenu size={30} />
          </MenuContainer>
        </RightContent>
      </RightSide>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 10%;
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

    /* Show only on small screens */
    @media (max-width: 450px) {
    height: 15%; 
  } ;
`;

const LeftSide = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;

  /* Show only on small screens */
  @media (max-width: 450px) {
    width: 100%;

    justify-content: flex-start;
    align-items: flex-end;
  } ;
`;

const RightSide = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
`;

const Logo = styled.img`
  height: 50px;
  width: 225px;
  margin-left: 20px;
`;

const LeftContent = styled.div`
  height: 60px;
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  /* Show only on big screens */
  @media (max-width: 1024px) {
    display: none;
  }
`;

const RightContent = styled.div`
  height: 60px;
  width: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const HeaderLink = styled.a`
  cursor: pointer;
  color: black;
  text-decoration: none;
  font-size: 14pt;
  padding: 10px;

  &:hover {
    color: #c2abaf;
  }
`;

const MenuContainer = styled.div`
  cursor: pointer;
  display: none;
  padding: 10px;
  margin-right: 50px;

  /* Show only on small screens */
  @media (max-width: 1024px) {
    display: block;
  }

  &:hover {
    color: #c2abaf;
  }
`;

export default NavBar;
