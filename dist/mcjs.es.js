import { Chart as l, BarController as g, BarElement as b, CategoryScale as i, LinearScale as a, Tooltip as p, Legend as c, LineController as h, LineElement as f, PointElement as C } from "chart.js";
const u = {
  colors: [
    "#36A2EB",
    "#FF6384",
    "#4BC0C0",
    "#FFCE56"
  ],
  borderWidth: 1
};
function d(e, t) {
  return e.map((r, o) => ({
    label: r.name,
    data: r.values,
    backgroundColor: t.colors[o % t.colors.length],
    borderColor: t.colors[o % t.colors.length],
    borderWidth: t.borderWidth
  }));
}
l.register(
  g,
  b,
  i,
  a,
  p,
  c
);
function y(e, t, r = {}) {
  e.chart && e.chart.destroy();
  const o = d(t.series, u), n = {
    responsive: !0,
    scales: { y: { beginAtZero: !0 } },
    plugins: {
      legend: { position: "top" },
      tooltip: {}
    }
  }, s = { ...n, ...r };
  return r.plugins && (s.plugins = { ...n.plugins, ...r.plugins }), e.chart = new l(e, {
    type: "bar",
    data: { labels: t.labels, datasets: o },
    options: s
  }), e.chart;
}
l.register(
  h,
  f,
  C,
  i,
  a,
  p,
  c
);
function B(e, t) {
  e.chart && e.chart.destroy();
  const r = d(t.series, u);
  return e.chart = new l(e, {
    type: "line",
    data: {
      labels: t.labels,
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
  }), e.chart;
}
export {
  y as BarChart,
  B as LineChart,
  u as theme
};
