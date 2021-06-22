import React, { Component } from "react";
import "../../styles/sub-components/Team.scss";
import CEOImage from "../../assets/ceo.svg";
import CTOImage from "../../assets/cto.svg";
import DirectorImage from "../../assets/director.jpeg";
export default class Team extends Component {
  componentDidMount() {
    window.VanillaTilt.init(window.document.querySelectorAll(".team-card"), {
      max: 25,
      speed: 400,
    });
  }
  render() {
    return (
      <div className="px-4 py-2">
        <h2 class="about-h2">Our Team</h2>
        <div className="team-row">
          <div className="team-col">
            <div
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.8"
              className="team-card px-3 py-4"
            >
              <img src={CEOImage} className="team-image" alt="" />
              <p className="p-big bold">Jonathan Emmanuel</p>
              <p className="text-secondary m-0">Founder / CEO</p>
            </div>
          </div>
          <div className="team-col">
            <div
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.8"
              className="team-card px-3 py-4"
            >
              <img src={CTOImage} className="team-image" alt="" />
              <p className="p-big bold">Rajesh Chinnadurai</p>
              <p className="text-secondary m-0">Co-Founder / CTO</p>
            </div>
          </div>
          <div className="team-col">
            <div
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.8"
              className="team-card px-3 py-4"
            >
              <img
                id="dir-img"
                src={DirectorImage}
                className="team-image"
                alt=""
              />
              <p className="p-big bold">Carlie Jayne Guy</p>
              <p className="text-secondary m-0">Director</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
