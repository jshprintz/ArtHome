import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { MdOutlineDesignServices } from "react-icons/md";
import { TbLamp } from "react-icons/tb";
import { BiPaint } from "react-icons/bi";
import "./IconModal.css";

export default function LogoIcon() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div id="logo-container">
        <button href="#" className="icon-btn">
          <MdOutlineDesignServices
            size={60}
            className="icons"
            onClick={handleShow}
          />
        </button>
        <button href="#" className="icon-btn">
          <BiPaint size={60} className="icons" onClick={handleShow} />
        </button>
        <button href="#" className="icon-btn">
          <TbLamp size={60} className="icons" onClick={handleShow} />
        </button>
      </div>



    {/* Need to rework this so that the appropriate content is displayed and not the same
    generic message no matter which icon you click on. */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
