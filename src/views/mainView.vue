<template>
  <el-main>
    <router-view></router-view>
  </el-main>
</template>

<script setup>
import { getInfo } from '../api/getData'
getInfo().then((res) => {
  console.log(res)
})
</script>

<style scoped lang="scss">
.el-main {
  background-image: url('../assets/img/main.jpeg');
  background-size: cover;
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
