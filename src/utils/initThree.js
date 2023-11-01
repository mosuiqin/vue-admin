import * as THREE from 'three'
import {
  OrbitControls
} from 'three/examples/jsm/controls/OrbitControls'
import {
  GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader'
import {
  ref
} from 'vue'
const model = ref()
export const initThree = (screenDom) => {
  // 1.创建场景
  const scene = new THREE.Scene()
  // 2.创建透视投影相机
  const camera = new THREE.PerspectiveCamera(
    25,
    screenDom.value.clientWidth / screenDom.value.clientHeight,
    0.1,
    1000
  )

  camera.position.set(-4, 3, 2)
  // camera.lookAt(0, 0, 0)
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  })
  renderer.setSize(screenDom.value.clientWidth, screenDom.value.clientHeight)
  renderer.setClearColor(0x000000, 0)
  screenDom.value.appendChild(renderer.domElement)

  // 添加灯光
  const light1 = new THREE.DirectionalLight(0xffffff, 0.7)
  light1.position.set(0, 0, 10)
  scene.add(light1)
  const light2 = new THREE.DirectionalLight(0xffffff, 0.7)
  light2.position.set(0, 0, -10)
  scene.add(light2)
  const light3 = new THREE.DirectionalLight(0xffffff, 0.7)
  light3.position.set(10, 0, 0)
  scene.add(light3)
  const light4 = new THREE.DirectionalLight(0xffffff, 0.7)
  light4.position.set(-10, 0, 0)
  scene.add(light4)
  const light5 = new THREE.DirectionalLight(0xffffff, 0.7)
  light5.position.set(0, 10, 0)
  scene.add(light5)
  const light6 = new THREE.DirectionalLight(0xffffff, 0.3)
  light6.position.set(5, 10, 0)
  scene.add(light6)
  const light7 = new THREE.DirectionalLight(0xffffff, 0.3)
  light7.position.set(0, 10, 5)
  scene.add(light7)
  const light8 = new THREE.DirectionalLight(0xffffff, 0.3)
  light8.position.set(0, 10, -5)
  scene.add(light8)
  const light9 = new THREE.DirectionalLight(0xffffff, 0.3)
  light9.position.set(-5, 10, 0)
  scene.add(light9)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.update()


  let T0 = new Date()
  const render = () => {
    let T1 = new Date(); //本次时间
    let t = T1 - T0; //时间差
    T0 = T1; //把本次时间赋值给上次时间
    renderer.render(scene, camera) // 渲染场景
    if (model.value) {
      model.value.rotateY(0.0005 * t)
    }
    requestAnimationFrame(render) // 循环渲染

  }

  setTimeout(render(), 50);

  window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
  })
  console.log(scene.children)
  return scene
}

export const loadModel = (blo, scene) => {
  deleteObject(scene)
  const loader = new GLTFLoader()
  loader.load(`/model/${blo}.gltf`, function (gltf) {
    model.value = gltf.scene
    console.log(model.value);
    scene.add(gltf.scene)
  })
}

export const deleteObject = (scene) => {
  scene.children.forEach((e) => {
    console.log(e.type)
    if (e.type === 'Group') {
      const group = e
      group.traverse(function (obj) {
        if (obj.type === 'Mesh') {
          obj.geometry.dispose()
          obj.material.dispose()
        }
      })
      // 删除场景对象scene的子对象group
      scene.remove(group)
    }
  })
}

export const initThree2 = (screenDom) => {
  // 1.创建场景
  const scene = new THREE.Scene()
  // 2.创建透视投影相机
  const camera = new THREE.PerspectiveCamera(
    25,
    screenDom.value.clientWidth / screenDom.value.clientHeight,
    0.1,
    1000
  )

  camera.position.set(-4, 3, 2)
  camera.lookAt(0, 0, 0)
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  })
  renderer.setSize(screenDom.value.clientWidth, screenDom.value.clientHeight)
  renderer.setClearColor(0x000000, 0)
  screenDom.value.appendChild(renderer.domElement)

  //   添加立方体
  const cubeGeometry = new THREE.BoxGeometry(1, 1, 1)
  const cubeMaterial = new THREE.MeshBasicMaterial({
    color: 0xff0000
    // wireframe: false
  })
  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
  scene.add(cube)

  //   灯光
  const spotLight = new THREE.SpotLight(0xffffff)
  spotLight.position.set(-10, 10, 90)
  scene.add(spotLight)
  const render = () => {
    renderer.render(scene, camera) // 渲染场景
    requestAnimationFrame(render) // 循环渲染
  }

  render()
  console.log(scene.children)
  return scene
}