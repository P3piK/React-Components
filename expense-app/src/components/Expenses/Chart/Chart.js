import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {

    const values = props.dataPoints.map(dataPoint => dataPoint.value);
    console.log(values);
    const maxValue = Math.max(...values);
    console.log(maxValue);

  return (
    <div className="chart">
      {props.dataPoints.map((point) => (
        <ChartBar
          key={point.label}
          value={point.value}
          maxValue={maxValue}
          label={point.label}
        />
      ))}
    </div>
  );
}

export default Chart;
