import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Carousel from "../../components/Carousel/Carousel";
import About from "../../components/About/About";
import IconModal from "../../components/IconModal/IconModal";
import BeforeAfter from "../../components/BeforeAfter/BeforeAfter";
import ReviewCard from "../../components/ReviewCard/ReviewCard";
import Footer from "../../components/Footer/Footer";

import "./Home.css";

function Home() {

  return (
    <div className="landing-page">
      <NavBar />
      <div id="header-buffer"></div>
      <Carousel />
      <div id="logo-details"></div>
      <IconModal />
      <div id="design-details-buffer"></div>
      <div id="designs-details"></div>
      <BeforeAfter />
      <div id="story-container-buffer"></div>
      <div id="story-container">
        <div id="story">
          <About />
        </div>
      </div>
      <div id="reviews-container">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
      <div id="footer-buffer"></div>
      <Footer />
    </div>
  );
}

export default Home;
