import React from "react";
import styled from "styled-components";
import { BsInstagram, BsFacebook } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <Container>
      <TopContainer>
        <Logo src="https://i.imgur.com/UicUhqA.png" alt="logo" />
        <FooterSocials>
          <FooterLink style={{ padding: "10px" }} href="https://arthomelv.com/">
            <BsInstagram size={30} />
          </FooterLink>
          <FooterLink
            style={{ padding: "10px" }}
            href="https://www.facebook.com/artandhomelv"
          >
            <BsFacebook size={30} />
          </FooterLink>
          <FooterLink
            style={{ padding: "10px" }}
            href="https://www.honeybook.com/widget/art_home_lv_238447/cf_id/6377d02f1aaa730ed3bc8ee4"
          >
            <HiOutlineMail size={30} />
          </FooterLink>
        </FooterSocials>
      </TopContainer>
      <BottomContainer>
        <FooterTextContainer>
          {/* Add in a Privacy Policy link */}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <FooterLink href="#">Terms and Conditions</FooterLink>
          {/* Add in a Privacy Policy link */}
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <FooterLink href="#">Privacy Policy</FooterLink>
          <FooterLink >&copy; {new Date().getFullYear()} </FooterLink>
        </FooterTextContainer>
      </BottomContainer>
    </Container>
  );
}

// ----------------- Styled Components -----------------

const Container = styled.div`
  height: 100px;
  width: 100%;

  background-color: #c2abaf;
  border-top: 2px solid rgb(253, 231, 204);
  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px;

  @media only screen and (max-width: 450px) {
    height: 120px;
  }
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const BottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const FooterSocials = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const FooterTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
`;

const FooterLink = styled.a`
  cursor: pointer;
  color: white;
  text-decoration: none;
  font-size: 10pt;

  &:hover {
    color: rgb(253, 231, 204);
  }
`;

const Logo = styled.img`
  height: 80px;

  @media only screen and (max-width: 750px) {
    height: 50px;
  }

  @media only screen and (max-width: 450px) {
    height: 30px;
  }
`;


// -------------- Export ----------------

export default Footer;
export { Footer };