import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Carousel from "../../components/Carousel/Carousel";
import Bio from "../../components/Bio/BIo";
import IconModal from "../../components/IconModal/IconModal";
import DesignComp from "../../components/DesignComp/DesignComp";
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
      <DesignComp />
      <div id="story-container-buffer"></div>
      <div id="story-container">
        <div id="story">
          <Bio />
        </div>
      </div>
      <div id="reviews-containor">
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
