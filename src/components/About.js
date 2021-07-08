import React, { Component } from "react";
import "../styles/About.scss";
import AboutUs from "./sub-components/AboutUs";
import Mission from "./sub-components/Mission";
import Structure from "./sub-components/Structure";
import Team from "./sub-components/Team";

export default class About extends Component {
  state = {
    about: true,
    mission: false,
    structure: false,
    team: false,
  };
  constructor(props) {
    super(props);
    const { team } = this.props;
    this.clearState = this.clearState.bind(this);
    // console.log(team);
  }
  clearState() {
    this.setState({
      about: false,
      mission: false,
      structure: false,
      team: false,
    });
  }
  render() {
    const { team } = this.props;
    console.log(team);
    return (
      <>
        <div className="container text-light py-7 desktop">
          <h4>About Zenith</h4>
          <div className="about-row">
            <div className="about-sidebar">
              <div
                className={
                  this.state.about
                    ? "about-card active text-info"
                    : "about-card"
                }
                onClick={(e) => {
                  this.clearState();
                  this.setState({ about: true });
                }}
              >
                <p className="p-big m-0 px-3 py-4">About Us</p>
              </div>
              <div
                className={
                  this.state.mission
                    ? "about-card active text-info"
                    : "about-card"
                }
                onClick={(e) => {
                  this.clearState();
                  this.setState({ mission: true });
                }}
              >
                <p className="p-big m-0 px-3 py-4">Mission & Vision</p>
              </div>
              <div
                className={
                  this.state.structure
                    ? "about-card active text-info"
                    : "about-card"
                }
                onClick={(e) => {
                  this.clearState();
                  this.setState({ structure: true });
                }}
              >
                <p className="p-big m-0 px-3 py-4">Business Structure</p>
              </div>
              <div
                className={
                  this.state.team ? "about-card active text-info" : "about-card"
                }
                onClick={(e) => {
                  this.clearState();
                  this.setState({ team: true });
                }}
              >
                <p className="p-big m-0 px-3 py-4">Team</p>
              </div>
            </div>
            <div className="about-content">
              {this.state.about && <AboutUs />}
              {this.state.mission && <Mission />}
              {this.state.structure && <Structure />}
              {this.state.team && <Team team={team} />}
            </div>
          </div>
        </div>
        <div className="container text-light py-7 mobile">
          <h4>About Zenith</h4>
          <div className="about-row">
            <div className="about-sidebar">
              <div className="about-carde">
                <p className="p-big m-0 px-3 py-4 about-card-title active text-info">
                  About Us
                </p>
                <div className={"about-card active text-info"}>
                  <AboutUs />
                </div>
              </div>
              <div className="about-carde">
                <p className="p-big m-0 px-3 py-4 about-card-title active text-info">
                  Mission & Vision
                </p>
                <div className={"about-card active text-info"}>
                  <Mission />
                </div>
              </div>
              <div className="about-carde">
                <p className="p-big m-0 px-3 py-4 about-card-title active text-info">
                  Business Structure
                </p>

                <div className={"about-card active text-info"}>
                  <Structure />
                </div>
              </div>
              <div className="about-carde">
                <p className="p-big m-0 px-3 py-4 about-card-title active text-info">
                  Team
                </p>
                <div className={"about-card active text-info"}>
                  <Team team={team} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
