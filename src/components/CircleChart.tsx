import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Violet', 'Yellow', 'Green', 'Red', 'Blue', 'LightBlue'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        '#4154f1',
        '#ffc107',
        '#198754',
        '#dc3545',
        '#0d6efd',
        'rgb(109 140 235)',
      ],
      borderColor: [
        '#4154f1',
        '#ffc107',
        '#198754',
        '#dc3545',
        '#0d6efd',
        'rgb(109 140 235)',
      ],
      borderWidth: 1,
    },
  ],
};

export function App() {
  return <Doughnut data={data} />;
}

export default App
