import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  logo: {
    display: "flex",
    justifyContent: "left",
    paddingLeft: 40,
  },
  navBar: {
    display: "flex",
    justifyContent: "space-evenly",
    fontSize: 25,
  },
  headerDisplay: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 25,
  },
  navLink: {
    paddingRight: 15,
    paddingLeft: 15,
    marginLeft: 10,
    marginRight: 10,
    textDecoration: "none",
    backgroundColor: "rgba(220, 220, 220, 0.4)",
    borderRadius: 8,
    color: "black",
  },
});

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.headerDisplay}>
      <img
        src="https://www.bigarmor.com/wp-content/uploads/Big-Armor-Logo.png"
        alt="Big Armor logo"
        className={classes.logo}
      />
      <nav className={classes.navBar}>
        <Link className={classes.navLink} to="/">
          Home
        </Link>
        <Link className={classes.navLink} to="/try-it">
          Try It
        </Link>
        <Link className={classes.navLink} to="/api-docs">
          API Documentation
        </Link>
        <Link className={classes.navLink} to="/model-docs">
          Model Documentation
        </Link>
        <Link className={classes.navLink} to="/about">
          About
        </Link>
      </nav>
    </div>
  );
}

export default NavBar;
