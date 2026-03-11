<template>
  <div class="segmented-demo">
    <h2>Segmented 分段控制器</h2>
    <p>由多个分段选项组成的控件，用于在多个选项之间切换。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="demo-row">
        <cc-segmented v-model="value1" :options="options1" />
        <span class="demo-text">当前值: {{ value1 }}</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>对象数组</span>
      </template>
      <div class="demo-row">
        <cc-segmented v-model="value2" :options="options2" />
        <span class="demo-text">当前值: {{ value2 }}</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>不同尺寸</span>
      </template>
      <div class="demo-column">
        <div class="demo-row">
          <span class="demo-label">large:</span>
          <cc-segmented v-model="value3" :options="options3" size="large" />
        </div>
        <div class="demo-row">
          <span class="demo-label">default:</span>
          <cc-segmented v-model="value4" :options="options3" />
        </div>
        <div class="demo-row">
          <span class="demo-label">small:</span>
          <cc-segmented v-model="value5" :options="options3" size="small" />
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用状态</span>
      </template>
      <div class="demo-row">
        <cc-segmented v-model="value6" :options="options3" disabled />
        <cc-segmented v-model="value7" :options="options3" />
        <span class="demo-text">当前值: {{ value7 }}</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用单项</span>
      </template>
      <div class="demo-row">
        <cc-segmented v-model="value8" :options="options4" />
        <span class="demo-text">当前值: {{ value8 }}</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>只读模式</span>
      </template>
      <div class="demo-row">
        <cc-segmented v-model="value9" :options="options3" readonly />
        <cc-segmented v-model="value10" :options="options3" />
        <span class="demo-text">当前值: {{ value10 }}</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>块级样式</span>
      </template>
      <div class="demo-block">
        <cc-segmented v-model="value11" :options="options5" block />
      </div>
      <div class="demo-text">当前值: {{ value11 }}</div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义内容</span>
      </template>
      <div class="demo-row">
        <cc-segmented v-model="value12" :options="options2">
          <template #default="{ option, index }">
            <span>{{ option.label }} ({{ index + 1 }})</span>
          </template>
        </cc-segmented>
        <span class="demo-text">当前值: {{ value12 }}</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="demo-row">
        <cc-segmented v-model="value13" :options="options3" @change="handleChange" />
        <div class="event-log">
          <p>当前值: {{ value13 }}</p>
          <p>事件日志: {{ eventLog || '无' }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CcSegmented from '@/components/Segmented/index.vue'

const options1 = ['Apple', 'Banana', 'Orange']
const options2 = [
  { label: '北京', value: 'Beijing' },
  { label: '上海', value: 'Shanghai' },
  { label: '广州', value: 'Guangzhou' },
  { label: '深圳', value: 'Shenzhen' }
]
const options3 = ['iOS', 'Android', 'HarmonyOS']
const options4 = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Banana', value: 'Banana', disabled: true },
  { label: 'Orange', value: 'Orange' }
]
const options5 = ['Day', 'Week', 'Month', 'Year']

const value1 = ref('Apple')
const value2 = ref('Beijing')
const value3 = ref('iOS')
const value4 = ref('Android')
const value5 = ref('HarmonyOS')
const value6 = ref('iOS')
const value7 = ref('Android')
const value8 = ref('Apple')
const value9 = ref('iOS')
const value10 = ref('Android')
const value11 = ref('Week')
const value12 = ref('Beijing')
const value13 = ref('iOS')
const eventLog = ref('')

const handleChange = (value: string | number) => {
  eventLog.value = `change 事件触发，值为: ${value}`
}
</script>

<style scoped>
.segmented-demo {
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  color: #409eff;
}

.section {
  margin-bottom: 20px;
}

.demo-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.demo-column {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.demo-label {
  width: 80px;
  color: #606266;
  font-size: 14px;
}

.demo-text {
  color: #606266;
  font-size: 14px;
}

.demo-block {
  margin-bottom: 10px;
}

.event-log {
  padding: 10px;
  background-color: #f5f7fa;
  border-radius: 4px;
  min-width: 300px;
}

.event-log p {
  margin: 4px 0;
  font-size: 14px;
  color: #606266;
}
</style>
