<script setup>
import { ref, onMounted } from 'vue'

const canvas = ref(null)

onMounted(async () => {
  if (!canvas.value || typeof window === 'undefined') return

  try {
    // 1️⃣ Dynamically import Chart.js
    const ChartModule = await import('chart.js')
    const Chart = ChartModule.Chart || ChartModule.default

    if (!Chart) throw new Error("Chart.js not found")

    // 2️⃣ Dynamically import your library
    const { BarChart } = await import('../../../src/index.js') // adjust path if needed

    const data = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      series: [
        { name: "2025", values: [65, 59, 80, 81, 56] },
        { name: "2026", values: [28, 48, 40, 19, 86] }
      ]
    }

    // 3️⃣ Pass the Chart constructor explicitly
    BarChart(canvas.value, data, Chart)
  } catch (err) {
    console.error("Failed to render BarChart:", err)
  }
})
</script>

<template>
  <div class="chart-container" style="max-width:600px; margin:20px 0;">
    <canvas ref="canvas" width="600" height="400"></canvas>
  </div>
</template>
