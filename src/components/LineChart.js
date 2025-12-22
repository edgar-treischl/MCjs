// ./components/LineChart.js
import { createChart } from "../core/createChart.js";
import { theme } from "../core/theme.js";
import { mapSeriesToDatasets } from "../core/utils.js";

/**
 * Render a Line Chart on a given canvas with provided data
 * @param {HTMLCanvasElement} canvas - The canvas element to render the chart
 * @param {Object} data - Data object containing labels and series
 * @param {Object} [ChartInstance] - Optional Chart.js constructor
 */
export function LineChart(canvas, data, ChartInstance) {
  // Destroy existing chart instance if present
  if (canvas.chart) canvas.chart.destroy();

  // Convert series data into Chart.js datasets
  const datasets = mapSeriesToDatasets(data.series, theme);

  // Create the chart using Chart.js, fallback to global Chart
  canvas.chart = createChart(canvas, {
    type: "line",
    data: {
      labels: data.labels,
      datasets,
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        tooltip: {
          mode: "index",
          intersect: false,
        },
      },
      interaction: {
        mode: "nearest",
        axis: "x",
        intersect: false,
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  }, ChartInstance);

  return canvas.chart;
}
