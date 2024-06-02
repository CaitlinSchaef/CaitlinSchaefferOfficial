import React from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import NavbarCollapse from 'react-bootstrap/NavbarCollapse'
import './NavBarStyle.css'

// add sticky="top" after the Navbar class name if you want it to scroll with the page
const MyNavbar = () => {
    let location = useLocation();
    console.log('location:', location.pathname)
    return (
        <>
      <Navbar className="ps-3">
        {/* <Container> */}
          <Navbar.Brand>
            <Link className="nav-link" to='/'>Caitlin Schaeffer</Link>
          </Navbar.Brand>
          <Navbar.Collapse className="justify-content-start">

          <Navbar.Text className="nav-link me-2">
          <Link className="nav-link" to='/portfolio'>Portfolio</Link> 
          </Navbar.Text>

          <Navbar.Text className="nav-link me-2">
          <Link className="nav-link" to='/contact'>Contact</Link>
          </Navbar.Text>

          {/* <Navbar.Text className="nav-link me-2">
          <Link className="nav-link" to='/blog'>Blog</Link>
          </Navbar.Text> */}

          <Navbar.Text className="nav-link me-2">
          <Link className="nav-link" to='/about'>About</Link>
          </Navbar.Text>

        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </>
    )
}


export default MyNavbar