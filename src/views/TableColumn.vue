<template>
  <div class="component-view">
    <h1>TableColumn 表格列</h1>
    <p class="desc">用于展示表格的列数据，配合 cc-table 使用</p>

    <h2>基础用法</h2>
    <p class="desc">使用 prop 属性指定列字段，label 属性指定列标题</p>
    <el-row :gutter="20">
      <el-col :span="24">
        <cc-table :data="tableData">
          <cc-table-column prop="date" label="日期" width="180"></cc-table-column>
          <cc-table-column prop="name" label="姓名" width="180"></cc-table-column>
          <cc-table-column prop="address" label="地址"></cc-table-column>
        </cc-table>
      </el-col>
    </el-row>

    <h2>自定义列内容</h2>
    <p class="desc">通过默认插槽可以自定义列的内容</p>
    <el-row :gutter="20">
      <el-col :span="24">
        <cc-table :data="tableData">
          <cc-table-column prop="date" label="日期" width="180"></cc-table-column>
          <cc-table-column prop="name" label="姓名" width="180"></cc-table-column>
          <cc-table-column label="操作">
            <template #default="scope">
              <el-button link type="primary" size="small" @click="handleEdit(scope.row)">编辑</el-button>
              <el-button link type="primary" size="small" @click="handleDelete(scope.row)">删除</el-button>
            </template>
          </cc-table-column>
        </cc-table>
      </el-col>
    </el-row>

    <h2>带排序的列</h2>
    <p class="desc">使用 sortable 属性可以开启排序功能</p>
    <el-row :gutter="20">
      <el-col :span="24">
        <cc-table :data="tableData" border>
          <cc-table-column prop="date" label="日期" width="180" sortable></cc-table-column>
          <cc-table-column prop="name" label="姓名" width="180"></cc-table-column>
          <cc-table-column prop="address" label="地址" sortable></cc-table-column>
        </cc-table>
      </el-col>
    </el-row>

    <h2>固定列</h2>
    <p class="desc">使用 fixed 属性可以固定列</p>
    <el-row :gutter="20">
      <el-col :span="24">
        <cc-table :data="tableData" border>
          <cc-table-column prop="date" label="日期" width="150" fixed></cc-table-column>
          <cc-table-column prop="name" label="姓名" width="120"></cc-table-column>
          <cc-table-column prop="province" label="省份" width="120"></cc-table-column>
          <cc-table-column prop="city" label="市区" width="120"></cc-table-column>
          <cc-table-column prop="address" label="地址" width="300"></cc-table-column>
          <cc-table-column prop="zip" label="邮编" width="120" fixed="right"></cc-table-column>
        </cc-table>
      </el-col>
    </el-row>

    <h2>多选列</h2>
    <p class="desc">使用 type="selection" 可以实现多选</p>
    <el-row :gutter="20">
      <el-col :span="24">
        <cc-table :data="tableData" @selection-change="handleSelectionChange">
          <cc-table-column type="selection" width="55"></cc-table-column>
          <cc-table-column prop="date" label="日期" width="180"></cc-table-column>
          <cc-table-column prop="name" label="姓名" width="180"></cc-table-column>
          <cc-table-column prop="address" label="地址"></cc-table-column>
        </cc-table>
      </el-col>
    </el-row>

    <h2>展开行</h2>
    <p class="desc">使用 type="expand" 可以实现展开行功能</p>
    <el-row :gutter="20">
      <el-col :span="24">
        <cc-table :data="tableData">
          <cc-table-column type="expand">
            <template #default="scope">
              <div m="4">
                <p m="t-0 b-2">姓名: {{ scope.row.name }}</p>
                <p>地址: {{ scope.row.address }}</p>
              </div>
            </template>
          </cc-table-column>
          <cc-table-column prop="date" label="日期" width="180"></cc-table-column>
          <cc-table-column prop="name" label="姓名" width="180"></cc-table-column>
        </cc-table>
      </el-col>
    </el-row>

    <h2>索引列</h2>
    <p class="desc">使用 type="index" 可以显示索引</p>
    <el-row :gutter="20">
      <el-col :span="24">
        <cc-table :data="tableData">
          <cc-table-column type="index" width="60"></cc-table-column>
          <cc-table-column prop="date" label="日期" width="180"></cc-table-column>
          <cc-table-column prop="name" label="姓名" width="180"></cc-table-column>
          <cc-table-column prop="address" label="地址"></cc-table-column>
        </cc-table>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Table from '@/components/Table/index.vue'
import TableColumn from '@/components/TableColumn/index.vue'

const tableData = ref([
  {
    date: '2016-05-02',
    name: '王小虎',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1518 弄',
    zip: 200333
  },
  {
    date: '2016-05-04',
    name: '王小明',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1517 弄',
    zip: 200333
  },
  {
    date: '2016-05-01',
    name: '王小红',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1519 弄',
    zip: 200333
  },
  {
    date: '2016-05-03',
    name: '王小华',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1520 弄',
    zip: 200333
  }
])

const handleEdit = (row: any) => {
  console.log('编辑', row)
}

const handleDelete = (row: any) => {
  console.log('删除', row)
}

const handleSelectionChange = (val: any[]) => {
  console.log('选中', val)
}
</script>

<style scoped>
.component-view {
  padding: 20px;
}

h1 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
}

h2 {
  font-size: 18px;
  font-weight: 600;
  margin-top: 24px;
  margin-bottom: 16px;
}

.desc {
  color: #666;
  margin-bottom: 16px;
}

.el-row {
  margin-bottom: 20px;
}
</style>
