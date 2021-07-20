import React, { Component } from "react";
import logo from "../assets/logo.svg";
import logoblue from "../assets/logoblue.svg";
import "../styles/Navbar.scss";
import { FormControlLabel, Switch } from "@material-ui/core";
export default class Navabar extends Component {
  constructor() {
    super();
    this.state = {
      NavMenu: false,
      darkMode: true,
    };
  }

  handleMenuBtnClick = () => {
    // console.log(this.props);
    const { handleChangeState, NavMenu } = this.props;
    this.setState({ NavMenu: !this.state.NavMenu });
    handleChangeState(!this.state.NavMenu);
  };
  handleDarkMode = async () => {
    const { darkModeFunc } = this.props;
    // console.log("hehe");
    await this.setState({ darkMode: !this.state.darkMode });
    darkModeFunc(this.state.darkMode);
  };
  render() {
    const { darkModeFunc, darkMode } = this.props;
    return (
      <div className="container py-3" id="navbar-cont">
        <div className="nav-top" id="navbar">
          <div onClick={this.handleMenuBtnClick}>
            {darkMode ? (
              <div id="menubtn">
                <span
                  className={this.state.NavMenu ? "blue" : "hamburger"}
                ></span>
              </div>
            ) : (
              <div id="menubtn">
                <span
                  className={this.state.NavMenu ? "hamburger" : "blue"}
                ></span>
              </div>
            )}
          </div>
          {darkMode ? (
            <div id="logo-cont">
              {this.state.NavMenu ? (
                <img src={logoblue} id="company-logoblue" alt="" />
              ) : (
                <img src={logo} id="company-logo" alt="" />
              )}
            </div>
          ) : (
            <div id="logo-cont">
              {this.state.NavMenu ? (
                <img src={logo} id="company-logoblue" alt="" />
              ) : (
                <img src={logoblue} id="company-logo" alt="" />
              )}
            </div>
          )}

          <div>
            <FormControlLabel
              style={
                this.state.darkMode
                  ? { color: "white", fontFamily: "Rubik" }
                  : { color: "#171429", fontFamily: "Rubik" }
              }
              control={
                <Switch
                  checked={this.state.darkMode}
                  onChange={this.handleDarkMode}
                  color="primary"
                />
              }
              label="Dark Mode"
            />
          </div>
        </div>
      </div>
    );
  }
}
