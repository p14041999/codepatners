import React, { Component } from "react";
import Navdesign from "../assets/Group14.svg";
import pinkbox from "../assets/pinkbox.svg";
import redbox from "../assets/redbox.svg";
import bluebox from "../assets/bluebox.svg";
import "../styles/NavMenu.scss";

class NavbarMenu extends Component {
  handleNavClick = () => {
    const { handleChangeState } = this.props;
    handleChangeState(false);
  };
  render() {
    const { darkMode } = this.props;

    return (
      <div id={darkMode ? "menuContainer" : "menuContainerLight"}>
        <div id="contents">
          <div className="py-3 px-3 menu-items">
            <div className="menu-items-name">
              <a
                onClick={this.handleNavClick}
                href="#hero-container"
                style={{ textDecoration: "none" }}
                className={darkMode ? "text-dark" : "text-light"}
              >
                Home
              </a>
            </div>
            {/* <div className="menu-items-name">
              <a
                onClick={this.handleNavClick}
                href="#useCase"
                style={{ textDecoration: "none" }}
                className={darkMode ? "text-dark" : "text-light"}
              >
                Build on Zenith Chain
              </a>
            </div> */}
            {/* <div className="menu-items-name">
              <a
                onClick={this.handleNavClick}
                href="#useCase"
                style={{ textDecoration: "none" }}
                className={darkMode ? "text-dark" : "text-light"}
              >
                Features
              </a>
            </div> */}
            <div className="menu-items-name">
              <a
                onClick={this.handleNavClick}
                href="#containerSub1"
                style={{ textDecoration: "none" }}
                className={darkMode ? "text-dark" : "text-light"}
              >
                Zenith Coin
              </a>
            </div>
            <div className="menu-items-name">
              <a
                onClick={this.handleNavClick}
                href="#temi"
                style={{ textDecoration: "none" }}
                className={darkMode ? "text-dark" : "text-light"}
              >
                Timeline
              </a>
            </div>
            <div className="menu-items-name">
              <a
                onClick={this.handleNavClick}
                href="#sub3"
                style={{ textDecoration: "none" }}
                className={darkMode ? "text-dark" : "text-light"}
              >
                Zenith Wallet
              </a>
            </div>
            {/* <div className="menu-items-name">
              <a
                onClick={this.handleNavClick}
                href="#aboutus"
                style={{ textDecoration: "none" }}
                className={darkMode ? "text-dark" : "text-light"}
              >
                Team
              </a>
            </div> */}
            {/* <div className="menu-items-name">
              <a
                onClick={this.handleNavClick}
                href="#aboutus"
                style={{ textDecoration: "none" }}
                className={darkMode ? "text-dark" : "text-light"}
              >
                Partners
              </a>
            </div> */}

            <div className="menu-items-name">
              <a
                onClick={this.handleNavClick}
                href="#footer"
                style={{ textDecoration: "none" }}
                className={darkMode ? "text-dark" : "text-light"}
              >
                Contact
              </a>
            </div>
          </div>
          <img id="nav-blue-box" src={bluebox} />
          <img id="nav-red-box" src={redbox} />
          <img id="nav-pink-box" src={pinkbox} />
          <div className="img-container">
            <img id="group-img" src={Navdesign} />
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarMenu;
