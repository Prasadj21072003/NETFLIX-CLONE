import React from "react";
import "./featured.scss";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function Featured() {
  return (
    <div className="featured">
      <div className="wrapper">
        <div className="details">
          <span className="title">Revenue</span>

          <div className="moneydetail">
            <span className="money">$2,145</span>
            <span className="moneyrate">
              {" "}
              - 11.4 <ArrowDownwardIcon className="icon negative" />
            </span>
          </div>

          <span className="desc">Compared to last month</span>
        </div>
      </div>
      <div className="wrapper">
        <div className="details">
          <span className="title">Sales</span>

          <div className="moneydetail">
            <span className="money">$4,445</span>
            <span className="moneyrate">
              {" "}
              - 2.4 <ArrowDownwardIcon className="icon negative" />
            </span>{" "}
          </div>

          <span className="desc">Compared to last month</span>
        </div>
      </div>

      <div className="wrapper">
        <div className="details">
          <span className="title">Cost</span>

          <div className="moneydetail">
            <span className="money">$4,245</span>
            <span className="moneyrate">
              {" "}
              + 1.4 <ArrowUpwardIcon className="icon" />
            </span>
          </div>

          <span className="desc">Compared to last month</span>
        </div>
      </div>
    </div>
  );
}
