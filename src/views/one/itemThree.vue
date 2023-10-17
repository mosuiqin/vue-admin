<template>
  <div class="container">
    <el-container>
      <el-header class="topbar">
        <el-button>用户管理</el-button>
        <div class="topbar__left">
          <el-select v-model="selectdValue">
            <el-option
              :placeholder="selectValue[0]"
              v-for="item in value11"
              :label="`${item}M`"
              :value="item"
              :key="item"
            ></el-option>
          </el-select>
        </div>
      </el-header>
      <el-main>
        <el-table :data="tableData" style="width: 100%" max-height="800">
          <el-table-column type="index" width="50" />
          <el-table-column prop="date" sortable label="Date" width="100" />
          <el-table-column prop="name" label="Name" width="100" />
          <el-table-column prop="address" label="Address" width="300" />
          <el-table-column prop="list" label="list" />
          <el-table-column prop="date" sortable label="Date" width="100" />
          <el-table-column prop="name" label="Name" width="100" />
          <el-table-column prop="address" label="Address" width="300" />
          <el-table-column prop="list" label="list" />
          <el-table-column prop="date" sortable label="Date" width="100" />
          <el-table-column prop="name" label="Name" width="100" />
          <el-table-column prop="address" label="Address" width="300" />
          <el-table-column prop="list" label="list" />
          <el-table-column label="Operations" width="220" fixed="right">
            <template #default="scope">
              <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
              <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)"
                >Delete</el-button
              >
              <el-button size="small" @click="handleForbid(scope.$index, scope.row)"
                >forbid</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="pagenation">
          <el-button @click="handleHomepage">首页</el-button>
          <el-pagination
            class="elpagination"
            v-model:current-page="currentPage"
            v-model:page-size="pageSize"
            :background="background"
            :page-sizes="[20, 30, 40]"
            layout="sizes,prev, pager, next, jumper"
            :total="mockData.length"
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
          />
        </div>
        <div class="infoWraspper" v-show="showInfo">
          <div @click="showInfo = false">x</div>
          <div class="title" id="title"></div>
          <div class="content" id="content">
            <div class="title">用户名</div>
            <el-input :placeholder="infoData.name" v-model="infoName"></el-input>
            <el-button @click="handleadd">提交</el-button>
          </div>
        </div>
      </el-main>
    </el-container>
    <div class="topbar"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

const selectValue = ['管理员', '运维员', '调试']
const value11 = [100, 200, 300]
const selectdValue = ref(value11[0])
const mockData = ref([])
const tableData = ref([])

const getTableData = () => {
  for (let i = 0; i < 1000; i++) {
    mockData.value.push(
      {
        date: '2016-05-03',
        name: 'mary',
        address: 'No. 189, Grove St, Los Angeles',
        list: [1, 2, 3]
      },

      {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
        list: [1, 2, 3]
      },

      {
        date: '2016-05-04',
        name: 'tony',
        address: 'No. 189, Grove St, Los Angeles',
        list: [1, 2, 3]
      }
    )
  }
}

const fetchData = () => {
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  console.log(start, end)
  tableData.value = mockData.value.slice(start, end)
}
onMounted(() => {
  getTableData()
  fetchData()
  document.getElementsByClassName('el-pagination__goto')[0].innerHTML = '跳转'
  document.getElementsByClassName('el-pagination__classifier')[0].innerHTML = '页'
})
const infoData = ref({})
const showInfo = ref(false)
const infoName = ref('')
const handleEdit = (index) => {
  showInfo.value = true
  infoData.value = mockData.value[(currentPage.value - 1) * pageSize.value + index]
}
const handleDelete = (index) => {
  mockData.value.splice(index, 1)
  fetchData()
}
const handleForbid = (index, row) => {
  console.log(index, row)
  const ro = document.getElementsByClassName('el-table__row')[index]
  ro.style.color = 'red'
}

const handleadd = () => {}

const currentPage = ref(5)
const pageSize = ref(20)
const background = ref(true)

const handleCurrentChange = (val) => {
  fetchData()
  console.log(`current page: ${val}`)
}
const handleSizeChange = (val) => {
  fetchData()
  console.log(`${val} items per page`)
}
const handleHomepage = () => {
  currentPage.value = 1
  fetchData()
}
</script>

<style scoped lang="scss">
.topbar {
  height: 30px;
  display: flex;
  margin: 10px;
}
.topbar__left {
  position: absolute;
  right: 0;
}
//修改表头颜色
::v-deep .el-table th {
  background-color: #adad;
}
//修改表头字体颜色
::v-deep.el-table thead {
  color: #fc5531;
  font-weight: 500;
}
//修改行背景
::v-deep .el-table {
  background-color: transparent;
}
::v-deep .el-table tr {
  background-color: yellow;
}
//修改行内线
::v-deep .el-table td,
.building-top .el-table th.is-leaf {
  border-bottom: 1px solid transparent;
}
//修改鼠标选中行
::v-deep .el-table__body tr.current-row > td {
  background: #f57878;
}
::v-deep .el-table tr {
  background-color: yellow;
}
//修改行高
::v-deep .el-table td {
  padding: 0px 0px; //默认上下是padding12px
}
::v-deep .el-table__body {
  //-webkit-border-horizontal-spacing: 13px;  // 水平间距
  -webkit-border-vertical-spacing: 13px; // 垂直间距
}
.pagenation {
  display: flex;
  position: relative;
}
.infoWraspper {
  background-color: rgb(205, 156, 156);
  position: absolute;
  top: 40%;
  left: 40%;
  width: 200px;
  height: 200px;
  z-index: 9;
}
:deep(select-trigger el-tooltip__trigger el-tooltip__trigger) {
  right: 0;
  position: absolute;
  bottom: 0;
}
</style>
