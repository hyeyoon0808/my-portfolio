import React, { Component } from "react";
import "./Skills.css";
import { HorizontalBar } from "react-chartjs-2";

const state = {
  labels: [
    "Java",
    "C++",
    "React.js",
    "Phython",
    "Spring",
    "HTML/CSS",
    "MongoDB",
  ],
  datasets: [
    {
      label: "Language",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [80, 70, 60, 65, 55, 60, 70, 40, 100],
    },
  ],
};
class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <h2>Skills</h2>
        <h3>Language I used</h3>
        <div className="chart">
          <HorizontalBar
            data={state}
            options={{
              title: {
                display: true,
                //text: "Languages",
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
