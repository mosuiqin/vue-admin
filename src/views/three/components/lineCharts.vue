<template>
  <div ref="mainDom" class="main" id="main"></div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import * as echarts from 'echarts'
const prop = defineProps(['data'])
const chartDom = ref()
const mainDom = ref(null)
const initCharts = (data, mainDom) => {
  chartDom.value = echarts.init(mainDom.value, 'light', { renderer: 'canvas' })

  chartDom.value.setOption({
    xAxis: {
      type: 'category',
      data: prop.data.x
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: prop.data.y,
        type: 'line'
      }
    ]
  })
}
let timer
function debounce(fn, delay) {
  if (timer) clearTimeout(timer)
  timer = setTimeout(() => {
    fn()
  }, delay)
}
onMounted(() => {
  initCharts(prop.data, mainDom)

  window.addEventListener('resize', function () {
    debounce(chartDom.value.resize, 300)
  })
})
</script>

<style scoped lang="scss">
.main {
  width: 800px;
  height: 400px;
}
</style>
