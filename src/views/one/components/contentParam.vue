<template>
  <div class="conent">
    <div class="content__title">{{ config.name }}</div>
    <el-checkbox-group v-model="config.checkLists">
      <el-checkbox
        :label="list"
        v-for="(list, index) in list"
        :key="index"
        @click="handleCheck(config)"
        >{{ list }}</el-checkbox
      >
    </el-checkbox-group>
    <inputParams
      :lists="check"
      :config="config.name"
      v-for="(check, indexChe) in config.checkLists"
      :key="indexChe"
    ></inputParams>
  </div>
</template>

<script setup>
import inputParams from './inputParams.vue'
const props = defineProps(['config', 'list'])
const handleCheck = (item) => {
  console.log(item)
}
</script>

<style scoped lang="scss">
.conent {
  background-color: rgb(223, 146, 146);
  margin: 10px;
  padding: 10px;
  text-indent: 20px;
}
</style>
