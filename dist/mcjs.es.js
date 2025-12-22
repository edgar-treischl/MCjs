function s(t, e, r) {
  return new r(t, e);
}
const i = {
  colors: [
    "#36A2EB",
    "#FF6384",
    "#4BC0C0",
    "#FFCE56"
  ],
  borderWidth: 1
};
function l(t, e) {
  return t.map((r, o) => ({
    label: r.name,
    data: r.values,
    backgroundColor: e.colors[o % e.colors.length],
    borderColor: e.colors[o % e.colors.length],
    borderWidth: e.borderWidth
  }));
}
function n(t, e) {
  t.chart && t.chart.destroy();
  const r = l(e.series, i);
  return t.chart = s(t, {
    type: "bar",
    data: {
      labels: e.labels,
      datasets: r
    },
    options: {
      responsive: !0,
      scales: { y: { beginAtZero: !0 } }
    }
  }), t.chart;
}
function a(t, e) {
  t.chart && t.chart.destroy();
  const r = l(e.series, i);
  return t.chart = s(t, {
    type: "line",
    data: {
      labels: e.labels,
      datasets: r
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
  }), t.chart;
}
export {
  n as BarChart,
  a as LineChart,
  i as theme
};
