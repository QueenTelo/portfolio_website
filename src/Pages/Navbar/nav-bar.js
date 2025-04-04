import React from 'react'
import './nav-bar.css';
import logo from '../../assets/website_logo.png'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <div className="desktopMenu">
          <Link className="nav-barItem">About</Link>
          <Link className="nav-barItem">Experience</Link>
          <Link className="nav-barItem">Projects</Link>
          <Link className="nav-barItem">Contact</Link>
        </div>
      </nav>
    );
}

export default Navbar