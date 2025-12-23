// src/components/bar.js
import { theme } from "../core/theme.js";
import { mapSeriesToDatasets } from "../core/utils.js";
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

// Register only what we need
Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export function BarChart(canvas, data) {
  if (canvas.chart) canvas.chart.destroy();

  const datasets = mapSeriesToDatasets(data.series, theme);

  canvas.chart = new Chart(canvas, {
    type: "bar",
    data: {
      labels: data.labels,
      datasets
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: true } }
    }
  });

  return canvas.chart;
}
