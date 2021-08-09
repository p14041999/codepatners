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

let code2 = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ZRC777/ZRC777.sol";

contract GLDToken is ZRC777 {
    constructor(uint256 initialSupply, address[] memory defaultOperators)
        ZRC777("Gold", "GLD", defaultOperators)
    {
        _mint(msg.sender, initialSupply, "", "");
    }
}`;

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
    <div data-aos="fade-down">
      <h2 className="container text-light">Usage</h2>
      <div className="row-center" style={{ justifyContent: "center" }}>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="NFT's" {...a11yProps(0)} />
              <Tab label="Smart Contracts" {...a11yProps(1)} />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <div>
                <p style={{ color: "green" }}>
                  // SPDX-License-Identifier: MIT pragma solidity ^0.8.0;
                </p>

                <p>
                  <span style={{ color: "rgb(55 210 210)" }}>import</span>{" "}
                  <span>
                    "@openzeppelin/contracts/token/ZRC721/extensions/ZRC721URIStorage.sol";
                  </span>
                </p>
                <p>
                  <span style={{ color: "rgb(55 210 210)" }}>import</span>{" "}
                  <span>"@openzeppelin/contracts/utils/Counters.sol";</span>
                </p>
                <p>contract GameItem is ZRC721URIStorage {"{"}</p>
                <p>
                  <span style={{ color: "rgb(55 210 210)" }}>using</span>{" "}
                  Counters for Counters.Counter;
                </p>
                <p>Counters.Counter private _tokenIds;</p>

                <p>constructor() ZRC721("GameItem", "ITM") {"{}"}</p>

                <p>
                  {" "}
                  <span style={{ color: "rgb(55 210 210)" }}>
                    function
                  </span>{" "}
                  awardItem(address player, string memory tokenURI)
                </p>
                <p>public</p>
                <p>
                  {" "}
                  <span style={{ color: "rgb(55 210 210)" }}>returns</span>{" "}
                  (uint256)
                </p>
                <p>{"{"}</p>

                <Typewriter
                  options={{ cursor: "" }}
                  onInit={(typewriter) => {
                    typewriter.typeString("_tokenIds.increment();").start();
                  }}
                />
                <Typewriter
                  options={{ cursor: "" }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(3000)
                      .typeString("uint256 newItemId = _tokenIds.current();")
                      .start();
                  }}
                />
                <Typewriter
                  options={{ cursor: "" }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(9000)
                      .typeString(" _mint(player, newItemId);")
                      .start();
                  }}
                />
                <Typewriter
                  options={{ cursor: "" }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(13000)
                      .typeString("_setTokenURI(newItemId, tokenURI);")
                      .start();
                  }}
                />
                <Typewriter
                  options={{ cursor: "" }}
                  onInit={(typewriter) => {
                    typewriter.pauseFor(13500).typeString("}").start();
                  }}
                />
                <Typewriter
                  options={{ cursor: "" }}
                  onInit={(typewriter) => {
                    typewriter.pauseFor(14000).typeString("}").start();
                  }}
                />
              </div>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <div>
                <p style={{ color: "green" }}>
                  // SPDX-License-Identifier: MIT pragma solidity ^0.8.0;
                </p>
                <p>
                  <span style={{ color: "rgb(55 210 210)" }}>import</span>{" "}
                  "@openzeppelin/contracts/token/ZRC777/ZRC777.sol";
                </p>
                <p>contract GLDToken is ZRC777 {"{"}</p>
                <p>
                  <span style={{ color: "rgb(55 210 210)" }}>constructor</span>
                  (uint256 initialSupply, address[] memory defaultOperators)
                </p>
                <Typewriter
                  options={{ cursor: "" }}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString('ZRC777("Gold", "GLD", defaultOperators)')
                      .start();
                  }}
                />
                <Typewriter
                  options={{ cursor: "" }}
                  onInit={(typewriter) => {
                    typewriter.pauseFor(6000).typeString("{").start();
                  }}
                />
                <Typewriter
                  options={{ cursor: "" }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(7000)
                      .typeString('_mint(msg.sender, initialSupply, "", "");')
                      .start();
                  }}
                />

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
          </SwipeableViews>
        </div>
      </div>
    </div>
  );
}
