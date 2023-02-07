import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart({ chartData }) {
  return (
    <div>
        <div className="ui container center">
        <h1 className="ui header">Line Graph </h1>
      <h3 className="ui header">
        Details of Daily Users of App's in Different Countries
      </h3>

        </div>
      
      <div className="chart">
        <Line data={chartData} />;
      </div>
    </div>
  );
}

export default LineChart;