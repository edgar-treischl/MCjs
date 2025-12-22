<div class="chart-container" style="max-width:600px; margin:20px 0;">
  <canvas id="lineChart" width="600" height="400"></canvas>
</div>

<script type="module">
if (typeof window !== "undefined") {
  import("../src/index.js").then(({ LineChart }) => {
    const canvas = document.getElementById("lineChart");
    const data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      series: [
        { name: "Sales 2025", values: [65, 59, 80, 81, 56] },
        { name: "Sales 2026", values: [28, 48, 40, 19, 86] }
      ]
    };
    LineChart(canvas, data);
  });
}
</script>
