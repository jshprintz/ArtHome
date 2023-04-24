import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import Image from "react-bootstrap/Image";
import "./Carousel.css";

// ----------------------------------------------------------------
// TODO: Remove the bootstrap modals and replace with styled components
// ----------------------------------------------------------------

const CarouselBlock = () => {
  return (
    <Container>
      <Content>
        <Carousel fade>
          <Carousel.Item>
            <Image
              rounded="true"
              className="d-block w-100 carousel-img"
              src="https://i.imgur.com/r4hPZ72.png"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              rounded="true"
              className="d-block w-100 carousel-img"
              src="https://i.imgur.com/O9HDEHO.png"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              rounded="true"
              className="d-block w-100 carousel-img"
              src="https://i.imgur.com/giTthQw.png"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Content>
    </Container>
  );
}

// -------------------- Styled Components --------------------

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
`;

// -------------------- Export --------------------
export default CarouselBlock;
export { CarouselBlock };
