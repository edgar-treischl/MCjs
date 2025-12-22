import { Chart as l, BarController as a, LineController as c, BarElement as d, LineElement as p, PointElement as u, CategoryScale as h, LinearScale as b, Tooltip as C, Legend as g } from "chart.js";
l.register(
  a,
  c,
  d,
  p,
  u,
  h,
  b,
  C,
  g
);
function n(e, r) {
  return new l(e, r);
}
const s = {
  colors: [
    "#36A2EB",
    "#FF6384",
    "#4BC0C0",
    "#FFCE56"
  ],
  borderWidth: 1
};
function i(e, r) {
  return e.map((t, o) => ({
    label: t.name,
    data: t.values,
    backgroundColor: r.colors[o % r.colors.length],
    borderColor: r.colors[o % r.colors.length],
    borderWidth: r.borderWidth
  }));
}
function m(e, r) {
  e.chart && e.chart.destroy();
  const t = i(r.series, s);
  return e.chart = n(e, {
    type: "bar",
    data: {
      labels: r.labels,
      datasets: t
    },
    options: {
      responsive: !0,
      scales: { y: { beginAtZero: !0 } }
    }
  }), e.chart;
}
function y(e, r) {
  e.chart && e.chart.destroy();
  const t = i(r.series, s);
  return e.chart = n(e, {
    type: "line",
    data: {
      labels: r.labels,
      datasets: t
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
  m as BarChart,
  y as LineChart,
  s as theme
};
