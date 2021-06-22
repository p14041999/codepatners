import React, { Component } from "react";
import Navdesign from "../assets/Group14.svg";
import pinkbox from "../assets/pinkbox.svg";
import redbox from "../assets/redbox.svg";
import bluebox from "../assets/bluebox.svg";
import "../styles/NavMenu.scss";

class NavbarMenu extends Component {
  render() {
    return (
      <div id="menuContainer">
        <div id="contents">
          <div className="py-3 px-3 menu-items">
            <div className="menu-items-name">
              <label>Home</label>
            </div>
            <div className="menu-items-name">
              <label>Usage</label>
            </div>
            <div className="menu-items-name">
              <label>About Us</label>
            </div>
            <div className="menu-items-name">
              <label>Roadmap</label>
            </div>
            <div className="menu-items-name">
              <label>Contact</label>
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
