<template>
  <el-container class="main">
    <el-header>Header</el-header>
    <el-container>
      <asideView />
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import asideView from './asideView.vue'
</script>

<style scoped lang="scss">
.el-container {
  width: 100%;
  height: 100%;
}
.el-header {
  background-image: url('../assets/img/top.jpg');
  height: 40px;
}
.el-aside {
  background-image: url('../assets/img/aside.jpeg');
  background-size: cover;
}

.el-main {
  background-image: url('../assets/img/main.jpeg');
  background-size: cover;
  width: 100%;
  position: relative;
  overflow: hidden;
}
::v-deep(.el-menu) {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(20, 123, 51);
}
.el-menu-item {
  background-color: rgba(114, 93, 154, 0.2);
  height: 40px;
  color: rgb(27, 171, 70);
}
::v-deep(.el-sub-menu__title) {
  color: rgb(27, 171, 70);
}
.iconImg {
  width: 20px;
  height: 20px;
  &__active {
    color: red;
  }
}

.menuTitle {
  height: 30px;
  background-color: rgba(162, 75, 234, 0.8);
  font-size: 14px;
  text-indent: 10px;
  line-height: 30px;
  color: #000;
  &__Icon {
    position: absolute;
    right: 0;
    top: 5px;
  }
}
</style>
