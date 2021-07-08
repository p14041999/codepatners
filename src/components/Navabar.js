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
    };
  }

  handleMenuBtnClick = () => {
    // console.log(this.props);
    const { handleChangeState, NavMenu } = this.props;
    this.setState({ NavMenu: !this.state.NavMenu });
    handleChangeState(!this.state.NavMenu);
  };
  render() {
    return (
      <div className="container py-3" id="navbar-cont">
        <div className="nav-top" id="navbar">
          <div onClick={this.handleMenuBtnClick}>
            <div id="menubtn">
              <span
                className={this.state.NavMenu ? "blue" : "hamburger"}
              ></span>
            </div>
          </div>

          <div id="logo-cont">
            {this.state.NavMenu ? (
              <img src={logoblue} id="company-logoblue" alt="" />
            ) : (
              <img src={logo} id="company-logo" alt="" />
            )}
          </div>
          <div>
            <FormControlLabel
              style={{ color: "white", fontFamily: "Rubik" }}
              control={
                <Switch
                  // checked={true}
                  //onChange={func}
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
