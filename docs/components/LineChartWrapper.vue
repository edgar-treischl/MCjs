<script setup>
import { ref, onMounted } from 'vue'

// Canvas ref
const lineCanvas = ref(null)

onMounted(async () => {
  if (typeof window === 'undefined') return // prevent SSR

  try {
    // 1️⃣ Dynamically import Chart.js
    const ChartModule = await import('chart.js')
    const Chart = ChartModule.Chart || ChartModule.default

    if (!Chart) throw new Error('Chart.js not found')

    // 2️⃣ Register required components
    Chart.register(
      ChartModule.LineController,
      ChartModule.LineElement,
      ChartModule.PointElement,
      ChartModule.CategoryScale,
      ChartModule.LinearScale,
      ChartModule.Tooltip,
      ChartModule.Legend
    )

    // 3️⃣ Import MCjs LineChart
    const { LineChart } = await import('../../src/index.js')

    // 4️⃣ Example data
    const lineData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      series: [
        { name: '2025', values: [45, 79, 60, 91, 36] },
        { name: '2026', values: [38, 58, 70, 29, 66] }
      ]
    }

    // 5️⃣ Render chart
    LineChart(lineCanvas.value, lineData, Chart)

  } catch (err) {
    console.error('Failed to render line chart:', err)
  }
})
</script>

<template>
  <div class="chart-container">
    <h2>Line Chart</h2>
    <canvas ref="lineCanvas" width="600" height="400"></canvas>
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
