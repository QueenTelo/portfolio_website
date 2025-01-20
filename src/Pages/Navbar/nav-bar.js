import React from 'react'
import './nav-bar.css';
import logo from '../../assets/website_logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    return (
      <nav className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <div className="desktopMenu">
          <Link className="nav-barItem">About</Link>
          <Link className="nav-barItem">Experience</Link>
          <Link className="nav-barItem">Projects</Link>
          <Link className="nav-barItem">Contact Me</Link>
        </div>
        <button className="desktopButtonContact">
          <img src="" alt="Button" className="desktopButtonImage" /> Contact Me{" "}
        </button>
      </nav>
    );
}

export default Navbar