<template>
  <div class="pagination-view">
    <h1>Pagination 分页</h1>
    
    <el-card>
      <template #header>
        <span>基础用法</span>
      </template>
      <p>设置 total、page-size 和 v-model:current-page 来进行数据切换。</p>
      <cc-pagination v-model:current-page="currentPage1" :page-size="20" :total="200" />
    </el-card>

    <el-card>
      <template #header>
        <span>设置最大页码按钮数</span>
      </template>
      <p>通过 pager-count 属性可以设置最大页码按钮数。</p>
      <cc-pagination :total="500" :pager-count="11" />
    </el-card>

    <el-card>
      <template #header>
        <span>完整功能</span>
      </template>
      <p>完整的分页组件包含页码、每页显示条数选择、跳转等功能。</p>
      <cc-pagination
        v-model:current-page="currentPage2"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30, 50]"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        @current-change="handleCurrentChange"
        @page-size-change="handlePageSizeChange"
      />
    </el-card>

    <el-card>
      <template #header>
        <span>带有背景色的分页</span>
      </template>
      <p>设置 background 属性可以显示带有背景色的分页按钮。</p>
      <cc-pagination :total="200" background />
    </el-card>

    <el-card>
      <template #header>
        <span>简洁分页</span>
      </template>
      <p>设置 layout 属性来选择需要显示的功能。</p>
      <cc-pagination :total="100" layout="prev, pager, next" />
    </el-card>

    <el-card>
      <template #header>
        <span>小型分页</span>
      </template>
      <p>使用 small 属性来显示小型分页。</p>
      <cc-pagination :total="100" small />
    </el-card>

    <el-card>
      <template #header>
        <span>自定义文本</span>
      </template>
      <p>通过 prev-text 和 next-text 属性来自定义上一页和下一页的文本。</p>
      <cc-pagination :total="100" prev-text="上一页" next-text="下一页" />
    </el-card>

    <el-card>
      <template #header>
        <span>禁用分页</span>
      </template>
      <p>设置 disabled 属性可以禁用分页。</p>
      <cc-pagination :total="100" disabled />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CcPagination from '@/components/Pagination/index.vue'

const currentPage1 = ref(1)
const currentPage2 = ref(1)
const pageSize = ref(10)
const total = ref(100)

const handleCurrentChange = (val: number) => {
  console.log('current change:', val)
}

const handlePageSizeChange = (val: number) => {
  console.log('page size change:', val)
}
</script>

<style scoped>
.pagination-view {
  max-width: 900px;
  margin: 0 auto;
}
.pagination-view h1 {
  color: #409eff;
  margin-bottom: 20px;
}
.el-card {
  margin-bottom: 20px;
}
</style>
