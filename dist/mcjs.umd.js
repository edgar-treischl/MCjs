(function(global, factory){
  if (typeof exports === "object" && typeof module !== "undefined") {
    factory(exports);
  } else if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else {
    factory(global.MCjs = {});
  }
})(this, function(exports){
  "use strict";

  const theme = { colors:["#36A2EB","#FF6384","#4BC0C0","#FFCE56"], borderWidth:1 };

  function mapSeriesToDatasets(series, theme) {
    return series.map((s,i) => ({
      label: s.name,
      data: s.values,
      backgroundColor: theme.colors[i % theme.colors.length],
      borderColor: theme.colors[i % theme.colors.length],
      borderWidth: theme.borderWidth
    }));
  }

  function createChart(canvas, config, ChartInstance) {
    const ChartConstructor = ChartInstance || window.Chart;
    if (!ChartConstructor) throw new Error("Chart.js not found.");
    return new ChartConstructor(canvas, config);
  }

  function BarChart(canvas, data, ChartInstance) {
    if (canvas.chart) canvas.chart.destroy();
    const datasets = mapSeriesToDatasets(data.series, theme);
    canvas.chart = createChart(canvas, {
      type: "bar",
      data: { labels: data.labels, datasets },
      options: { responsive:true, scales: { y: { beginAtZero:true } } }
    }, ChartInstance);
    return canvas.chart;
  }

  function LineChart(canvas, data, ChartInstance) {
    if (canvas.chart) canvas.chart.destroy();
    const datasets = mapSeriesToDatasets(data.series, theme);
    canvas.chart = createChart(canvas, {
      type: "line",
      data: { labels: data.labels, datasets },
      options: {
        responsive:true,
        plugins: { legend:{ position:"top" }, tooltip:{ mode:"index", intersect:false } },
        interaction: { mode:"nearest", axis:"x", intersect:false },
        scales:{ y:{ beginAtZero:true } }
      }
    }, ChartInstance);
    return canvas.chart;
  }

  exports.BarChart = BarChart;
  exports.LineChart = LineChart;
  exports.theme = theme;
});
