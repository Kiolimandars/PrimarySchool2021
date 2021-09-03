
import { Container } from "../Components/Container";
import Formulaire from "../Components/Formulaire";

import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";


const Home = () => {
  const triggerText = "Open form";
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name2.value);
    console.log(event.target.email.value);
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      
      <Container triggerText={triggerText} onSubmit={onSubmit} />
      <Button onClick={handleShow}>Popup</Button>
      <Modal
        className="loginbox-container"
        size="lg"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton></Modal.Header>

        <Formulaire />
      </Modal>
    </div>
  );
};

export default Home;
