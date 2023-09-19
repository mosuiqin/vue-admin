<template>
  <div class="content__wrapper">
    {{ lists }}
    <button @click="handleAdd(data, lists)">新增</button>
    <button @click="handleSubmit(data, lists, config)">确认</button>
    <el-form :model="formInput" class="content__item" @submit.native.prevent>
      <div v-for="(items, index) in data" :key="index" class="content__item">
        <el-form-item :label="i" v-for="(item, i) in items" :key="i" class="content__param">
          <el-input v-model="data[index][i]" class="content__input"></el-input>
        </el-form-item>
        <button class="content__dele" v-if="index > 0" @click="handleDele(data, index)">
          删除
        </button>
      </div>
    </el-form>
    <!-- <div class="content__item" v-for="(n, indexn) in config" :key="indexn">
      <div class="content__param" v-for="(param, index) in paramLists[lists]" :key="index">
        <div class="content__word">{{ param }}:</div>
        <el-input class="content__input"></el-input>
      </div>
      <button class="content__dele" v-if="indexn > 0" @click="handleDele(config, indexn)">
        删除
      </button>
    </div> -->
  </div>
</template>

<script setup>
import { ref } from 'vue'
const props = defineProps(['lists', 'config'])
const formInput = ref([])
// const paramLists = {
//   类型1: ['ip', '端口', '备注'],
//   类型2: ['ip', '端口', '备注'],
//   类型3: ['ip', '端口'],
//   类型4: ['占位符', '停车位']
// }
const configNew = {
  类型1: { ip: '', 端口: '', 备注: '' },
  类型2: { ip: '', 端口: '', 备注: '' },
  类型3: { ip: '', 端口: '' },
  类型4: { 占位符: '', 停车位: '' }
}

const getConfig = (type) => {
  return { ...configNew[type] }
}
// 新增
const handleAdd = (item, lists) => {
  item.push(getConfig(lists))
}
// 删除
const handleDele = (item, index) => {
  item.splice(index, 1)
}

// 初始化类型数据
const data = ref([])
data.value.push(getConfig(props.lists))

// 提交数据
const handleSubmit = (item, lists, config) => {
  const suubmitData = {
    name: config,
    type: lists,
    data: item
  }
  console.log(suubmitData)
}
</script>

<style scoped>
.content__item {
  display: flex;
  flex-wrap: wrap;
}
.content__param {
  display: flex;
}
::v-deep(.el-form-item__label) {
  color: black;
}
.content__input {
  width: 100px;
}
</style>
>
