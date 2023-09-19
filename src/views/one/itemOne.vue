<template>
  <div class="container">
    <div class="title">item one</div>
    {{ shopInfo }}
    <contentParam
      :list="contentList1"
      :config="config"
      v-for="(config, index) in contentConfig1"
      :key="index"
    ></contentParam>

    <div class="title">item two</div>
    <contentParam
      :list="contentList2"
      :config="config"
      v-for="(config, index) in contentConfig2"
      :key="index"
    ></contentParam>
  </div>
</template>

<script setup>
import { getAdress, postOrder, getShopList } from '../../api/getData'
import { onMounted, reactive, ref } from 'vue'
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

// const orderData = { name: '11' }
// postOrder(orderData).then((res) => {
//   console.log(res.data)
// })
const contentConfig1 = reactive([
  {
    name: 'one',
    checkLists: ['类型1']
  },
  {
    name: 'two',
    checkLists: ['类型1']
  },
  {
    name: 'three',
    checkLists: ['类型1']
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

const content = [
  {
    name: 'one',
    类型1: [
      { index: 0, ip: '10.10.10.1', 端口: '8080', 备注: '11111' },
      { index: 0, ip: '10.10.10.1', 端口: '8080', 备注: '11111' }
    ],
    类型2: [{ index: 0, ip: '190.10.10.1', 端口: '5050', 备注: '2221' }]
  },
  {
    name: 'two',
    类型2: [{ index: 0, ip: '190.10.10.1', 端口: '5050', 备注: '2221' }]
  }
]

const contentObj = content.reduce((prev, val) => {
  const { name, ...typeList } = val

  return {
    ...prev,
    [name]: typeList
  }
}, {})

for (const item of contentConfig1) {
  const targetObj = contentObj[item.name]
  if (targetObj) {
    item.checkLists = Object.keys(targetObj)
    for (const target of Object.keys(targetObj)) {
      item[target] = targetObj[target]
    }
  }
}

console.log(contentConfig1)

const shopList = ref([])
const shopInfo = ref([
  {
    name: '沃尔玛',
    sales: 0
  },
  { name: '山姆会员商店', sales: 0 }
])

// "data": [
//     {
//       "_id": "1",
//       "name": "沃尔玛",
//       "imgUrl": "http://www.dell-lee.com/imgs/vue3/near.png",
//       "sales": 10000,
//       "expressLimit": 0,
//       "expressPrice": 5,
//       "slogan": "VIP尊享满89元减4元运费券"
//     },
//     {
//       "_id": "2",
//       "name": "山姆会员商店",
//       "imgUrl": "http://www.dell-lee.com/imgs/vue3/near.png",
//       "sales": 2000,
//       "expressLimit": 0,
//       "expressPrice": 5,
//       "slogan": "联合利华洗护满10减5"
//     }
//   ],

onMounted(() => {
  // getShopList().then((res) => {
  //   shopList.value = res.data.data
  //   shopInfo.value.forEach((e, index) => {
  //     // shopInfo.value[index].push(shopList.value[index])
  //     // console.log(e)
  //     // console.log(shopList.value[index])
  //   })
  // })
})
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
