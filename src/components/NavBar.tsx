import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="headerDisplay">
      <div className="headerFlexContainer">
        <div id='logo'>
          <img
            src="https://www.bigarmor.com/wp-content/uploads/Big-Armor-Logo.png"
            alt="Big Armor logo"
          />
        </div>
        <div className='allLinkContainer'>
          <div className="navLinkContainer">
            <Link className="navLink" to="/">
              Home
            </Link>
          </div>
          <div className="navLinkContainer">
            <Link className="navLink" to="/try-it">
              Try It
            </Link>
          </div>
          <div className="navLinkContainer">
            <Link className="navLink" to="/api-docs">
              API Documentation
            </Link>
          </div>
          <div className="navLinkContainer">
            <Link className="navLink" to="/model-docs">
              Model Documentation
            </Link>
          </div>
          <div className="navLinkContainer">
            <Link className="navLink" to="/about">
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
