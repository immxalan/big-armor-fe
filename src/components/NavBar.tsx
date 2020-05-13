import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="headerDisplay">
      <img
        src="https://www.bigarmor.com/wp-content/uploads/Big-Armor-Logo.png"
        alt="Big Armor logo"
        // className={classes.logo}
      />
      <nav className="navBar">
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/try-it">
          Try It
        </Link>
        <Link className="navLink" to="/api-docs">
          API Documentation
        </Link>
        <Link className="navLink" to="/model-docs">
          Model Documentation
        </Link>
        <Link className="navLink" to="/about">
          About
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
