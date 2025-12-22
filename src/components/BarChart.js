import { theme } from "../core/theme.js";
import { mapSeriesToDatasets } from "../core/utils.js";

// Updated createChart function to accept ChartConstructor
function createChartWithGlobal(canvas, config, ChartConstructor) {
  const ChartClass = ChartConstructor || window.Chart; // fallback to global Chart
  if (!ChartClass) throw new Error("Chart.js not found. Make sure Chart.js is loaded.");
  return new ChartClass(canvas, config);
}

export function BarChart(canvas, data, ChartInstance) {
  if (canvas.chart) canvas.chart.destroy();
  const datasets = mapSeriesToDatasets(data.series, theme);

  canvas.chart = createChartWithGlobal(canvas, {
    type: "bar",
    data: {
      labels: data.labels,
      datasets
    },
    options: {
      responsive: true,
      scales: { y: { beginAtZero: true } }
    }
  }, ChartInstance);

  return canvas.chart;
}
