import React from 'react';
import './styles.css';

const NavBar = () => (
  <div className="navbar">
    <a href="#">
      <img src="../../images/logo.svg" className="logo" alt="logo" />
    </a>
    <div className="menu">
      <a href="#">Features</a>
      <a href="#">Team</a>
      <a href="#">Sign In</a>
    </div>
  </div>
);
export default React.memo(NavBar);
