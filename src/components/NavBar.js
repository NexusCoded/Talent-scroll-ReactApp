// src/components/NavBar.js

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = ({ isAdmin, account }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <NavLink to="/" className="navbar-logo">Talent Scroll</NavLink>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          ☰ {/* Simple hamburger icon */}
        </div>
        <ul className={`navbar-menu ${menuOpen ? 'show' : ''}`}>
          <li><NavLink to="/dashboard" activeClassName="active-link">Dashboard</NavLink></li>
          <li><NavLink to="/view-jobs" activeClassName="active-link">Job Offers</NavLink></li>
          <li><NavLink to="/applications" activeClassName="active-link">Applications</NavLink></li>
          <li><NavLink to="/credentials" activeClassName="active-link">Credentials</NavLink></li>
          <li><NavLink to="/notifications" activeClassName="active-link">Notifications</NavLink></li>
          <li><NavLink to="/profile" activeClassName="active-link">Profile</NavLink></li>
          {isAdmin && (
            <>
              <li><NavLink to="/admin" activeClassName="active-link">Admin Dashboard</NavLink></li>
              <li><NavLink to="/admin/users" activeClassName="active-link">Manage Users</NavLink></li>
              <li><NavLink to="/admin/jobs" activeClassName="active-link">Manage Jobs</NavLink></li>
              <li><NavLink to="/admin/applications" activeClassName="active-link">Manage Applications</NavLink></li>
              <li><NavLink to="/admin/credentials" activeClassName="active-link">Verify Credentials</NavLink></li>
            </>
          )}
        </ul>
        <div className="navbar-account">
          <p>{account ? `Connected: ${account}` : 'Not Connected'}</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
