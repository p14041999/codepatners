import React, { Component } from "react";
import "../styles/Sub6.scss";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import PeopleIcon from "@material-ui/icons/People";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import CopyrightIcon from "@material-ui/icons/Copyright";

class Sub6 extends Component {
  render() {
    return (
      <div className="father " data-aos="fade-down">
        <div className="son">
          <AttachMoneyIcon id="acon" />
          {/* <VisibilitySensor>
            {({ isVisible }) => (
              <h4>
                {isVisible ? <CountUp end={1} start={0} duration={1} /> : 0}
              </h4>
            )}
          </VisibilitySensor> */}
          <h4>1</h4>
          <p>Current Price</p>
        </div>
        <div className="son">
          <PeopleIcon id="acon" />
          <VisibilitySensor>
            {({ isVisible }) => (
              <h4>
                {isVisible ? (
                  <CountUp end={1000000} start={0} duration={3} />
                ) : (
                  0
                )}
              </h4>
            )}
          </VisibilitySensor>
          <p>Holders</p>
        </div>
        <div className="son">
          <CopyrightIcon id="acon" />
          <VisibilitySensor>
            {({ isVisible }) => (
              <h4>
                {isVisible ? (
                  <CountUp end={21000000} start={0} duration={4} />
                ) : (
                  0
                )}
              </h4>
            )}
          </VisibilitySensor>

          <p>Supply</p>
        </div>
        {/* <div className="son">
          <VisibilitySensor>
            {({ isVisible }) => (
              <h4>
                {isVisible ? <CountUp end={1000} start={0} duration={5} /> : 0}
              </h4>
            )}
          </VisibilitySensor>
          <p>Market Cap</p>
        </div> */}
      </div>
    );
  }
}

export default Sub6;
