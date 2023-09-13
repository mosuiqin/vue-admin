<template>
  <div class="container">
    <div class="title">item one</div>
    <contentParam
      :list="contentList1"
      :config="config"
      v-for="(config, index) in contentConfig1"
      :key="index"
    ></contentParam>

    <div class="title">item two</div>
    <contentParam :list="contentList2" :config="config"       v-for="(config, index) in contentConfig2"
      :key="index"></contentParam>
  </div>
</template>

<script setup>
// import { getAdress, postOrder } from '../../api/getData'
import { ref } from 'vue'
import contentParam from './components/contentParam.vue'
// getInfo().then((res) => {
//   console.log(res)
// })
// const data = {
//   // username: '18633334444'
//   // password: '11'
// }
// regPost(data).then((res) => {
//   console.log(res)
// })

// getAdress().then((res) => {
//   console.log(res.data)
// })

// const orderData = {}
// postOrder(orderData).then((res) => {
//   console.log(res.data)
// })
const contentConfig1 = ref([
  {
    name: 'one',
    checkLists: ['类型1'],
    
    // 类型1: [{ index: 0, ip: '', 端口: '', 备注: '' }],
    // leixing2: [],
    // lex3: []
  },
  {
    name: 'two',
    checkLists: ['类型1', '类型2'],

    类型1: [
      { index: 0, ip: '', 端口: '', 备注: '' },
      { index: 1, ip: '', 端口: '', 备注: '' }
    ],
    类型2: [{ index: 0, ip: '', 端口: '', 备注: '' }]
  },
  {
    name: 'three',
    checkLists: ['类型3'],
    类型3: [{ index: 0, ip: '', 端口: '' }]
  }
])
const contentList1 = ['类型1', '类型2', '类型3']
const contentConfig2 = ref([
  {
    name: 'one',
    checkLists: ['类型1'],
    类型1: [{ index: 0, ip: '', 端口: '', 备注: '' }]
  },
  {
    name: 'two',
    checkLists: ['类型1', '类型2'],
    类型1: [{ index: 0, ip: '', 端口: '', 备注: '' }],
    类型2: [{ index: 0, ip: '', 端口: '', 备注: '' }]
  },
  {
    name: 'three',
    checkLists: ['类型4'],
    类型4: [{ index: 0, 占位符: '', 停车位: '' }]
  }
])
const contentList2 = ['类型1', '类型2', '类型4']
</script>

<style scoped lang="scss">
.conent {
  background-color: rgb(223, 146, 146);
  margin: 10px;
  text-indent: 20px;
}
.conteng__wrapper {
  display: flex;
  flex-wrap: wrap;
}
.content__content {
  display: flex;
}
.content__input {
  width: 100px;
}
</style>
