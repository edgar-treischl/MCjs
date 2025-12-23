<script setup>
import { ref, onMounted } from 'vue'

// Canvas ref
const barCanvas = ref(null)

onMounted(async () => {
  if (typeof window === 'undefined') return // prevent SSR

  try {
    // 1️⃣ Dynamically import Chart.js
    const ChartModule = await import('chart.js')
    const Chart = ChartModule.Chart || ChartModule.default

    if (!Chart) throw new Error('Chart.js not found')

    // 2️⃣ Register required components
    Chart.register(
      ChartModule.BarController,
      ChartModule.BarElement,
      ChartModule.CategoryScale,
      ChartModule.LinearScale,
      ChartModule.Tooltip,
      ChartModule.Legend
    )

    // 3️⃣ Import MCjs BarChart
    const { BarChart } = await import('../../src/index.js')

    // 4️⃣ Example data
    const barData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      series: [
        { name: '2025', values: [65, 59, 80, 81, 56] },
        { name: '2026', values: [28, 48, 40, 19, 86] }
      ]
    }

    // 5️⃣ Render chart
    BarChart(barCanvas.value, barData, Chart)

  } catch (err) {
    console.error('Failed to render bar chart:', err)
  }
})
</script>

<template>
  <div class="chart-container">
    <h2>Bar Chart</h2>
    <canvas ref="barCanvas" width="600" height="400"></canvas>
  </div>
</template>

<style>
.chart-container {
  max-width: 600px;
  margin: 20px auto;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
}
</style>
