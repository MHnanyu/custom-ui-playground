<template>
  <div class="tree-select-demo">
    <h2>TreeSelect 树选择</h2>
    <p>TreeSelect 树选择是一种具有树形层级结构的选择器，用户可以从多层级的数据中进行选择。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="demo-row">
        <cc-tree-select v-model="value1" :data="data" @change="handleChange" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>可清空</span>
      </template>
      <div class="demo-row">
        <cc-tree-select v-model="value2" :data="data" clearable />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用状态</span>
      </template>
      <div class="demo-row">
        <cc-tree-select v-model="value3" :data="dataWithDisabled" disabled />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>多选</span>
      </template>
      <div class="demo-row">
        <cc-tree-select v-model="value4" :data="data" multiple clearable />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>可搜索</span>
      </template>
      <div class="demo-row">
        <cc-tree-select v-model="value5" :data="data" filterable placeholder="请输入关键词搜索" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>展开任意层级</span>
      </template>
      <div class="demo-row">
        <cc-tree-select v-model="value6" :data="data" checkStrictly clearable />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>显示复选框</span>
      </template>
      <div class="demo-row">
        <cc-tree-select v-model="value7" :data="data" show-checkbox multiple clearable />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义节点内容</span>
      </template>
      <div class="demo-row">
        <cc-tree-select v-model="value8" :data="data">
          <template #default="{ data }">
            <span>{{ data.label }}</span>
            <span v-if="data.children" style="color: #999; font-size: 12px;"> ({{ data.children.length }}) </span>
          </template>
        </cc-tree-select>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>不同尺寸</span>
      </template>
      <div class="demo-row">
        <cc-tree-select v-model="value9" :data="data" size="large" placeholder="Large" />
        <cc-tree-select v-model="value10" :data="data" placeholder="Default" />
        <cc-tree-select v-model="value11" :data="data" size="small" placeholder="Small" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="demo-row">
        <cc-tree-select
          v-model="value12"
          :data="data"
          @change="handleChangeEvent"
          @focus="handleFocus"
          @blur="handleBlur"
          @visible-change="handleVisibleChange"
        />
        <div class="event-log">
          <p>选中值: {{ selectedValue || '无' }}</p>
          <p>事件日志: {{ eventLog || '无' }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CcTreeSelect from '@/components/TreeSelect/index.vue'

const value1 = ref('')
const value2 = ref('1-1')
const value3 = ref('')
const value4 = ref([])
const value5 = ref('')
const value6 = ref('')
const value7 = ref([])
const value8 = ref('')
const value9 = ref('')
const value10 = ref('')
const value11 = ref('')
const value12 = ref('')

const selectedValue = ref('')
const eventLog = ref('')

const data = [
  {
    value: '1',
    label: 'Level 1-1',
    children: [
      {
        value: '1-1',
        label: 'Level 1-1-1'
      },
      {
        value: '1-2',
        label: 'Level 1-1-2'
      }
    ]
  },
  {
    value: '2',
    label: 'Level 1-2',
    children: [
      {
        value: '2-1',
        label: 'Level 1-2-1'
      },
      {
        value: '2-2',
        label: 'Level 1-2-2',
        children: [
          {
            value: '2-2-1',
            label: 'Level 1-2-2-1'
          },
          {
            value: '2-2-2',
            label: 'Level 1-2-2-2'
          }
        ]
      }
    ]
  },
  {
    value: '3',
    label: 'Level 1-3',
    children: [
      {
        value: '3-1',
        label: 'Level 1-3-1'
      }
    ]
  }
]

const dataWithDisabled = [
  {
    value: '1',
    label: 'Level 1-1',
    disabled: true,
    children: [
      {
        value: '1-1',
        label: 'Level 1-1-1'
      }
    ]
  },
  {
    value: '2',
    label: 'Level 1-2',
    children: [
      {
        value: '2-1',
        label: 'Level 1-2-1'
      }
    ]
  }
]

const handleChange = (value: any) => {
  console.log('Change:', value)
}

const handleChangeEvent = (value: any) => {
  selectedValue.value = JSON.stringify(value)
  eventLog.value = 'change 事件触发'
}

const handleFocus = () => {
  eventLog.value = 'focus 事件触发'
}

const handleBlur = () => {
  eventLog.value = 'blur 事件触发'
}

const handleVisibleChange = (value: boolean) => {
  eventLog.value = value ? 'visible-change: 显示' : 'visible-change: 隐藏'
}
</script>

<style scoped>
.tree-select-demo {
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  margin-bottom: 20px;
}

.demo-row {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
}

.demo-row > :first-child {
  width: 400px;
}

.event-log {
  padding: 10px;
  background-color: #f5f7fa;
  border-radius: 4px;
  width: 400px;
}

.event-log p {
  margin: 4px 0;
  font-size: 14px;
  color: #606266;
  word-break: break-all;
}
</style>
