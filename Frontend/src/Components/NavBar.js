// // src/components/Navbar.js

// import React from 'react';
// import {  Nav, Container,Dropdown ,NavDropdown, Button} from "react-bootstrap";

// import {Link } from "react-router-dom"

// const Navbar = () => {
 
//   return (
//     <Navbar bg="" variant="dark" expand="lg" style={{backgroundColor:"black"}}>
//       <Container>
//         <Navbar.Brand href="/">Cab Booking App</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav"/>
//         <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//             <Link to="/" style={{padding:"10px"}}>Home</Link>
//             {/* <div style={{paddingTop:"3px"}}>
//             <NavDropdown title="Login" id="basic-nav-dropdown" >
//               <NavDropdown.Item href="/login">User</NavDropdown.Item>
//               <NavDropdown.Item href="/alogin">Admin</NavDropdown.Item>
//             </NavDropdown>
//             </div> */}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="sec">
      <Navbar expand="md" className={scrolled ? "scrolled" : ""} style={{ backgroundColor: "LightBlue" }}>
        <Container>
          <Navbar.Brand href="/">Cab Booking App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <NavDropdown title="Login" id="basic-nav-dropdown">
                <NavDropdown.Item as={NavLink} to="/">User</NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to="/alogin">Admin</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default NavBar;
