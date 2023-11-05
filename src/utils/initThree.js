import * as THREE from 'three'
import {
  OrbitControls
} from 'three/examples/jsm/controls/OrbitControls'
import {
  GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader'

export class ThreeModel {
  constructor(screenDom) {
    this.scene = null
    this.camera = null
    this.model = null
    this.initThree(screenDom)
  }
  initThree = (screenDom) => {
    // 1.创建场景
    // const scene = new THREE.Scene()
    this.scene = new THREE.Scene()
    // 2.创建透视投影相机
    this.camera = new THREE.PerspectiveCamera(
      25,
      screenDom.value.clientWidth / screenDom.value.clientHeight,
      0.1,
      1000
    )

    this.camera.position.set(-4, 3, 2)
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
    this.scene.add(light1)
    const light2 = new THREE.DirectionalLight(0xffffff, 0.7)
    light2.position.set(0, 0, -10)
    this.scene.add(light2)
    const light3 = new THREE.DirectionalLight(0xffffff, 0.7)
    light3.position.set(10, 0, 0)
    this.scene.add(light3)
    const light4 = new THREE.DirectionalLight(0xffffff, 0.7)
    light4.position.set(-10, 0, 0)
    this.scene.add(light4)
    const light5 = new THREE.DirectionalLight(0xffffff, 0.7)
    light5.position.set(0, 10, 0)
    this.scene.add(light5)
    const light6 = new THREE.DirectionalLight(0xffffff, 0.3)
    light6.position.set(5, 10, 0)
    this.scene.add(light6)
    const light7 = new THREE.DirectionalLight(0xffffff, 0.3)
    light7.position.set(0, 10, 5)
    this.scene.add(light7)
    const light8 = new THREE.DirectionalLight(0xffffff, 0.3)
    light8.position.set(0, 10, -5)
    this.scene.add(light8)
    const light9 = new THREE.DirectionalLight(0xffffff, 0.3)
    light9.position.set(-5, 10, 0)
    this.scene.add(light9)

    const controls = new OrbitControls(this.camera, renderer.domElement)
    controls.update()


    // let T0 = new Date()
    const render = () => {
      // let T1 = new Date(); //本次时间
      // let t = T1 - T0; //时间差
      // T0 = T1; //把本次时间赋值给上次时间
      renderer.render(this.scene, this.camera) // 渲染场景
      if (this.model) {
        this.model.rotateY(0.0005)
      }
      requestAnimationFrame(render) // 循环渲染

    }

    setTimeout(render(), 50);
    console.log(this.scene.children);

  }
  loadModel = (blo) => {
    this.deleteObject(this.scene)
    const loader = new GLTFLoader()
    loader.load(`/model/${blo}.gltf`, (gltf) => {
      this.model = gltf.scene
      const box = new THREE.Box3()
      const boundBox = box.expandByObject(this.model)
      const boxSize = boundBox.getSize(new THREE.Vector3())
      const maxAxis = Math.max(boxSize.x, boxSize.y, boxSize.z)
      const scaleFactor = 2 / maxAxis
      this.model.scale.set(scaleFactor, scaleFactor, scaleFactor)
      this.scene.add(gltf.scene)
    })
  }
  deleteObject = (scene) => {
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
}