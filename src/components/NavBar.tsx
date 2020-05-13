import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  // logo: {
  //   display: "flex",
  //   justifyContent: "center",
  //   paddingLeft: 40,
  // },
  navBar: {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 25,
  },
  headerDisplay: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#4057b1",
  },
  navLink: {
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 100,
    marginLeft: 100,
    borderRadius: 7,
    textDecoration: "none",
    color: "white",
    whiteSpace: "nowrap",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,.3)",
    },
  },
});

function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.headerDisplay}>
      <img
        src="https://www.bigarmor.com/wp-content/uploads/Big-Armor-Logo.png"
        alt="Big Armor logo"
        // className={classes.logo}
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
