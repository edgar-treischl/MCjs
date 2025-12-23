// LineChart.js
import { theme } from "../core/theme.js";
import { mapSeriesToDatasets } from "../core/utils.js";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

// Register only the components we need
Chart.register(
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

/**
 * Render a Line Chart on a given canvas with provided data
 * @param {HTMLCanvasElement} canvas - The canvas element to render the chart
 * @param {Object} data - Data object containing labels and series
 */
export function LineChart(canvas, data) {
  // Destroy existing chart instance if present
  if (canvas.chart) canvas.chart.destroy();

  // Convert series data into Chart.js datasets
  const datasets = mapSeriesToDatasets(data.series, theme);

  // Create a new Chart.js instance
  canvas.chart = new Chart(canvas, {
    type: "line",
    data: {
      labels: data.labels,
      datasets
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top"
        },
        tooltip: {
          mode: "index",
          intersect: false
        }
      },
      interaction: {
        mode: "nearest",
        axis: "x",
        intersect: false
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  return canvas.chart;
}
