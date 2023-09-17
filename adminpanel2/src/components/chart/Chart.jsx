import React from "react";
import "./chart.scss";
import { Line, XAxis, LineChart, Tooltip, CartesianGrid } from "recharts";

export default function Chart(
  data,
  datakey,
  grid,
  title,
  month,
  width,
  height,
  active
) {
  return (
    <div className="main">
      {console.log(data.active)}

      <div className={"wrapper " + data.active}>
        <h3>{data.title}</h3>

        <div className="chart">
          <LineChart width={data.width} height={data.height} data={data.data}>
            <XAxis dataKey={data.month} stroke="lightblue" />
            <Tooltip />
            {data.grid && <CartesianGrid stroke="lightgray" />}
            <Line dataKey={data.datakey} stroke="blue" type="monotone" />
          </LineChart>
        </div>
      </div>
    </div>
  );
}
