<template>
  <div class="container" @click.right="handleClick">
    item two
    <div class="wrapper" id="wrapper" v-show="isShow"></div>
    <div class="main itembor">
      <div class="ttile">wrapper</div>
      <div class="item itembor">one</div>
      <div class="item itembor">two</div>
      <div class="item itembor">three</div>
      <div class="item itembor">four</div>
      <div class="itembor f1 fbox"></div>
      <div class="itembor f2 fbox"></div>
    </div>

    <div class="verTest">
      <div class="verTest__item">日照香炉生紫烟</div>
      <div class="verTest__item">遥看瀑布挂前川</div>
      <div class="verTest__item">飞流直下三千尺</div>
      <div class="verTest__item">疑是银河落九天</div>
    </div>
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
document.addEventListener('mousemove', (e) => {
  if (e.target.classList.contains('itembor') && !e.target.classList.contains('__active')) {
    document.querySelectorAll('.itembor.__active').forEach((item) => {
      item.classList.remove('__active')
    })
    if (e.target.classList.contains('fbox')) {
      console.log(e.target.classList)
      document.querySelectorAll('.fbox').forEach((item) => {
        item.classList.add('__active')
      })
    } else {
      e.target.classList.add('__active')
    }
  } else if (!e.target.classList.contains('itembor')) {
    document.querySelectorAll('.itembor.__active').forEach((item) => {
      item.classList.remove('__active')
    })
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
.main {
  position: absolute;
  top: 10px;
  left: 20px;
  margin: 10px;
  padding: 20px;
  border: 1px solid red;
}
.main {
  border-width: 2px;
}
.item {
  margin: 10px;
  padding: 10px;
  border: 1px solid blue;
}
.itembor {
  border-width: 1px;
}

.f1 {
  width: 80px;
  height: 40px;
  border: 1px solid rgb(10, 93, 36);
  border-bottom: none;
}

.f2 {
  width: 120px;
  height: 40px;
  border: 1px solid rgb(5, 108, 23);
  border-top: none;
  position: relative;
}
.f2::before {
  content: '';
  border: inherit;
  position: absolute;
  top: 0;
  right: 0;
  // height: 20x;
  width: 38px;
}
.__active {
  border-width: 3px;
  &.f2::before {
    width: 35px;
  }
}
.verTest {
  position: absolute;
  top: 10px;
  left: 200px;
  display: flex;
  // align-items: center;
  // justify-items: center;
}
.verTest__item {
  writing-mode: vertical-rl;
  border: 1px solid red;
  padding: 2px;
  width: 40px;
  height: 200px;
  text-align: center;
  line-height: 40px;
}
</style>
