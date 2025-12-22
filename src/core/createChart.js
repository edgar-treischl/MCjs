export function createChart(canvas, config, ChartInstance) {
  const ChartConstructor = ChartInstance || window.Chart; // fallback to global Chart
  if (!ChartConstructor) throw new Error("Chart.js not found. Make sure Chart.js is loaded.");
  return new ChartConstructor(canvas, config);
}
