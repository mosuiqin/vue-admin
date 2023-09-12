<template>
  <el-aside width="auto">
    <el-menu
      :default-openeds="['1', '2', '3']"
      :default-active="$route.path"
      :collapse="isCollapse"
      width="200px"
      :active-color="'#409EFF'"
      router
    >
      <div class="menuTitle">
        <span v-show="!isCollapse">菜单收起</span>
        <img
          src="../assets/img/fanhui.png"
          alt=""
          class="iconImg menuTitle__Icon"
          @click="isCollapse = !isCollapse"
        />
      </div>
      <el-sub-menu :index="title.index" v-for="title in menuData" :key="title.index">
        <template #title>
          <el-icon>
            <img :src="getImageUrl(title.img)" alt="" class="iconImg" />
          </el-icon>
          <span>{{ title.name }}</span>
        </template>
        <el-menu-item
          :index="item.index"
          v-for="item in title.children"
          :key="item.index"
          @click="handleClick(item)"
          :class="[activeItem === item.index ? 'iconImg__active' : '']"
        >
          <el-icon>
            <img
              :src="getImageUrl(activeItem === item.index ? item.activeImg : item.img)"
              alt=""
              class="iconImg"
            />
          </el-icon>
          <template #title>{{ item.name }}</template>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const isCollapse = ref(false)
const activeItem = ref('1-1')
const routerTo = ref('itemOne')
const route = useRoute()
const menuData = [
  {
    index: '1',
    name: 'Navigator One',
    img: 'a-kejianxiangqing',
    activeImg: 'a-kejianxiangqing-1',
    children: [
      {
        index: '/one/itemOne',
        name: 'item one',
        img: 'kaoqinbanci',
        activeImg: 'kaoqinbanci-1',
        route: 'itemOne'
      },
      {
        index: '/one/itemTwo',
        name: 'item two',
        img: 'kaoqinrenyuan',
        activeImg: 'kaoqinrenyuan-1',
        route: 'itemTwo'
      },
      {
        index: '/one/itemThree',
        name: 'item three',
        img: 'kaoqintongji',
        activeImg: 'kaoqintongji-1',
        route: 'itemThree'
      },
      {
        index: '/one/itemOne',
        name: 'item four',
        img: 'keshihua',
        activeImg: 'keshihua-1',
        route: 'itemFour'
      }
    ]
  },
  {
    index: '2',
    name: 'Navigator Two',
    img: 'kucunguanli',
    activeImg: 'kucunguanli-1',
    children: [{ index: '2-1', name: 'item one', img: 'kaoqinbanci', activeImg: 'kaoqinbanci-1' }]
  },
  {
    index: '3',
    name: 'Navigator Three',
    img: 'lishijilu',
    activeImg: 'lishijilu-1',
    children: [
      { index: '3-1', name: 'item one', img: 'kaoqinbanci', activeImg: 'kaoqinbanci-1' },
      { index: '3-2', name: 'item two', img: 'kaoqinrenyuan', activeImg: 'kaoqinrenyuan-1' },
      { index: '3-3', name: 'item three', img: 'kaoqintongji', activeImg: 'kaoqintongji-1' },
      { index: '3-4', name: 'item four', img: 'keshihua', activeImg: 'keshihua-1' }
    ]
  }
]
const handleClick = (item) => {
  activeItem.value = item.index
  routerTo.value = item.route
}
const getImageUrl = (imageName) => {
  return new URL(`../assets/img/${imageName}.png`, import.meta.url).href
}
</script>

<style scoped lang="scss">
.el-aside {
  background-image: url('../assets/img/aside.jpeg');
  background-size: cover;
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
