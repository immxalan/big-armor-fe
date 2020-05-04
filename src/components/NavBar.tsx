import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  logo: {
    display: "flex",
    justifyContent: "left",
    paddingTop: 50,
    paddingLeft: 40,
  },
  navBar: {
    display: "flex",
    justifyContent: "space-evenly",
    textDecoration: "none",
  },
  // headerDisplay: {
  //   display: "flex",
  //   justifyContent: "space-around",
  // },
});

function NavBar() {
  const classes = useStyles();

  return (
    <div>
      <img
        src="https://www.bigarmor.com/wp-content/uploads/Big-Armor-Logo.png"
        alt="Big Armor logo"
        className={classes.logo}
      />
      <nav className={classes.navBar}>
        <Link to="/">Home</Link>
        <Link to="/try-it">Try It</Link>
        <Link to="/api-docs">API Documentation</Link>
        <Link to="/model-docs">Model Documentation</Link>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}

export default NavBar;
