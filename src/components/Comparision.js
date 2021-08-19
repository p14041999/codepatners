import React, { Component } from "react";
import "../styles/comp.scss";

class Comparision extends Component {
  render() {
    return (
      <div
        className="py-3 tab comp"
        data-aos="fade-down"
        style={{ marginBottom: 60 }}
      >
        <h2 className="text-light">Comparing to Other Blockchains</h2>
        <table className="text-light" style={{ overflow: "scroll" }}>
          <tr>
            <th></th>
            <th style={{ fontSize: "1.4rem", color: "#ffad28" }}>Bitcoin</th>
            <th style={{ fontSize: "1.4rem" }}>Ethereum</th>
            <th style={{ fontSize: "1.4rem", color: "#56d62a" }}>Polkadot</th>
            <th
              style={{ fontSize: "1.4rem", backgroundColor: "#08758b" }}
              className="text-info"
            >
              Zenith
            </th>
          </tr>
          <tr>
            <td>Transactional Throughput</td>
            <td>7 tps</td>
            <td>14 tps</td>
            <td>1,500 tps</td>
            <td style={{ backgroundColor: "#08758b" }}>{">"} 9,500 tps</td>
          </tr>
          <tr>
            <td>Transactional Finality</td>
            <td>60 min</td>
            <td>6 min</td>
            <td>60 sec</td>
            <td style={{ backgroundColor: "#08758b" }}>{"<"} 8 sec</td>
          </tr>
          <tr>
            <td>Energy Efficient</td>
            <td>No; ASIC-Optimal</td>
            <td>No; GPU-Optimal</td>
            <td>Yes; CPU-Optimal</td>
            <td style={{ backgroundColor: "#08758b" }}>Yes; CPU-Optimal</td>
          </tr>
          <tr>
            <td>Number of Validators</td>

            <td>3 Pools w/ {">"}51% hash rate</td>
            <td>2 Pools w/ {">"}51% hash rate</td>
            <td>{"<"}200 nodes relay chain</td>
            <td style={{ backgroundColor: "#08758b" }}>Thousands of nodes</td>
          </tr>
          <tr>
            <td>Sybil Protection</td>
            <td>Proof of Work</td>
            <td>Proof of Work</td>
            <td>Proof of Stake</td>
            <td style={{ backgroundColor: "#08758b" }}>Proof of Stake</td>
          </tr>
          <tr>
            <td>Safety Threshold</td>
            <td>51%</td>
            <td>51%</td>
            <td>33%</td>
            <td style={{ backgroundColor: "#08758b" }}>80% parameterized</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>

            <td style={{ backgroundColor: "#08758b" }}>
              <a>
                <button
                  style={{ backgroundColor: "white", padding: 15 }}
                  className="btnp p-big"
                >
                  Build Now {"</>"}
                </button>
              </a>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Comparision;
