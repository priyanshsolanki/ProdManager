import React, { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useAuth } from '../context/AuthContext';

const CustomNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const {logout,authUser} = useAuth();
  return (
    <Navbar 
      bg="light" 
      expand="lg" 
      sticky="top" 
      className="shadow-sm"
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fw-bold">
          <i className="bi bi-box me-2"></i>ProdManager

        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link 
              as={NavLink} 
              to="/" 
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => setExpanded(false)}
            >
              <i className="bi bi-house me-1"></i>Home
            </Nav.Link>
            
            <Nav.Link 
              as={NavLink} 
              to="/products" 
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => setExpanded(false)}
            >
              <i className="bi bi-bag me-1"></i>Products
            </Nav.Link>
            
            <Nav.Link 
              as={NavLink} 
              to="/contact" 
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => setExpanded(false)}
            >
              <i className="bi bi-envelope me-1"></i>Contact
            </Nav.Link>
            {authUser == null ? <Nav.Link 
              as={NavLink} 
              to="/login" 
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => setExpanded(false)}
            >
              <i className="bi bi-person-fill-add me-1"></i>Login
            </Nav.Link>
            :<Nav.Link 
            as={NavLink} 
            to="/login" 
            className={({ isActive }) => isActive ? "active" : ""}
            onClick={() => logout()}
          >
            <i className="bi bi-person-fill-add me-1"></i>Logout
          </Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;