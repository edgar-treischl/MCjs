<script setup>
import { ref, onMounted } from 'vue'
import { BarChart } from '../../src/index.js'  // Import from MCjs public API

// Canvas references
const canvasRef1 = ref(null)
const canvasRef2 = ref(null)

// Code snippets as strings
const codeSnippet1 = `
BarChart(
  canvasRef1.value,
  barData1,
  { plugins: { legend: { position: 'right' } } },
  'Month',
  'Number of People'
)
`

// Copy to clipboard
const copyToClipboard = async (code) => {
  try {
    await navigator.clipboard.writeText(code)
    alert('Copied to clipboard!')
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}

onMounted(() => {
  if (typeof window === 'undefined') return // prevent SSR

  // Example data for first chart
  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    series: [
      { name: 'Male', values: [65, 59, 80, 81, 56] },
      { name: 'Female', values: [28, 48, 40, 19, 86] }
    ]
  }

  // Render first chart
  BarChart(
    canvasRef1.value,
    barData
  )

  // Render second chart
  BarChart(
    canvasRef2.value,
    barData,
    { plugins: { legend: { position: 'right' } } },
    'Day',
    'Number of Fruits'
  )
})


</script>

<template>
  <div class="chart-container">
    <h2>Simple Plot</h2>
    <p>All paramters as default.</p>
    <div class="code-block">
      <pre><code>{{ codeSnippet1 }}</code></pre>
      <button @click="copyToClipboard(codeSnippet1)">Copy</button>
    </div>
    <canvas ref="canvasRef1" width="600" height="400"></canvas>
    <h2>Labels and Legend position</h2>
    <canvas ref="canvasRef2" width="600" height="400"></canvas>
  </div>
</template>

<style>
.chart-container {
  max-width: 650px;
  margin: 20px auto;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
}

.code-block {
  position: relative;
  background: #f5f5f5;
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 10px;
}

.code-block pre {
  margin: 0;
  overflow-x: auto;
}

.code-block button {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 4px 8px;
  cursor: pointer;
}
</style>
