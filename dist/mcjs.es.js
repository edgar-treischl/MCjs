import { Chart as o, BarController as p, BarElement as b, CategoryScale as s, LinearScale as n, Tooltip as i, Legend as a, LineController as h, LineElement as u, PointElement as g } from "chart.js";
const c = {
  colors: [
    "#36A2EB",
    "#FF6384",
    "#4BC0C0",
    "#FFCE56"
  ],
  borderWidth: 1
};
function d(e, r) {
  return e.map((t, l) => ({
    label: t.name,
    data: t.values,
    backgroundColor: r.colors[l % r.colors.length],
    borderColor: r.colors[l % r.colors.length],
    borderWidth: r.borderWidth
  }));
}
o.register(
  p,
  b,
  s,
  n,
  i,
  a
);
function f(e, r) {
  e.chart && e.chart.destroy();
  const t = d(r.series, c);
  return e.chart = new o(e, {
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
o.register(
  h,
  u,
  g,
  s,
  n,
  i,
  a
);
function m(e, r) {
  e.chart && e.chart.destroy();
  const t = d(r.series, c);
  return e.chart = new o(e, {
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
  f as BarChart,
  m as LineChart,
  c as theme
};
