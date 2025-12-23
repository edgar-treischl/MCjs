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
 * Render a Bar Chart with a minimal theme and optional axis labels
 * @param {HTMLCanvasElement} canvas - Canvas element to render chart
 * @param {Object} data - Data object with `labels` and `series`
 * @param {Object} [optionsOverride] - Optional Chart.js options to override defaults
 * @param {string} [xLabel] - Label for the x-axis
 * @param {string} [yLabel] - Label for the y-axis
 */
export function BarChart(canvas, data, optionsOverride = {}, xLabel = "", yLabel = "") {
  if (canvas.chart) canvas.chart.destroy();

  const datasets = mapSeriesToDatasets(data.series, theme);

  // Minimal theme options inspired by ggplot2::theme_minimal
  const themeMinimal = {
    responsive: true,
    layout: {
      padding: 10
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#333",
          font: { size: 12 }
        }
      },
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.7)",
        titleColor: "#fff",
        bodyColor: "#fff"
      }
    },
    scales: {
      x: {
        grid: {
          display: false // remove vertical grid lines
        },
        ticks: {
          color: "#333",
          font: { size: 12 }
        },
        title: {
          display: !!xLabel,
          text: xLabel,
          color: "#333",
          font: { size: 14, weight: "bold" }
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "#e0e0e0",
          borderDash: [2, 2]
        },
        ticks: {
          color: "#333",
          font: { size: 12 }
        },
        title: {
          display: !!yLabel,
          text: yLabel,
          color: "#333",
          font: { size: 14, weight: "bold" }
        }
      }
    }
  };

  // Merge theme with overrides
  const finalOptions = { ...themeMinimal, ...optionsOverride };
  if (optionsOverride.plugins) {
    finalOptions.plugins = { ...themeMinimal.plugins, ...optionsOverride.plugins };
  }
  if (optionsOverride.scales) {
    finalOptions.scales = { ...themeMinimal.scales, ...optionsOverride.scales };
  }

  canvas.chart = new Chart(canvas, {
    type: "bar",
    data: { labels: data.labels, datasets },
    options: finalOptions
  });

  return canvas.chart;
}
