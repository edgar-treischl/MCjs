import { Chart as l, BarController as b, BarElement as h, CategoryScale as a, LinearScale as c, Tooltip as d, Legend as g, LineController as C, LineElement as y, PointElement as m } from "chart.js";
const p = {
  colors: [
    "#36A2EB",
    "#FF6384",
    "#4BC0C0",
    "#FFCE56"
  ],
  borderWidth: 1
};
function f(e, t) {
  return e.map((o, r) => ({
    label: o.name,
    data: o.values,
    backgroundColor: t.colors[r % t.colors.length],
    borderColor: t.colors[r % t.colors.length],
    borderWidth: t.borderWidth
  }));
}
l.register(
  b,
  h,
  a,
  c,
  d,
  g
);
function z(e, t, o = {}, r = "", n = "") {
  e.chart && e.chart.destroy();
  const u = f(t.series, p), s = {
    responsive: !0,
    layout: {
      padding: 10
    },
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#333",
          font: { size: 12 }
        }
      },
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.7)",
        titleColor: "#fff",
        bodyColor: "#fff"
      }
    },
    scales: {
      x: {
        grid: {
          display: !1
          // remove vertical grid lines
        },
        ticks: {
          color: "#333",
          font: { size: 12 }
        },
        title: {
          display: !!r,
          text: r,
          color: "#333",
          font: { size: 14, weight: "bold" }
        }
      },
      y: {
        beginAtZero: !0,
        grid: {
          color: "#e0e0e0",
          borderDash: [2, 2]
        },
        ticks: {
          color: "#333",
          font: { size: 12 }
        },
        title: {
          display: !!n,
          text: n,
          color: "#333",
          font: { size: 14, weight: "bold" }
        }
      }
    }
  }, i = { ...s, ...o };
  return o.plugins && (i.plugins = { ...s.plugins, ...o.plugins }), o.scales && (i.scales = { ...s.scales, ...o.scales }), e.chart = new l(e, {
    type: "bar",
    data: { labels: t.labels, datasets: u },
    options: i
  }), e.chart;
}
l.register(
  C,
  y,
  m,
  a,
  c,
  d,
  g
);
function B(e, t) {
  e.chart && e.chart.destroy();
  const o = f(t.series, p);
  return e.chart = new l(e, {
    type: "line",
    data: {
      labels: t.labels,
      datasets: o
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
  z as BarChart,
  B as LineChart,
  p as theme
};
