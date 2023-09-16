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
        <el-table :data="tableData" style="width: 100%">
          <el-table-column prop="date" sortable label="Date" width="180" />
          <el-table-column prop="name" label="Name" width="180" />
          <el-table-column prop="address" label="Address" />
          <el-table-column label="Operations">
            <template #default="scope">
              <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
              <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)"
                >Delete</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <div class="demo-pagination-block">
          <div class="demonstration">Jump to</div>
          <el-pagination
            v-model:current-page="currentPage3"
            v-model:page-size="pageSize3"
            :background="background"
            layout="prev, pager, next, jumper"
            :total="1000"
            @current-change="handleCurrentChange"
          />
        </div>
      </el-main>
    </el-container>
    <div class="topbar"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectValue = ['管理员', '运维员', '调试']
const value11 = [100, 200, 300]
const selectdValue = ref(value11[0])
const tableData = ref([
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
])

const handleEdit = (index, row) => {
  console.log(index, row)
}
const handleDelete = (index, row) => {
  console.log(index, row)
}

const currentPage3 = ref(5)
const pageSize3 = ref(100)
const background = ref(true)

const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
  tableData.value.sort(function () {
    return 0.5 - Math.random()
  })
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
</style>
