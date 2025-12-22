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
  return r.map((e, o) => ({
    label: e.name,
    data: e.values,
    backgroundColor: t.colors[o % t.colors.length],
    borderColor: t.colors[o % t.colors.length],
    borderWidth: t.borderWidth
  }));
}
function a(r, t, e) {
  const o = e || window.Chart;
  if (!o) throw new Error("Chart.js not found. Make sure Chart.js is loaded.");
  return new o(r, t);
}
function l(r, t, e) {
  r.chart && r.chart.destroy();
  const o = n(t.series, s);
  return r.chart = a(r, {
    type: "bar",
    data: {
      labels: t.labels,
      datasets: o
    },
    options: {
      responsive: !0,
      scales: { y: { beginAtZero: !0 } }
    }
  }, e), r.chart;
}
function i(r, t, e) {
  return new e(r, t);
}
function c(r, t) {
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
  }), r.chart;
}
export {
  l as BarChart,
  c as LineChart,
  s as theme
};
