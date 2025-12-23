<script setup>
import BarChartWrapper from '/components/BarChartWrapper.vue'
</script>

# Bar Chart



<ClientOnly>
  <BarChartWrapper />
</ClientOnly>


## Snippet


```js
<script setup>
import { ref, onMounted } from 'vue'
import { BarChart } from '@edgar-treischl/MCjs' 

const defaultBarCanvas = ref(null)
const customBarCanvas = ref(null)

onMounted(() => {
  if (typeof window === 'undefined') return

  const barData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    series: [
      { name: '2025', values: [65, 59, 80, 81, 56] },
      { name: '2026', values: [28, 48, 40, 19, 86] }
    ]
  }

  // 1️⃣ Default chart
  BarChart(defaultBarCanvas.value, barData)

  // 2️⃣ Custom legend position
  BarChart(customBarCanvas.value, barData, {
    plugins: { legend: { position: 'bottom' } }
  })

  // 3: Custom Labels
  BarChart(
    canvasRef.value,
    barData,
    {
      plugins: { legend: { position: 'right' } }
    },
    xLabel,
    yLabel
  )

})
</script>
```
