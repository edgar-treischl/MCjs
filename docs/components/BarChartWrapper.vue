<script setup>
import { ref, onMounted } from 'vue'
import { BarChart } from '../../src/index.js'  // Import from MCjs public API

// Canvas reference
const canvasRef = ref(null)

onMounted(() => {
  if (typeof window === 'undefined') return // prevent SSR

  // Example data
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    series: [
      { name: '2025', values: [65, 59, 80, 81, 56] },
      { name: '2026', values: [28, 48, 40, 19, 86] }
    ]
  }

  // Render chart
  BarChart(canvasRef.value, barData, {
    plugins: { legend: { position: 'bottom' } }
  })

})
</script>

<template>
  <div class="chart-container">
    <h2>Bar Chart</h2>
    <canvas ref="canvasRef" width="600" height="400"></canvas>
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
