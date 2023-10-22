<template>
  <div class="container">
    <div id="cesiumContainer"></div>
  </div>
</template>

<script setup>
window.CESIUM_BASE_URL = '/public/Cesium/'
import 'cesium/Build/Cesium/Widgets/widgets.css'
import * as Cesium from 'cesium'
import { onMounted, reactive, ref } from 'vue'

let viewer = reactive()
onMounted(() => {
  viewer = new Cesium.Viewer('cesiumContainer', {
    // animation: false,
    // baseLayerPicker: false,
    // fullscreenButton: false, //是否显示全屏按钮
    // geocoder: false, //是否显示搜索按钮
    // timeline: false,
    // sceneModePicker: false,
    // navigationHelpButton: false,
    // infoBox: true,
    orderIndependentTranslucency: false,
    contextOptions: {
      webgl: {
        alpha: true
      }
    },
    baseLayerPicker: false, // 如果设置为false，将不会创建右上角图层按钮。
    geocoder: false, // 如果设置为false，将不会创建右上角查询(放大镜)按钮。
    navigationHelpButton: false, // 如果设置为false，则不会创建右上角帮助(问号)按钮。
    homeButton: false, // 如果设置为false，将不会创建右上角主页(房子)按钮。
    sceneModePicker: false, // 如果设置为false，将不会创建右上角投影方式控件(显示二三维切换按钮)。
    animation: false, // 如果设置为false，将不会创建左下角动画小部件。
    timeline: false, // 如果设置为false，则不会创建正下方时间轴小部件。
    fullscreenButton: false, // 如果设置为false，将不会创建右下角全屏按钮。
    scene3DOnly: true, // 为 true 时，每个几何实例将仅以3D渲染以节省GPU内存。
    shouldAnimate: false, // 默认true ，否则为 false 。此选项优先于设置 Viewer＃clockViewModel 。
    // ps. Viewer＃clockViewModel 是用于控制当前时间的时钟视图模型。我们这里用不到时钟，就把shouldAnimate设为false
    infoBox: false, // 是否显示点击要素之后显示的信息
    sceneMode: 3, // 初始场景模式 1 2D模式 2 2D循环模式 3 3D模式  Cesium.SceneMode
    requestRenderMode: false, // 启用请求渲染模式，不需要渲染，节约资源吧
    fullscreenElement: document.body // 全屏时渲染的HTML元素 暂时没发现用处，虽然我关闭了全屏按钮，但是键盘按F11 浏览器也还是会进入全屏
    // creditContainer: false
  })

  viewer.scene.skyBox.show = false
  viewer.scene.sun.show = false
  viewer.scene.moon.show = false
  viewer.scene.globe.show = false
  viewer.scene.skyAtmosphere.show = false
  viewer.scene.backgroundColor = new Cesium.Color(0.0, 0.0, 0.0, 0.0)
  const entity = viewer.entities.add({
    position: Cesium.Cartesian3.fromRadians(0, 0),
    model: {
      uri: '/model/tank.gltf'
    }
  })
  // const greenCylinder = viewer.entities.add({
  //   name: 'Green cylinder with black outline',
  //   position: Cesium.Cartesian3.fromDegrees(-100.0, 40.0, 200000.0),
  //   cylinder: {
  //     length: 400000.0,
  //     topRadius: 200000.0,
  //     bottomRadius: 200000.0,
  //     material: Cesium.Color.GREEN.withAlpha(0.5),
  //     outline: true,
  //     outlineColor: Cesium.Color.DARK_GREEN
  //   }
  // })

  viewer.zoomTo(viewer.entities)
})
</script>

<style scoped lang="scss">
#cesiumContainer {
  height: 928px;
  background-image: url('../../assets/img/dai_top2.jpg');
  background-size: 100% 100%;
}
</style>
