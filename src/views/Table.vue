<template>
  <div class="table-demo">
    <h2>Table 表格</h2>
    <p>用于展示多条结构类似的数据，可对数据进行排序、筛选、对比或其他操作。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <cc-table :data="tableData">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </cc-table>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>带斑马纹表格</span>
      </template>
      <cc-table :data="tableData" stripe>
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </cc-table>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>带边框表格</span>
      </template>
      <cc-table :data="tableData" border>
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </cc-table>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>固定表头</span>
      </template>
      <cc-table :data="tableData" height="200">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </cc-table>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>固定列</span>
      </template>
      <cc-table :data="tableData" border>
        <el-table-column prop="date" label="日期" width="150" fixed></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="province" label="省份" width="120"></el-table-column>
        <el-table-column prop="city" label="市区" width="120"></el-table-column>
        <el-table-column prop="address" label="地址" width="300"></el-table-column>
        <el-table-column prop="zip" label="邮编" width="120" fixed="right"></el-table-column>
      </cc-table>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>排序</span>
      </template>
      <cc-table :data="tableData" border>
        <el-table-column prop="date" label="日期" width="180" sortable></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址" sortable></el-table-column>
      </cc-table>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>多选</span>
      </template>
      <cc-table :data="tableData" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </cc-table>
      <div class="selection-info" v-if="selectedRows.length > 0">
        已选择: {{ selectedRows.map(row => row.name).join(', ') }}
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>展开行</span>
      </template>
      <cc-table :data="tableData">
        <el-table-column type="expand">
          <template #default="scope">
            <div m="4">
              <p m="t-0 b-2">姓名: {{ scope.row.name }}</p>
              <p>地址: {{ scope.row.address }}</p>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      </cc-table>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>带状态表格</span>
      </template>
      <cc-table :data="tableData" :row-class-name="tableRowClassName">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </cc-table>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CcTable from '@/components/Table/index.vue'

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
  },
  {
    date: '2016-05-05',
    name: '王小丽',
    province: '上海',
    city: '普陀区',
    address: '上海市普陀区金沙江路 1521 弄',
    zip: 200333
  }
])

const selectedRows = ref<any[]>([])

const handleSelectionChange = (val: any[]) => {
  selectedRows.value = val
}

const tableRowClassName = ({ row, rowIndex }: { row: any; rowIndex: number }) => {
  if (rowIndex === 1) {
    return 'warning-row'
  } else if (rowIndex === 3) {
    return 'success-row'
  }
  return ''
}
</script>

<style scoped>
.table-demo {
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  margin-bottom: 20px;
}

.selection-info {
  margin-top: 10px;
  padding: 10px;
  background-color: #f5f7fa;
  border-radius: 4px;
}

:deep(.el-table .warning-row) {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}

:deep(.el-table .success-row) {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}
</style>
