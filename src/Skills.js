import React, { Component } from "react";
import "./Skills.css";
import { Bar } from "react-chartjs-2";

const state = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      label: "Rainfall",
      backgroundColor: "rgba(75,192,192,1)",
      borderColor: "rgba(0,0,0,1)",
      borderWidth: 2,
      data: [65, 59, 80, 81, 56],
    },
  ],
};
class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <h3>Skills</h3>
        <h2>Waht I can do</h2>
        <div className="chart">
          <Bar
            data={state}
            options={{
              title: {
                display: true,
                text: "Average Rainfall per month",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div>
      </div>
    );
  }
}

export default Skills;