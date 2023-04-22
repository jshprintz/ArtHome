import React, { useState } from "react";
import styled from "styled-components/macro";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbLamp } from "react-icons/tb";
import { BiPaint } from "react-icons/bi";

// ----------------------------------------------------------------
// TODO: Remove the bootstrap modals and replace with styled components
// ----------------------------------------------------------------

export default function LogoIcon() {
  const [showTech, setShowTech] = useState(false);
  const [showArt, setShowArt] = useState(false);
  const [showLight, setShowLight] = useState(false);

  const handleTech = () => setShowTech(!showTech);
  const handleArt = () => setShowArt(!showArt);
  const handleLight = () => setShowLight(!showLight);

  return (
    <>
      <LogoContainer>
        <IconBtn>
          <MdOutlineDesignServices size={60} onClick={handleTech} />
        </IconBtn>
        <IconBtn>
          <BiPaint size={60} onClick={handleArt} />
        </IconBtn>
        <IconBtn>
          <TbLamp size={60} onClick={handleLight} />
        </IconBtn>
      </LogoContainer>

      {/* Modal for Tech */}
      <Modal show={showTech} onHide={handleTech}>
        <Modal.Header closeButton>
          <Modal.Title>Technical</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          As an interior designer, my technical skills are an essential part of
          my work. With over a decade of experience in the industry, I have
          honed my expertise in space planning, architectural drafting, and
          project management to ensure that every design I create is not only
          beautiful, but also functional and built to last.
        </Modal.Body>
        <Modal.Body>
          My understanding of materials, finishes, and construction methods
          allows me to make informed decisions when selecting products and
          finishes, and ensures that every aspect of the design is carefully
          considered. I am also highly proficient in computer-aided design (CAD)
          software and other industry tools, which allows me to create detailed
          plans and 3D renderings that bring my designs to life and provide my
          clients with a clear vision of the final product.
        </Modal.Body>
        <Modal.Body>
          Whether working on a residential or commercial project, my technical
          skills are an invaluable asset that enable me to tackle even the most
          complex design challenges with confidence and ease. From the initial
          concept to the final installation, I am committed to delivering
          exceptional results that exceed my clients' expectations.
        </Modal.Body>
      </Modal>

      {/* Modal for Art */}

      <Modal show={showArt} onHide={handleArt}>
        <Modal.Header closeButton>
          <Modal.Title>Art</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          My background in fine arts has been an invaluable asset to my work. My
          natural creativity and skills in painting, sculpture, and graphic
          design allow me to bring a unique perspective to every project,
          creating spaces that are not only beautiful, but also functional and
          livable.
        </Modal.Body>

        <Modal.Body>
          I am constantly inspired by the world of art, and I incorporate my
          artistic talents into my design work whenever possible. I use color,
          texture, and composition to create visually striking spaces that
          engage the senses and evoke emotion. Whether it's a bold statement
          wall or a custom piece of artwork, I believe that incorporating art
          into interior design is essential to creating spaces that truly
          reflect my clients' personalities and tastes.
        </Modal.Body>

        <Modal.Body>
          I strive to balance form and function in all of my designs, ensuring
          that each space is not only visually stunning, but also practical and
          livable. My passion for art and design is evident in every project I
          take on, and I am committed to creating one-of-a-kind spaces that
          exceed my clients' expectations.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleArt}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Modal for Lighting */}

      <Modal show={showLight} onHide={handleLight}>
        <Modal.Header closeButton>
          <Modal.Title>Lighting</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lighting is one of the most important elements of any interior design
          project, and as a specialist in this field, I take great pride in
          creating lighting plans that enhance and transform the spaces I work
          on. My understanding of the interplay between light and shadow, and
          the way that lighting can be used to create mood and atmosphere,
          allows me to bring a unique perspective to every project.
        </Modal.Body>

        <Modal.Body>
          I believe that lighting is an essential component of any successful
          design, and I work closely with my clients to create lighting plans
          that are both functional and visually appealing. From selecting the
          right fixtures and bulbs to designing custom lighting solutions, I am
          passionate about finding the perfect lighting for every space.
        </Modal.Body>

        <Modal.Body>
          My expertise in lighting design extends to both residential and
          commercial projects, and I have worked on everything from small
          apartments to large office buildings. Whether it's a cozy bedroom or a
          grand ballroom, I am dedicated to creating lighting plans that enhance
          the space and create a sense of drama and intrigue.
        </Modal.Body>

        <Modal.Body>
          In all of my designs, I strive to balance form and function, ensuring
          that each space is not only beautiful, but also practical and
          functional. I believe that lighting is an essential component of any
          successful design, and I am committed to creating lighting plans that
          exceed my clients' expectations and transform their spaces into
          something truly extraordinary.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleLight}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

const LogoContainer = styled.div`
  margin-top: 10vh;
  height: 100px;
  background-color: rgb(248, 235, 212);
  border: 2px solid #c2abaf;
  display: flex;
  justify-content: space-evenly;
`;

const IconBtn = styled.button`
  cursor: pointer;
  border: 0px;
  background-color: rgb(248, 235, 212);

  &:hover {
    color: #c2abaf;
  }
`;
