// components/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  
  const toggleNav = () => setIsNavOpen(!isNavOpen);
  
  const closeNav = () => setIsNavOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top shadow-sm">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/" onClick={closeNav}>
          <i className="fas fa-box me-2"></i>ProdManager
        </NavLink>
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleNav}
          aria-controls="navbarNav"
          aria-expanded={isNavOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink 
                className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                to="/"
                onClick={closeNav}
              >
                <i className="fas fa-home me-1"></i>Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                to="/products"
                onClick={closeNav}
              >
                <i className="fas fa-shopping-bag me-1"></i>Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}
                to="/contact"
                onClick={closeNav}
              >
                <i className="fas fa-envelope me-1"></i>Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;