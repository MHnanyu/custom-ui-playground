<template>
  <div class="virtualized-select-demo">
    <h2>VirtualizedSelect 虚拟化选择器</h2>
    <p>虚拟化选择器组件，适用于大数据量场景，通过虚拟滚动技术优化性能。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法（10000 条数据）</span>
      </template>
      <div class="demo-row">
        <cc-virtualized-select v-model="value1" :options="largeOptions" placeholder="请选择" style="width: 240px" />
        <span class="demo-text">当前选中: {{ value1 }}</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用状态</span>
      </template>
      <div class="demo-row">
        <cc-virtualized-select v-model="value2" disabled placeholder="禁用状态" :options="options" style="width: 240px" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>可清空</span>
      </template>
      <div class="demo-row">
        <cc-virtualized-select v-model="value3" clearable placeholder="可清空" :options="options" style="width: 240px" />
        <span class="demo-text">当前选中: {{ value3 }}</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>多选</span>
      </template>
      <div class="demo-row">
        <cc-virtualized-select v-model="value4" multiple placeholder="请选择" :options="largeOptions" style="width: 300px" />
      </div>
      <div class="demo-text">当前选中: {{ value4 }}</div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>多选折叠标签</span>
      </template>
      <div class="demo-row">
        <cc-virtualized-select 
          v-model="value5" 
          multiple 
          collapse-tags 
          collapse-tags-tooltip 
          placeholder="请选择" 
          :options="largeOptions" 
          style="width: 300px" 
        />
      </div>
      <div class="demo-text">当前选中: {{ value5 }}</div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>可搜索</span>
      </template>
      <div class="demo-row">
        <cc-virtualized-select v-model="value6" filterable placeholder="可搜索" :options="largeOptions" style="width: 240px" />
        <span class="demo-text">当前选中: {{ value6 }}</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义高度</span>
      </template>
      <div class="demo-row">
        <cc-virtualized-select v-model="value7" :height="150" placeholder="高度150px" :options="largeOptions" style="width: 240px" />
        <cc-virtualized-select v-model="value7" :height="400" placeholder="高度400px" :options="largeOptions" style="width: 240px" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>分组</span>
      </template>
      <div class="demo-row">
        <cc-virtualized-select v-model="value8" placeholder="请选择城市" :options="groupedOptions" style="width: 240px" />
        <span class="demo-text">当前选中: {{ value8 }}</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>不同尺寸</span>
      </template>
      <div class="demo-column">
        <div class="demo-row">
          <span class="demo-label">large:</span>
          <cc-virtualized-select v-model="value9" size="large" placeholder="large" :options="options" style="width: 240px" />
        </div>
        <div class="demo-row">
          <span class="demo-label">default:</span>
          <cc-virtualized-select v-model="value9" placeholder="default" :options="options" style="width: 240px" />
        </div>
        <div class="demo-row">
          <span class="demo-label">small:</span>
          <cc-virtualized-select v-model="value9" size="small" placeholder="small" :options="options" style="width: 240px" />
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>远程搜索</span>
      </template>
      <div class="demo-row">
        <cc-virtualized-select 
          v-model="value10" 
          filterable 
          remote 
          :remote-method="remoteMethod" 
          :loading="remoteLoading" 
          placeholder="请输入关键词" 
          :options="remoteOptions" 
          style="width: 240px" 
        />
        <span class="demo-text">当前选中: {{ value10 }}</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="demo-row">
        <cc-virtualized-select 
          v-model="value11" 
          placeholder="请选择" 
          :options="options" 
          @change="handleChange" 
          @clear="handleClear" 
          @visible-change="handleVisibleChange" 
          clearable 
          style="width: 240px" 
        />
      </div>
      <div class="event-log">
        <div v-for="(log, index) in eventLogs" :key="index" class="log-item">
          {{ log }}
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CcVirtualizedSelect from '@/components/VirtualizedSelect/index.vue'

interface Option {
  value: string
  label: string
}

interface GroupOption {
  label: string
  options: Option[]
}

// 生成大量数据
const generateOptions = (count: number): Option[] => {
  return Array.from({ length: count }).map((_, idx) => ({
    value: `option-${idx + 1}`,
    label: `选项 ${idx + 1}`
  }))
}

const options: Option[] = generateOptions(100)
const largeOptions: Option[] = generateOptions(10000)

const groupedOptions: GroupOption[] = [
  {
    label: '热门城市',
    options: [
      { value: 'beijing', label: '北京' },
      { value: 'shanghai', label: '上海' },
      { value: 'guangzhou', label: '广州' },
      { value: 'shenzhen', label: '深圳' }
    ]
  },
  {
    label: '其他城市',
    options: Array.from({ length: 100 }).map((_, idx) => ({
      value: `city-${idx}`,
      label: `城市 ${idx + 1}`
    }))
  }
]

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref<string[]>([])
const value5 = ref<string[]>([])
const value6 = ref('')
const value7 = ref('')
const value8 = ref('')
const value9 = ref('')
const value10 = ref('')
const value11 = ref('')

const remoteLoading = ref(false)
const remoteOptions = ref<Option[]>([])

const remoteMethod = (query: string) => {
  if (query) {
    remoteLoading.value = true
    setTimeout(() => {
      remoteLoading.value = false
      remoteOptions.value = Array.from({ length: 100 }).map((_, idx) => ({
        value: `${query}-${idx}`,
        label: `${query} 结果 ${idx + 1}`
      }))
    }, 200)
  } else {
    remoteOptions.value = []
  }
}

const eventLogs = ref<string[]>([])

const handleChange = (val: any) => {
  eventLogs.value.unshift(`change事件: ${JSON.stringify(val)}`)
  if (eventLogs.value.length > 5) {
    eventLogs.value.pop()
  }
}

const handleClear = () => {
  eventLogs.value.unshift('clear事件')
  if (eventLogs.value.length > 5) {
    eventLogs.value.pop()
  }
}

const handleVisibleChange = (visible: boolean) => {
  eventLogs.value.unshift(`visible-change事件: ${visible}`)
  if (eventLogs.value.length > 5) {
    eventLogs.value.pop()
  }
}
</script>

<style scoped>
.virtualized-select-demo {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  margin-bottom: 20px;
}

.demo-row {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 10px;
}

.demo-column {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.demo-label {
  width: 80px;
  color: var(--el-text-color-secondary);
}

.demo-text {
  color: var(--el-text-color-secondary);
  font-size: 14px;
}

.event-log {
  margin-top: 10px;
  padding: 10px;
  background-color: var(--el-fill-color-light);
  border-radius: 4px;
  max-height: 150px;
  overflow-y: auto;
}

.log-item {
  font-family: monospace;
  font-size: 12px;
  color: var(--el-text-color-regular);
  padding: 4px 0;
  border-bottom: 1px solid var(--el-border-color-lighter);
}

.log-item:last-child {
  border-bottom: none;
}
</style>
