import React from "react";
import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <ProfilePicContainer>
        <ProfilePic
          src="https://i.imgur.com/Xpio4Xs.jpg"
          alt="Profile Picture"
        />
        <Content>
          <AboutText>
            Hello and welcome to my website! My name is Leah St. Clair and I am
            an interior designer with a passion for creating beautiful,
            functional spaces that reflect my clients' personalities and
            lifestyles.
          </AboutText>

          <img
            src="https://i.imgur.com/R9vnSAN.png"
            alt="Art Home Logo"
            width="25"
            height="25"
          ></img>
          <br />

          <AboutText>
            I grew up in the beautiful Hudson Valley region of New York and
            developed a love for design at a young age. After graduating from
            high school, I attended Moore University, where I earned a degree in
            Interior Design. It was there that I honed my skills and developed
            my unique perspective on design, which blends my love of art,
            technical knowledge, and lighting expertise.
          </AboutText>

          <img
            src="https://i.imgur.com/R9vnSAN.png"
            alt="Art Home Logo"
            width="25"
            height="25"
          ></img>
          <br />

          <AboutText>
            After graduation, I moved to Las Vegas to begin my career as an
            interior designer. Over the past decade, I have had the pleasure of
            working with a diverse range of clients, from homeowners to business
            owners and everyone in between.
          </AboutText>

          <img
            src="https://i.imgur.com/R9vnSAN.png"
            alt="Art Home Logo"
            width="25"
            height="25"
          ></img>
          <br />

          <AboutText>
            I believe that interior design is more than just creating beautiful
            spaces - it's about creating spaces that enhance our lives and
            reflect who we are as individuals. I work closely with my clients to
            understand their needs and preferences, and I use my skills in art,
            technical design, and lighting to create spaces that are both
            beautiful and functional.
          </AboutText>

          <img
            src="https://i.imgur.com/R9vnSAN.png"
            alt="Art Home Logo"
            width="25"
            height="25"
          ></img>
          <br />

          <AboutText>
            Whether you're looking to update your home, renovate your business,
            or simply refresh your space, I am here to help!
          </AboutText>
        </Content>
      </ProfilePicContainer>
    </Container>
  );
};

//---------- Styled Components ----------//

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const ProfilePicContainer = styled.div`
  display: flex;
  justify-content: left;
`;

const ProfilePic = styled.img`
  width: 250px;
  margin-top: 10px;
  margin-left: 10px;
  border-radius: 50%;
  border: 2px solid #c2abaf;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px;

  height: 375px;
  width: 75%;
  overflow-y: scroll;
`;

const AboutText = styled.h5`
  font-family: "Calligraffitti", cursive;
  font-family: "Raleway", sans-serif;
  font-size: 20px;
`;

// --------- Export -------- //
export default About;
export { About };
