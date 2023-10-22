<template>
  <div class="container">
    <div id="cesiumContainer"></div>
  </div>
</template>

<script setup>
window.CESIUM_BASE_URL = '/public/Cesium/'
import { onMounted, ref } from 'vue'
import { Terrain, Viewer, Cartesian3, Math as CesiumMath, Color } from 'cesium'
import 'cesium/Build/Cesium/Widgets/widgets.css'

const viewer = ref(null)
onMounted(() => {
  viewer.value = new Viewer('cesiumContainer', {
    terrain: Terrain.fromWorldTerrain()
  })

  viewer.value.camera.flyTo({
    destination: Cartesian3.fromDegrees(-122.4175, 37.655, 400),
    orientation: {
      heading: CesiumMath.toRadians(0.0),
      pitch: CesiumMath.toRadians(-15.0)
    }
  })

  // // Fly the camera to San Francisco at the given longitude, latitude, and height.
  // viewer.value.camera.flyTo({
  //   destination: Cesium.Cartesian3.fromDegrees(118.4175, 30.655, 400),
  //   orientation: {
  //     heading: Cesium.Math.toRadians(0.0),
  //     pitch: Cesium.Math.toRadians(-15.0)
  //   }
  // })
  viewer.value.entities.add({
    name: 'Red box with black outline',
    position: Cartesian3.fromDegrees(-107.0, 40.0, 300000.0),
    box: {
      dimensions: new Cartesian3(400000.0, 300000.0, 500000.0),
      material: Color.RED.withAlpha(0.5),
      outline: true,
      outlineColor: Color.BLACK
    }
  })

  // viewer.value.zoomTo(viewer.value.entities)
})
</script>

<style scoped lang="scss">
.cesiumContainer {
  height: 928px;
}
</style>
