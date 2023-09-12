<template>
  <div class="container" @click.right="handleClick">
    item two
    <div class="wrapper" id="wrapper" v-show="isShow"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isShow = ref(false)

const handleClick = (e) => {
  const wrapper = document.getElementById('wrapper')
  isShow.value = true
  wrapper.style.top = e.offsetY + 'px'
  wrapper.style.left = e.offsetX + 'px'
}
document.addEventListener('click', (e) => {
  const wrapper = document.getElementById('wrapper')
  if (e.target !== wrapper) {
    isShow.value = false
  } else {
    console.log(11)
  }
})
</script>

<style scoped lang="scss">
.container {
  position: relative;
  width: 100%;
  height: 100%;
}
.wrapper {
  position: absolute;
  width: 50px;
  height: 80px;
  background-color: aqua;
}
</style>
