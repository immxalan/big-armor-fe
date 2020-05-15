import React, { Component } from "react";
import { Link } from "react-router-dom";
interface props {
  backgroundTransparent: boolean;
}
export default class NavBar extends Component<props> {
  state = {
    scrolled: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.navOnScroll);
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.navOnScroll);
  }

  navOnScroll = () => {
    if (window.scrollY > 20) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  render() {
    const { scrolled } = this.state;
    return (
      <nav
        className={
          scrolled
            ? "nav scroll"
            : !scrolled && !this.props.backgroundTransparent
            ? "nav navNotInvis"
            : "nav"
        }
      >
        <div className="headerFlexContainer">
          <div className="logo">
            <img
              src="https://www.bigarmor.com/wp-content/uploads/Big-Armor-Logo.png"
              alt="Big Armor logo"
            />
          </div>
          <div className="allLinkContainer">
            <Link className="smallWidth" to="/">
              <span>Home</span>
            </Link>

            <Link className="mediumWidth" to="/try-it">
              <span>Try It</span>
            </Link>

            <Link className="largeWidth" to="/api-docs">
              <span>API Documentation</span>
            </Link>

            <Link className="mediumWidth" to="/about">
              <span>About</span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
