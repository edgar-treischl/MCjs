<script setup>
import { ref, onMounted } from 'vue'

// Refs for canvas elements
const barCanvas = ref(null)
const lineCanvas = ref(null)

onMounted(async () => {
  if (typeof window === 'undefined') return // prevent SSR

  try {
    // 1️⃣ Dynamically import Chart.js (UMD/Esm safe)
    const ChartModule = await import('chart.js')
    const Chart = ChartModule.Chart || ChartModule.default

    if (!Chart) throw new Error('Chart.js not found')

    // 2️⃣ Register only the scales/controllers/elements needed
    Chart.register(
      ChartModule.BarController,
      ChartModule.LineController,
      ChartModule.BarElement,
      ChartModule.LineElement,
      ChartModule.PointElement,
      ChartModule.CategoryScale,
      ChartModule.LinearScale,
      ChartModule.Tooltip,
      ChartModule.Legend
    )

    // 3️⃣ Dynamically import your MCjs library
    const { BarChart, LineChart } = await import('../../../src/index.js') // adjust path if needed

    // 4️⃣ Example data
    const barData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      series: [
        { name: '2025', values: [65, 59, 80, 81, 56] },
        { name: '2026', values: [28, 48, 40, 19, 86] }
      ]
    }

    const lineData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
      series: [
        { name: '2025', values: [45, 79, 60, 91, 36] },
        { name: '2026', values: [38, 58, 70, 29, 66] }
      ]
    }

    // 5️⃣ Render charts
    BarChart(barCanvas.value, barData, Chart)
    LineChart(lineCanvas.value, lineData, Chart)

  } catch (err) {
    console.error('Failed to render charts:', err)
  }
})
</script>

<template>
  <div class="chart-container">
    <h2>Bar Chart</h2>
    <canvas ref="barCanvas" width="600" height="400"></canvas>
  </div>

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
