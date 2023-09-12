<template>
  <div class="container">item one</div>
</template>

<script setup>
import {  getAdress, postOrder } from '../../api/getData'
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

getAdress().then((res) => {
  console.log(res.data)
})

const orderData = {}
postOrder(orderData).then((res) => {
  console.log(res.data)
})
</script>

<style scoped lang="scss"></style>
