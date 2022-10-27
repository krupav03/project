import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Select() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="Ant">Antd</Nav.Link>
          <Nav.Link href="Tsearch">S&S</Nav.Link>
          <Nav.Link href="Crud">Crud</Nav.Link>
          <Nav.Link href="Boot">Ant design</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Select;
