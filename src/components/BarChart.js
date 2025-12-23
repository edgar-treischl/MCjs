// src/components/BarChart.js
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

/**
 * Render a Bar Chart
 * @param {HTMLCanvasElement} canvas - Canvas element to render chart
 * @param {Object} data - Data object with `labels` and `series`
 * @param {Object} [optionsOverride] - Optional Chart.js options to override defaults
 */
export function BarChart(canvas, data, optionsOverride = {}) {
  if (canvas.chart) canvas.chart.destroy();

  const datasets = mapSeriesToDatasets(data.series, theme);

  // Merge defaults with any overrides
  const defaultOptions = {
    responsive: true,
    scales: { y: { beginAtZero: true } },
    plugins: {
      legend: { position: "top" },
      tooltip: {}
    }
  };

  const finalOptions = { ...defaultOptions, ...optionsOverride };
  // Deep merge plugins if needed
  if (optionsOverride.plugins) {
    finalOptions.plugins = { ...defaultOptions.plugins, ...optionsOverride.plugins };
  }

  canvas.chart = new Chart(canvas, {
    type: "bar",
    data: { labels: data.labels, datasets },
    options: finalOptions
  });

  return canvas.chart;
}
