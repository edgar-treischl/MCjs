const s = {
  colors: [
    "#36A2EB",
    "#FF6384",
    "#4BC0C0",
    "#FFCE56"
  ],
  borderWidth: 1
};
function n(r, t) {
  return r.map((o, e) => ({
    label: o.name,
    data: o.values,
    backgroundColor: t.colors[e % t.colors.length],
    borderColor: t.colors[e % t.colors.length],
    borderWidth: t.borderWidth
  }));
}
function a(r, t, o) {
  const e = o || window.Chart;
  if (!e) throw new Error("Chart.js not found. Make sure Chart.js is loaded.");
  return new e(r, t);
}
function l(r, t, o) {
  r.chart && r.chart.destroy();
  const e = n(t.series, s);
  return r.chart = a(r, {
    type: "bar",
    data: {
      labels: t.labels,
      datasets: e
    },
    options: {
      responsive: !0,
      scales: { y: { beginAtZero: !0 } }
    }
  }, o), r.chart;
}
function i(r, t, o) {
  const e = o || window.Chart;
  if (!e) throw new Error("Chart.js not found. Make sure Chart.js is loaded.");
  return new e(r, t);
}
function h(r, t, o) {
  r.chart && r.chart.destroy();
  const e = n(t.series, s);
  return r.chart = i(r, {
    type: "line",
    data: {
      labels: t.labels,
      datasets: e
    },
    options: {
      responsive: !0,
      plugins: {
        legend: {
          position: "top"
        },
        tooltip: {
          mode: "index",
          intersect: !1
        }
      },
      interaction: {
        mode: "nearest",
        axis: "x",
        intersect: !1
      },
      scales: {
        y: {
          beginAtZero: !0
        }
      }
    }
  }, o), r.chart;
}
export {
  l as BarChart,
  h as LineChart,
  s as theme
};
