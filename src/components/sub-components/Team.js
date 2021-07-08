import React, { Component } from "react";
import "../../styles/sub-components/Team.scss";
import CEOImage from "../../assets/ceo.svg";
import CTOImage from "../../assets/cto.svg";
import Director from "../../assets/director.svg";
import DirectorImage from "../../assets/did.jpeg";
export default class Team extends Component {
  componentDidMount() {
    window.VanillaTilt.init(window.document.querySelectorAll(".team-card"), {
      max: 25,
      speed: 400,
    });
  }

  handleTeamClick = (data) => {
    const { team } = this.props;
    team(true, data);
  };
  render() {
    let director;
    return (
      <div className="px-4 py-2">
        <h2 class="about-h2" id="team-heading">
          Our Team
        </h2>
        <div className="team-row">
          <div className="team-col">
            <div
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.8"
              className="team-card px-1 py-2"
              onClick={(e) =>
                this.handleTeamClick({
                  name: "Jonathan Emmanuel",
                  pos: "Founder / CEO",
                  image: CEOImage,
                  insta: "#",
                  facebook: "#",
                  twitter: "#",
                  linkedin: "#",
                })
              }
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
              className="team-card px-2 py-2"
              onClick={(e) =>
                this.handleTeamClick({
                  name: "Rajesh Chinnadurai",
                  pos: "Co-Founder / CTO",
                  image: CTOImage,
                  insta: "https://www.instagram.com/rajeshodcvec/",
                  facebook: "https://www.facebook.com/rajeshodcvec",
                  twitter: "https://twitter.com/rajesh_odc?s=08",
                  linkedin:
                    "https://www.crunchbase.com/person/rajesh-chinnadurai",
                })
              }
            >
              <img src={CTOImage} className="team-image" alt="" />
              <p className="p-big bold">Rajesh Chinnadurai</p>
              <p className="text-secondary m-0">Co-Founder / CTO</p>
            </div>
          </div>

          {/* <div className="team-col">
            <div
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.8"
              className="team-card px-2 py-2"
              onClick={(e) =>
                this.handleTeamClick({
                  name: "Carlie Jayne Guy",
                  pos: "Director",
                  image: DirectorImage,
                  insta: "#",
                  facebook: "#",
                  twitter: "#",
                  linkedin: "#",
                })
              }
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
          </div> */}
          <div className="team-col">
            <div
              data-tilt
              data-tilt-glare
              data-tilt-max-glare="0.8"
              className="team-card px-2 py-2"
              onClick={(e) =>
                this.handleTeamClick({
                  name: "Jerome Jones",
                  pos: "Director",
                  image: Director,
                  insta: "#",
                  facebook: "#",
                  twitter: "#",
                  linkedin: "#",
                })
              }
            >
              <img src={Director} className="team-image" alt="" />
              <p className="p-big bold">Jerome Jones</p>
              <p className="text-secondary m-0">Director</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
