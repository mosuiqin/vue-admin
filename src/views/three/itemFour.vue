<template>
  <div class="container" ref="screenDom"></div>
</template>

<script setup>
import * as THREE from 'three'
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { onMounted, ref } from 'vue'

let screenDom = ref(null)

onMounted(() => {
  // 1.创建场景
  const scene = new THREE.Scene()

  // 2.创建透视投影相机
  const camera = new THREE.PerspectiveCamera(
    50,
    screenDom.value.clientWidth / screenDom.value.clientHeight,
    0.1,
    1000
  )
  // 设置相机位置
  //   camera.position.set(5, 10, 10)

  // 3.创建WebGLRenderer渲染器
  const renderer = new THREE.WebGLRenderer()
  // 通过setSize()方法设置渲染的长宽
  renderer.setSize(screenDom.value.clientWidth, screenDom.value.clientHeight)
  // 设置渲染位置
  screenDom.value.appendChild(renderer.domElement)

  const geometry = new THREE.BoxGeometry(1, 1, 1)
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
  const cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  camera.position.z = 5

  function animate() {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    renderer.render(scene, camera)
  }

  animate()
})
</script>

<style scoped lang="scss">
.cesiumContainer {
  height: 928px;
  background-image: url('../../assets/img/dai_top2.jpg');
  background-size: 100% 100%;
}
.container {
  height: 600px;
}
</style>
