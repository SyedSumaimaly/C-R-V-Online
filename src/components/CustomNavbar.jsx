import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroStyle.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavbarStyle.css'
import logo from '../assets/logo.png'

function CustomNavbar() {
  return (
    <Navbar bg="primary" data-bs-theme="dark" className='NavbarSec'>
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="logo" className='logoCss'/></Navbar.Brand>
        <Nav className="ms-auto">
        <NavDropdown title="Saira Fatima" id="basic-nav-dropdown" className='dropdown'>
            </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar