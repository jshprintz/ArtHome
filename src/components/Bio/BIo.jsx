import React from "react";
import Image from "react-bootstrap/Image";
import "./Bio.css";

function BIo() {
  return (
    <div id="container">
      <div id="profile-pic-container">
        <Image
          id="profile-pic"
          roundedCircle="true"
          thumbnail="true"
          src="https://i.imgur.com/Xpio4Xs.jpg"
          alt="Profile Picture"
        />
        <div id="bio-container">
 
        <h5>Hello and welcome to my website! My name is Leah St. Clair and I am an interior designer with a passion for creating beautiful, functional spaces that reflect my clients' personalities and lifestyles.</h5>

        <img src="https://i.imgur.com/R9vnSAN.png" alt="Art Home Logo" width="25" height="25"></img>
        <br/>

        <h5>I grew up in the beautiful Hudson Valley region of New York and developed a love for design at a young age. After graduating from high school, I attended Moore University, where I earned a degree in Interior Design. It was there that I honed my skills and developed my unique perspective on design, which blends my love of art, technical knowledge, and lighting expertise.</h5>

        <img src="https://i.imgur.com/R9vnSAN.png" alt="Art Home Logo" width="25" height="25"></img>
        <br/>

        <h5>After graduation, I moved to Las Vegas to begin my career as an interior designer. Over the past decade, I have had the pleasure of working with a diverse range of clients, from homeowners to business owners and everyone in between.</h5>

        <img src="https://i.imgur.com/R9vnSAN.png" alt="Art Home Logo" width="25" height="25"></img>
        <br/>

        <h5>I believe that interior design is more than just creating beautiful spaces - it's about creating spaces that enhance our lives and reflect who we are as individuals. I work closely with my clients to understand their needs and preferences, and I use my skills in art, technical design, and lighting to create spaces that are both beautiful and functional.</h5>

        <img src="https://i.imgur.com/R9vnSAN.png" alt="Art Home Logo" width="25" height="25"></img>
        <br/>
        
        <h5>Whether you're looking to update your home, renovate your business, or simply refresh your space, I am here to help!</h5>
        </div>
      </div>
    </div>
  );
}

export default BIo;
