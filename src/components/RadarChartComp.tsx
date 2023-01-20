import React from "react";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

export const data = {
  labels: ["Thing 1", "Thing 2", "Thing 3", "Thing 4", "Thing 5", "Thing 6"],
  datasets: [
    {
      label: "# of Votes",
      data: [9, 9, 7, 7, 8, 9, 9],
      backgroundColor: "#4154f1",
      borderColor: "#4154f1",
      borderWidth: 2
    },
    {
        label: "# of Votes",
        data: [7, 5, 7, 4, 9, 6, 7],
        backgroundColor: "#5fe9a9",
        borderColor: "#5fe9a9",
        borderWidth: 2
    }
  ]
};

export function RadarComp() {
  return <Radar data={data} />;
}

export default RadarComp