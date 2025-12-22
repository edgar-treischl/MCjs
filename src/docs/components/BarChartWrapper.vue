<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const canvas = ref(null)

onMounted(async () => {
  if (typeof window !== "undefined") {
    try {
      // Import your chart library using alias defined in vite.config.js
      const { BarChart } = await import('@mcjs/src/index.js')
      
      const data = {
        labels: ["January", "February", "March", "April", "May"],
        series: [
          { name: "Sales 2025", values: [65, 59, 80, 81, 56] },
          { name: "Sales 2026", values: [28, 48, 40, 19, 86] }
        ]
      }

      BarChart(canvas.value, data)
    } catch (err) {
      console.error("Failed to load BarChart:", err)
    }
  }
})
</script>

<template>
  <div class="chart-container" style="max-width:600px; margin:20px 0;">
    <!-- :key ensures canvas remounts on SPA navigation -->
    <canvas :key="route.path" ref="canvas" width="600" height="400" />
  </div>
</template>
