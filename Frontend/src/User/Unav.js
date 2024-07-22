// src/components/Navbar.js

// src/components/Navbar.js

import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Unav = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Navbar bg="" variant="dark" expand="lg" style={{ backgroundColor: "black" }}>
      <Container>
        <Navbar.Brand href="/">Ucab App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link to="/uhome" className="btn btn-outline-light mx-2">Home</Link>
            <Link to="/cabs" className="btn btn-outline-light mx-2">Book Cab</Link>
            <Link to="/mybookings" className="btn btn-outline-light mx-2">My Bookings</Link>
            <Link to="/" className="btn btn-outline-light mx-2">Logout</Link>
            <h4 style={{ color: "white", paddingTop: "10px" }}>({user.name})</h4>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Unav;

