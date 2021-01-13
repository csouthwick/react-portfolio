import React from 'react';

function Navigation() {
  return (
    <nav>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link" href="#about-me">About Me</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#portfolio">Portfolio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#resume">Resume</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
