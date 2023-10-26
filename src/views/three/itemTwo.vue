<template>
  <div class="container">
    <div class="modelBtn">
      <div class="btn" @click="handlemodel(modelName[0])">坦克</div>
      <div class="btn" @click="handlemodel(modelName[1])">舰艇</div>
      <div class="btn" @click="handlemodel(modelName[2])">通信车</div>
    </div>
    <div class="Btn Btn__add btn" @click="handlemodelNumAdd()">前进</div>
    <div class="Btn Btn__del btn" @click="handlemodelNumDel()">后退</div>
    <div id="cesiumContainer"></div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { initLoad, loadModel } from '../../utils/initLoad'

let viewer = reactive({})
const modelName = ['tank', 'ship', 'csc']
const modelNum = ref(0)
onMounted(() => {
  viewer = initLoad()
  loadModel('tank', viewer)
})
const handlemodel = (blo) => {
  loadModel(blo, viewer)
}
const handlemodelNumAdd = () => {
  modelNum.value += 1
  if (modelNum.value >= modelName.length) {
    modelNum.value = 0
  }
  handlemodel(modelName[modelNum.value], viewer)
}
const handlemodelNumDel = () => {
  modelNum.value -= 1
  if (modelNum.value < 0) {
    modelNum.value = modelName.length - 1
  }
  handlemodel(modelName[modelNum.value], viewer)
}
</script>

<style scoped lang="scss">
#cesiumContainer {
  height: 928px;
  background-image: url('../../assets/img/dai_top2.jpg');
  background-size: 100% 100%;
}
.modelBtn {
  display: flex;
}
.Btn {
  position: absolute;
  top: 50%;
  &__del {
    right: 0;
  }
}
.btn {
  border: 1px solid gray;
  margin-right: 10px;
  padding: 6px;
  border-radius: 4px;
}
</style>
