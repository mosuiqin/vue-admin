<template>
  <div class="container">
    <div id="cesiumContainer"></div>
  </div>
</template>

<script setup>
import * as Cesium from 'cesium'
import { onMounted, ref } from 'vue'

const viewer = ref()
onMounted(() => {
  viewer.value = new Cesium.Viewer('cesiumContainer', {
    terrain: Cesium.Terrain.fromWorldTerrain()
  })

  // Fly the camera to San Francisco at the given longitude, latitude, and height.
  viewer.value.camera.flyTo({
    destination: Cesium.Cartesian3.fromDegrees(118.4175, 30.655, 400),
    orientation: {
      heading: Cesium.Math.toRadians(0.0),
      pitch: Cesium.Math.toRadians(-15.0)
    }
  })
})
</script>

<style scoped lang="scss">
.cesiumContainer {
  height: 928px;
}
</style>
