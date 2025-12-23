<script setup>
import { ref, onMounted } from 'vue'
import { LineChart } from '../../src/index.js'  // Import from MCjs public API

// Canvas reference
const canvasRef = ref(null)

onMounted(() => {
  if (typeof window === 'undefined') return // prevent SSR

  // Example data
  const lineData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    series: [
      { name: '2025', values: [45, 79, 60, 91, 36] },
      { name: '2026', values: [38, 58, 70, 29, 66] }
    ]
  }

  // Render chart
  LineChart(canvasRef.value, lineData)
})
</script>

<template>
  <div class="chart-container">
    <h2>Line Chart</h2>
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
