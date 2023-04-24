import React from "react";
import styled from "styled-components";
import NavBar from "../../components/NavBar/NavBar";
import Carousel from "../../components/Carousel/Carousel";
import About from "../../components/About/About";
import IconModal from "../../components/IconModal/IconModal";
import BeforeAfter from "../../components/BeforeAfter/BeforeAfter";
import Reviews from "../../components/Reviews/Reviews";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <Container>
      <NavBar />
      {/* Hacky, remove this later */}
      <HeaderFooterBuffer />
      <Carousel />
      <div id="specialties" style={{ height: "50px" }} />
      <IconModal />
      <div id="before-after" style={{ height: "50px" }} />
      <BeforeAfter />
      <div id="about" style={{ height: "150px" }} />
      <About />
      <div id="reviews" style={{ height: "150px" }} />
      <Reviews />
      {/* Hacky, remove this later */}
      <HeaderFooterBuffer />
      <Footer />
    </Container>
  );
};

// ------------------ Styled Components ------------------

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f4ebdb;
`;

const HeaderFooterBuffer = styled.div`
  height: 10vh;
`;

// ------------------ Export ------------------
export default Home;
export { Home };
