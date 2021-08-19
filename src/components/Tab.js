import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import Typical from "react-typical";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Typewriter from "typewriter-effect";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#1e183c",
    width: 1350,
    marginBottom: 100,
    color: "white",
    textAlign: "start",
    overflow: "auto",
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div data-aos="fade-down" className="tab tabzz">
      <h2 className="text-light text-center">Build on Zenith Chain</h2>
      <div className="row-center" style={{ justifyContent: "center" }}>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              className="text-info lightBack"
              indicatorColor="primary"
              // textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Smart Contracts" {...a11yProps(0)} />
              <Tab label="NFT's" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <div>
                <p style={{ color: "green", fontSize: 17 }}>
                  // SPDX-License-Identifier: MIT
                </p>

                <p style={{ fontSize: 17 }}>
                  <span style={{ color: "#e714ea" }}>pragma</span>{" "}
                  <span className="text-info">solidity</span> ^0.8.0;
                </p>

                <p style={{ fontSize: 17 }}>
                  <span className="text-info">contract</span>{" "}
                  <span style={{ color: "#00b716" }}>GLDToken</span> {"{"}
                </p>
                <p style={{ fontSize: 17 }}>
                  <span className="text-info">constructor</span>(
                  <span style={{ color: "#00b716" }}>uint256</span>{" "}
                  <span style={{ color: "#4d8dec" }}>initialSupply</span>,{" "}
                  <span style={{ color: "#00b716" }}>address</span>[ ]{" "}
                  <span className="text-info">memory</span>{" "}
                  <span style={{ color: "#4d8dec" }}>defaultOperators</span>)
                </p>
                <div className="type" style={{ display: "flex" }}>
                  <span style={{ color: "#ffff71" }}>
                    <Typewriter
                      options={{ cursor: "" }}
                      onInit={(typewriter) => {
                        typewriter.typeString("ZRC777").start();
                      }}
                    />
                  </span>
                  <span>
                    <Typewriter
                      options={{ cursor: "" }}
                      onInit={(typewriter) => {
                        typewriter
                          .pauseFor(1000)
                          .typeString('("Gold", "GLD", defaultOperators)')
                          .start();
                      }}
                    />
                  </span>
                </div>

                <Typewriter
                  className="type"
                  options={{ cursor: "" }}
                  onInit={(typewriter) => {
                    typewriter.pauseFor(6000).typeString("{").start();
                  }}
                />
                <div className="type" style={{ display: "flex" }}>
                  <span style={{ color: "#ffff71" }}>
                    <Typewriter
                      options={{ cursor: "" }}
                      onInit={(typewriter) => {
                        typewriter.pauseFor(7000).typeString("_mint").start();
                      }}
                    />
                  </span>

                  <Typewriter
                    className="type"
                    options={{ cursor: "" }}
                    onInit={(typewriter) => {
                      typewriter
                        .pauseFor(8000)
                        .typeString('(msg.sender, initialSupply, "", "");')
                        .start();
                    }}
                  />
                </div>

                <Typewriter
                  options={{ cursor: "" }}
                  onInit={(typewriter) => {
                    typewriter.pauseFor(14000).typeString("}").start();
                  }}
                />
                <Typewriter
                  options={{ cursor: "" }}
                  onInit={(typewriter) => {
                    typewriter.pauseFor(14500).typeString("}").start();
                  }}
                />
              </div>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <div>
                <p style={{ color: "green", fontSize: 18 }}>
                  // SPDX-License-Identifier: MIT
                </p>
                <p style={{ fontSize: 17 }}>
                  <span style={{ color: "#e714ea" }}>pragma</span>{" "}
                  <span className="text-info">solidity</span> ^0.8.0;
                </p>

                <p style={{ fontSize: 17 }}>
                  <span className="text-info">contract</span>{" "}
                  <span style={{ color: "#00b716" }}>GameItem</span> {"{"}
                </p>

                <p style={{ fontSize: 17 }}>
                  Counters.Counter <span className="text-info">private</span>{" "}
                  _tokenIds;
                </p>

                <p style={{ fontSize: 17 }}>
                  <span className="text-info">constructor</span>(){" "}
                  <span style={{ color: "#ffff71" }}>ZRC721</span>
                  ("GameItem", "ITM") {"{}"}
                </p>

                <p style={{ fontSize: 17 }}>
                  {" "}
                  <span style={{ color: "rgb(55 210 210)" }}>
                    function
                  </span>{" "}
                  <span style={{ color: "#ffff71" }}>awardItem</span>(
                  <span style={{ color: "#00b716" }}>address</span> player,{" "}
                  <span style={{ color: "#00b716" }}>string</span>{" "}
                  <span className="text-info">memory</span> tokenURI)
                </p>
                <p style={{ fontSize: 17 }} className="text-info">
                  public
                </p>
                <p style={{ fontSize: 17 }}>
                  {" "}
                  <span style={{ color: "#e714ea" }}>returns</span>{" "}
                  <span style={{ color: "#00b716" }}>(uint256)</span>
                </p>
                <p>{"{"}</p>
                <div className="type" style={{ display: "flex" }}>
                  <Typewriter
                    options={{ cursor: "" }}
                    onInit={(typewriter) => {
                      typewriter.typeString("_tokenIds.").start();
                    }}
                  />
                  <span style={{ color: "#ffff71" }}>
                    <Typewriter
                      options={{ cursor: "" }}
                      onInit={(typewriter) => {
                        typewriter
                          .pauseFor(1500)
                          .typeString("increment();")
                          .start();
                      }}
                    />
                  </span>
                </div>
                <div className="type" style={{ display: "flex" }}>
                  <span style={{ color: "#00b716" }}>
                    <Typewriter
                      options={{ cursor: "" }}
                      onInit={(typewriter) => {
                        typewriter.pauseFor(3000).typeString("uint256").start();
                      }}
                    />
                  </span>
                  &nbsp;
                  <Typewriter
                    options={{ cursor: "" }}
                    onInit={(typewriter) => {
                      typewriter
                        .pauseFor(4500)
                        .typeString("newItemId = _tokenIds")
                        .start();
                    }}
                  />
                  <span style={{ color: "#ffff71" }}>
                    <Typewriter
                      options={{ cursor: "" }}
                      onInit={(typewriter) => {
                        typewriter
                          .pauseFor(7500)
                          .typeString(".current();")
                          .start();
                      }}
                    />
                  </span>
                </div>

                <div className="type" style={{ display: "flex" }}>
                  <span style={{ color: "#ffff71" }}>
                    <Typewriter
                      options={{ cursor: "" }}
                      onInit={(typewriter) => {
                        typewriter.pauseFor(9000).typeString(" _mint").start();
                      }}
                    />
                  </span>
                  <Typewriter
                    options={{ cursor: "" }}
                    onInit={(typewriter) => {
                      typewriter
                        .pauseFor(10000)
                        .typeString("(player, newItemId);")
                        .start();
                    }}
                  />
                </div>
                <div style={{ display: "flex" }}>
                  <span style={{ color: "#ffff71" }}>
                    <Typewriter
                      options={{ cursor: "" }}
                      onInit={(typewriter) => {
                        typewriter
                          .pauseFor(13000)
                          .typeString("_setTokenURI")
                          .start();
                      }}
                    />
                  </span>
                  <Typewriter
                    options={{ cursor: "" }}
                    onInit={(typewriter) => {
                      typewriter
                        .pauseFor(14500)
                        .typeString("(newItemId, tokenURI);")
                        .start();
                    }}
                  />
                </div>

                <div className="type" style={{ display: "flex" }}>
                  <span style={{ color: "#e714ea" }}>
                    <Typewriter
                      options={{ cursor: "" }}
                      onInit={(typewriter) => {
                        typewriter
                          .pauseFor(17500)
                          .typeString("return ")
                          .start();
                      }}
                    />
                  </span>
                  &nbsp;
                  <Typewriter
                    options={{ cursor: "" }}
                    onInit={(typewriter) => {
                      typewriter
                        .pauseFor(19000)
                        .typeString(" newItemId")
                        .start();
                    }}
                  />
                </div>
                <Typewriter
                  className="type"
                  options={{ cursor: "" }}
                  onInit={(typewriter) => {
                    typewriter.pauseFor(20500).typeString("}").start();
                  }}
                />
                <Typewriter
                  className="type"
                  options={{ cursor: "" }}
                  onInit={(typewriter) => {
                    typewriter.pauseFor(21000).typeString("}").start();
                  }}
                />
              </div>
            </TabPanel>
          </SwipeableViews>
        </div>
      </div>
    </div>
  );
}
