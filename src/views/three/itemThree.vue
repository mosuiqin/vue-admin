<template>
  <div class="container">
    <div class="device">
      <div class="device__item">111</div>
      <div class="device__item">111</div>
      <div class="device__item">111</div>
      <div class="device__item">111</div>
    </div>
    <div>
      <div
        v-for="(item, index) in checkboxList.type"
        :key="item"
        :class="[boxlists.type == item ? 'active' : '']"
        @click="swithIndex(item)"
      >
        {{ item }}
      </div>
      <el-select v-model="boxlists.type">
        <el-option v-for="item in checkboxList.type" :key="item" :label="item" :value="item" />
      </el-select>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'

const checkboxList = {
  type: ['111', '222', '333']
}
const boxlists = reactive({
  type: ''
})
const swithIndex = (item) => {
  boxlists.type = item
}
// watch(
//   () => boxlists.type,
//   () => {
//     activeIndex.value = boxlists.type
//   }
// )
</script>

<style scoped lang="scss">
#cesiumContainer {
  height: 928px;
  background-image: url('../../assets/img/dai_top2.jpg');
  background-size: 100% 100%;
}
.device {
  display: flex;
  justify-content: center;
  align-items: center;
  &__item {
    background-image: url('../../assets/img/aside.jpeg');
    background-size: cover;
    width: 50px;
    height: 50px;
  }
}
.active {
  color: red;
}
</style>
