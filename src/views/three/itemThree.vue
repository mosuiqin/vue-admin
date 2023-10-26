<template>
  <div class="container">
    <div class="device">
      <div class="device__item">111</div>
      <div class="device__item">111</div>
      <div class="device__item">111</div>
      <div class="device__item">111</div>
    </div>
  </div>
</template>

<script setup></script>

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
</style>
