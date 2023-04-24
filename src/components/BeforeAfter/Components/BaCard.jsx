import React from "react";
import styled from "styled-components";

const BaCard = ({ imgAlt, imgSrc, imgAltOld, imgSrcOld }) => {
  return (
    <Container>
      <AfterImg src={imgSrc} alt={imgAlt} />
      <BeforeOverlay>
        <AfterImg src={imgSrcOld} alt={imgAltOld} />
      </BeforeOverlay>
    </Container>
  );
};

// ------------------ Styled Components ------------------

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  height: 350px;
  width: 350px;
`;

const BeforeOverlay = styled.div`
  opacity: 0;
  position: absolute;
  height: 350px;
  width: 350px;
  transition: 1s ease;

  &:hover {
    opacity: 1;
  }
`;

const AfterImg = styled.img`
  height: 350px;
  width: 350px;
  object-fit: cover;
  border-radius: 15px;
`;

// ------------------ Export ------------------

export default BaCard;
export { BaCard };
