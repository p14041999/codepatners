import React, { Component } from "react";
import ceo from "../../assets/ceo.png";
import cto from "../../assets/cto.png";
import director from "../../assets/director.svg";
import DirectorImage from "../../assets/did.jpeg";

import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Close,
} from "@material-ui/icons";
import CloseIcon from "@material-ui/icons/Close";

class TeamView extends Component {
  handleCloseBtnClick = () => {
    const { team } = this.props;
    team(false);
  };
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div className="full">
        <div className="mainCont">
          <div id="closeBtnCont" onClick={this.handleCloseBtnClick}>
            <CloseIcon id="closeBtn" />
          </div>
          <div className="c1">
            <img
              style={{ objectFit: "cover", borderRadius: "50%" }}
              src={data.image}
              height={200}
              width={200}
            />
            <div className="logCont" style={{ paddingTop: 40 }}>
              <a href={data.facebook} target="_blank">
                <Facebook />
              </a>
              <a href={data.twitter} target="_blank">
                <Twitter />
              </a>
              <a href={data.insta} target="_blank">
                <Instagram />
              </a>
              <a href={data.linkedin} target="_blank">
                <LinkedIn />
              </a>
            </div>
          </div>
          <div className="c2">
            <h1>{data.name}</h1>
            <h2>{data.pos}</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default TeamView;
