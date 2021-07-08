import "./App.scss";
import React, { Component } from "react";
import Navbar from "./components/Navabar";
import Hero from "./components/Hero";
import Usage from "./components/Usage";
import About from "./components/About";
import Footer from "./components/Footer";
import NavMenu from "./components/NavbarMenu";
import Timeline from "./components/Timeline";
import TeamView from "./components/sub-components/TeamView";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      NavMenu: false,
      Team: false,
      data: {},
    };
  }
  componentDidMount() {
    let cursor = window.document.querySelector(".cursor");
    let pointer = window.document.querySelector(".pointer");
    window.document.addEventListener("mousemove", (e) => {
      // console.log(e.pageY,e.pageX)
      cursor.setAttribute(
        "style",
        `top:${e.pageY - 25}px;left:${e.pageX - 25}px`
      );
      pointer.setAttribute(
        "style",
        `top:${e.pageY - 2.5}px;left:${e.pageX - 2.5}px`
      );
    });
  }
  handleChangeState = (val) => {
    this.setState({ ...this.state, NavMenu: val });
  };
  handleTeamChangeState = async (val, data) => {
    // console.log(data);
    await this.setState({ ...this.state, Team: val, data: data });
    console.log(this.state);
  };
  render() {
    return (
      <>
        <div className="max-width bg-dark" id="desktop">
          {this.state.NavMenu && <NavMenu />}
          <Navbar
            NavMenu={this.state}
            handleChangeState={this.handleChangeState}
          />
          <Hero />
          <Usage />
          <About team={this.handleTeamChangeState} />
          {this.state.Team ? (
            <TeamView
              team={this.handleTeamChangeState}
              data={this.state.data}
            />
          ) : null}
          <Timeline />
        </div>
        <div className="max-width pos-rel">
          <Footer />
        </div>
        <span className="cursor"></span>
        <span className="pointer"></span>
      </>
    );
  }
}
