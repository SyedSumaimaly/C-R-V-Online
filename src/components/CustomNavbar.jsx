import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeroStyle.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavbarStyle.css'

function CustomNavbar() {
  return (
    <Navbar bg="primary" data-bs-theme="dark" className='NavbarSec'>
      <Container>
        <Navbar.Brand href="#home">CRV</Navbar.Brand>
        <Nav className="me-auto">
        <NavDropdown title="Saira Fatima" id="basic-nav-dropdown">
              <NavDropdown.Item>blank</NavDropdown.Item>
            </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar