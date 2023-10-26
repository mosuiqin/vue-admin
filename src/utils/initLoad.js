window.CESIUM_BASE_URL = '/public/Cesium/'
import 'cesium/Build/Cesium/Widgets/widgets.css'
import * as Cesium from 'cesium'

export const initLoad = () => {
  const viewer = new Cesium.Viewer('cesiumContainer', {
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
  const scene = viewer.scene
  scene.skyBox.show = false
  scene.sun.show = false
  scene.moon.show = false
  scene.globe.show = false
  scene.skyAtmosphere.show = false
  scene.backgroundColor = new Cesium.Color(0.0, 0.0, 0.0, 0.0)
  // viewer.scene.screenSpaceCameraController.enableZoom = false
  viewer.scene.screenSpaceCameraController.enableTranslate = false

  return viewer
}

export const loadModel = (blo, viewer) => {
  viewer.entities.removeAll()
  const entity = viewer.entities.add({
    position: Cesium.Cartesian3.fromRadians(0, 0),
    orientation: Cesium.Transforms.headingPitchRollQuaternion(
      new Cesium.Cartesian3.fromDegrees(0, 0),
      new Cesium.HeadingPitchRoll(
        Cesium.Math.toRadians(30), //顺时针旋转的角度值
        Cesium.Math.toRadians(0),
        Cesium.Math.toRadians(0)
      )
    ),
    // orientation: Cesium.Quaternion.IDENTITY,

    model: {
      uri: `/model/${blo}.gltf`,
      scale: 1, //模型缩放比例
      // minimumPixelSize: 128, // 最小像素大小
      maximumScale: 20000, // 模型的最大比例尺大小。 minimumPixelSize的上限
      incrementallyLoadTextures: true, // 加载模型后纹理是否可以继续流入
      //   runAnimations: true, // 是否应启动模型中指定的glTF动画
      //   clampAnimations: true, // 指定glTF动画是否应在没有关键帧的持续时间内保持最后一个姿势
      eyeOffset: new Cesium.Cartesian3(0, 0, -10000), //设置模型的可见度
      disableDepthTestDistance: Number.POSITIVE_INFINITY,
      // 指定模型是否投射或接收来自光源的阴影 type:ShadowMode
      // DISABLED 对象不投射或接收阴影;ENABLED 对象投射并接收阴影;CAST_ONLY  对象仅投射阴影;RECEIVE_ONLY  对象仅接收阴影
      shadows: Cesium.ShadowMode.ENABLED,
      heightReference: Cesium.HeightReference.CLAMP_TO_GROUND //设置模型贴地,
    }
  })

  viewer.zoomTo(viewer.entities)
  //   viewer.trackedEntity = entity
}
