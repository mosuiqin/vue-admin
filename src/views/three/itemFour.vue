<template>
  <div class="modelBtn">
    <div class="btn" @click="handlemodel(modelName[0])">坦克</div>
    <div class="btn" @click="handlemodel(modelName[1])">舰艇</div>
    <div class="btn" @click="handlemodel(modelName[2])">通信车</div>
  </div>
  <div class="Btn Btn__add btn" @click="handlemodelNumAdd()">前进</div>
  <div class="Btn Btn__del btn" @click="handlemodelNumDel()">后退</div>
  <div class="container" ref="screenDom"></div>
  <div class="bcImg"></div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
// import { initThree, loadModel } from '../../utils/initThree'
import { ThreeModel } from '../../utils/initThree'
let screenDom = ref(null)
let threeLoad = reactive({})
const modelName = ['tank', 'ship', 'csc']
const modelNum = ref(0)
onMounted(() => {
  // scene = initThree(screenDom)
  threeLoad = new ThreeModel(screenDom)
  threeLoad.loadModel(modelName[0])
  // loadModel(modelName[0], scene)
})
const handlemodel = (blo) => {
  // loadModel(blo, scene)
  threeLoad.loadModel(blo)
}
const handlemodelNumAdd = () => {
  modelNum.value += 1
  if (modelNum.value >= modelName.length) {
    modelNum.value = 0
  }
  handlemodel(modelName[modelNum.value])
}
const handlemodelNumDel = () => {
  modelNum.value -= 1
  if (modelNum.value < 0) {
    modelNum.value = modelName.length - 1
  }
  handlemodel(modelName[modelNum.value])
}
// onBeforeUnmount(() => {
//   try {
//     scene.clear()
//     renderer.dispose()
//     renderer.forceContextLoss()
//     renderer.content = null
//     cancelAnimationFrame(animationID) // 去除animationFrame
//     let gl = renderer.domElement.getContext('webgl')
//     gl && gl.getExtension('WEBGL_lose_context').loseContext()
//   } catch (e) {
//     console.log(e)
//   }
// })
</script>

<style scoped lang="scss">
.container {
  height: 600px;
  position: relative;
  z-index: 9;
}
.bcImg {
  width: 883px;
  height: 322px;
  background-image: url('../../assets/img/组_1_1.png');
  background-size: 100% 100%;
  position: absolute;
  bottom: 140px;
}
</style>
