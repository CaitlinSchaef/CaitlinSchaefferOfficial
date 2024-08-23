import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import Nav from "react-bootstrap/Nav";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./NavBarStyle.css";

// add sticky="top" after the Navbar class name if you want it to scroll with the page
const MyNavbar = () => {
  let location = useLocation();
  console.log("location:", location.pathname);
  const expand = "xs"; // Change this to the desired breakpoint

  if(location.pathname === '/'
  ) {
    return null; // Doesn't show the header on these pages
  } else {

  return (
    <>
      <Navbar key={expand} expand={expand} className="navbar mb-3" data-bs-theme="dark" >
        <Container fluid>
          <Navbar.Brand>
            <Link className="navbar-text" to="/">
              Caitlin Schaeffer
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            // className="navbar-toggler-icon"
            aria-controls={`offcanvasNavbar-expand-${expand}`}
          />

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            className="navbar-off"
          >
            <Offcanvas.Header closeButton className="navbar">
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Selections:
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link className="navbar" href="/portfolio">
                  Portfolio
                </Nav.Link>
                <Nav.Link className="navbar" href="/contact">
                  Contact
                </Nav.Link>
                <Nav.Link className="navbar" href="/about">
                  About
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  )
}
}

export default MyNavbar

// <div className="">
//   <Navbar className="custom-navbar">
//     <Container fluid>
//     <Navbar.Brand>
//       <Link className="nav-link" to='/'>Caitlin Schaeffer</Link>
//     </Navbar.Brand>
//     <div className='ml-auto d-flex align-items-center'>

//     <Navbar.Text className="nav-link me-2">
//     <Link className="nav-link" to='/portfolio'>Portfolio</Link>
//     </Navbar.Text>

//     <Navbar.Text className="nav-link me-2">
//     <Link className="nav-link" to='/contact'>Contact</Link>
//     </Navbar.Text>

//     <Navbar.Text className="nav-link me-2">
//     <Link className="nav-link" to='/about'>About</Link>
//     </Navbar.Text>

//   </div>
//   </Container>
//   </Navbar>
// </ div>
