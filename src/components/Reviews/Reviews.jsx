import React from "react";
import styled from "styled-components";

// ----------------------------------------------------------------
// TODO: Make Mobile friendly
// ----------------------------------------------------------------

const Reviews = () => {
  return (
    <Container>
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
    </Container>
  );
};

// ------------------ Styled Components ------------------

const ReviewCard = styled.div`
  height: 250px;
  width: 400px;

  background-color: rgb(248, 235, 212);
  border: 2px solid #c2abaf;
  border-radius: 25px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
`;

// ------------------ Export ------------------
export default Reviews;
export { Reviews };
