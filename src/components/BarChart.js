import { createChart } from "../core/createChart.js";
import { theme } from "../core/theme.js";
import { mapSeriesToDatasets } from "../core/utils.js";

export function BarChart(canvas, data) {
  if (canvas.chart) canvas.chart.destroy();
  const datasets = mapSeriesToDatasets(data.series, theme);

  canvas.chart = createChart(canvas, {
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
