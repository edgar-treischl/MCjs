# BarChart Example

This page demonstrates the `BarChart` component from MCjs.

<div class="chart-container" style="max-width:600px; margin:20px 0;">
  <canvas id="barChart"></canvas>
</div>

<script type="module">
if (typeof window !== "undefined") {
  // Dynamically import your library so SSR won't break
  import("./lib/index.js").then(({ BarChart }) => {
    const data = {
      labels: ["January", "February", "March", "April", "May"],
      series: [
        { name: "Sales 2025", values: [65, 59, 80, 81, 56] },
        { name: "Sales 2026", values: [28, 48, 40, 19, 86] }
      ]
    }

    const canvas = document.getElementById("barChart")
    BarChart(canvas, data)
  })
}
</script>


