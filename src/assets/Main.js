import React, { Component } from "react";

import Sub1 from "./SubComponent/Sub1";
import Sub2 from "./SubComponent/Sub2";
import Sub3 from "./SubComponent/Sub3";
import Sub4 from "./SubComponent/Sub4";
import Sub5 from "./SubComponent/Sub5";
import Sub6 from "./SubComponent/Sub6";
class Main extends Component {
  render() {
    return (
      <div>
        <Sub1 />
        <Sub2 />
        <Sub3 />
        {/* <Sub4 /> */}
        <Sub6 />
        <Sub5 />
      </div>
    );
  }
}

export default Main;
