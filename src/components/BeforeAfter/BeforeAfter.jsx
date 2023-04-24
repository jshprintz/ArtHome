import React from "react";
import styled from "styled-components";
import BaCard from "./Components/BaCard";

const BeforeAfter = () => {
  return (
    <Container>
      <Content>
        <BaCard
          imgSrc={"https://i.imgur.com/JW1aUiy.png"}
          imgSrcOld={"https://i.imgur.com/OHkfaNd.jpg"}
          imgAlt={"Kitchen with stained cabinets and new countertop"}
          imgAltOld={"Old kitchen"}
        />
        <BaCard
          imgSrc={"https://i.imgur.com/Wx6TugU.png"}
          imgSrcOld={"https://i.imgur.com/jI6tsjh.png"}
          imgAlt={"Myrtle Beach home design living room"}
          imgAltOld={"Old living room"}
        />
        <BaCard
          imgSrc={"https://i.imgur.com/sGQhLjM.png"}
          imgSrcOld={"https://i.imgur.com/9wlE5BU.png"}
          imgAlt={"New modern kitchen"}
          imgAltOld={"Old kitchen"}
        />
      </Content>
    </Container>
  );
};

// -------------------- Styled Components --------------------

const Container = styled.div`
  height: 40vh;
  margin-top: 5%;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media only screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

// -------------------- Export --------------------

export default BeforeAfter;
export { BeforeAfter };
