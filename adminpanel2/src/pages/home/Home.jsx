import React from "react";
import "./home.scss";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import { data } from "../../demodata";
import Smallwiget from "../../components/smallwidget/Smallwiget";
import Largewidge from "../../components/largewidget/Largewidget";

export default function Home() {
  return (
    <div className="home">
      <div className="wrapper">
        <Featured />
        <Chart
          title="User Analytics"
          data={data}
          datakey="Active users"
          month="month"
          width={900}
          height={200}
          active="active"
          grid
        />
        <div className="homewidgets">
          <Smallwiget />
          <Largewidge />
        </div>
      </div>
    </div>
  );
}
