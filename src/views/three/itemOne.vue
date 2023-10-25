<template>
  <div class="container">
    <div class="item">
      <div class="device" v-for="n in deviceNum" :key="n" @click="handelAlert()">
        <div class="device__img"></div>
        <div class="device__content">
          <div class="device__content__name">1111</div>
          <el-button class="device__content__del" @click.stop="handelDel()">删除</el-button>
        </div>
        <div class="test">11111111</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const deviceNum = ref(5)
const handelDel = () => {
  deviceNum.value--
}
const handelAlert = () => {
  alert(11)
}
</script>

<style scoped lang="scss">
.container {
  position: relative;
}
.item {
  display: flex;
}
.device {
  border: 1px solid red;
  width: 180px;
  height: 120px;
  margin-right: 10px;
  position: relative;
  &__img {
    background-image: url('../../assets/img/a-kejianxiangqing-1.png');
    background-size: cover;
    width: 80px;
    height: 80px;
  }
  &__content {
    display: flex;
    &__name {
      flex: 1;
    }
  }
}
.test {
  width: 182px;
  height: 122px;
  background-color: rgba(164, 40, 40, 0.5);
  margin-right: 10px;
  display: none;
  position: absolute;
  top: 0;
}
.device:hover .test {
  display: block;
}
</style>
