import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
  const navigate = useNavigate();

  const handleActionClick = (selectedCategory) => {
    navigate(`/products/categoty/${selectedCategory}`);
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/cart">Your Cart</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => handleActionClick("smartphones")}>Smartphones</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleActionClick("laptops")}>
                Laptops
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleActionClick("skincare")}>Skincare</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;