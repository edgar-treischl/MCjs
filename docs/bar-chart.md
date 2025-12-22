# BarChart Example

<div class="chart-container">
  <canvas id="barChart"></canvas>
</div>

<script type="module">
  import { BarChart } from "../dist/MCjs.es.js";

  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    series: [
      { name: "2025", values: [65, 59, 80, 81, 56] },
      { name: "2026", values: [28, 48, 40, 19, 86] }
    ]
  };

  const canvas = document.getElementById("barChart");
  BarChart(canvas, data);
</script>
