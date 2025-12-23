<script setup>
import BarChartWrapper from '/components/BarChartWrapper.vue'
</script>

# MCjs Charts Example

```js
BarChart(customBarCanvas.value, barData, {
    plugins: { legend: { position: 'bottom' } }
  })
```


<ClientOnly>
  <BarChartWrapper />
</ClientOnly>
