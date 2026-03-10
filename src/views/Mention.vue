<template>
  <div class="mention-demo">
    <h2>Mention 提及</h2>
    <p>用于输入@提及的输入框组件。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="demo-row">
        <cc-mention v-model="value1" :options="options" placeholder="请输入@提及" />
        <span class="demo-text">当前值: {{ value1 }}</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义触发字符</span>
      </template>
      <div class="demo-row">
        <cc-mention v-model="value2" :options="options" prefix="#" placeholder="输入#触发提及" />
        <span class="demo-text">使用 # 触发</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>多触发字符</span>
      </template>
      <div class="demo-row">
        <cc-mention v-model="value3" :options="options" :prefix="['@', '#']" placeholder="输入@或#触发提及" />
        <span class="demo-text">使用 @ 或 # 触发</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>不同尺寸</span>
      </template>
      <div class="demo-column">
        <div class="demo-row">
          <cc-mention v-model="value5" :options="options" size="large" placeholder="large 尺寸" />
        </div>
        <div class="demo-row">
          <cc-mention v-model="value6" :options="options" placeholder="默认尺寸" />
        </div>
        <div class="demo-row">
          <cc-mention v-model="value7" :options="options" size="small" placeholder="small 尺寸" />
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>前缀和后缀</span>
      </template>
      <div class="demo-row">
        <cc-mention v-model="value8" :options="options">
          <template #prefix>提及:</template>
          <template #suffix>个</template>
        </cc-mention>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="demo-row">
        <cc-mention
          v-model="value9"
          :options="options"
          clearable
          placeholder="请输入@提及"
          @focus="handleFocus"
          @blur="handleBlur"
          @clear="handleClear"
          @change="handleChange"
        />
        <div class="event-log">
          <p>当前值: {{ value9 }}</p>
          <p>事件日志: {{ eventLog || '无' }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CcMention from '@/components/Mention/index.vue'

const options = [
  { value: 'alice', label: 'Alice' },
  { value: 'bob', label: 'Bob' },
  { value: 'charlie', label: 'Charlie' },
  { value: 'david', label: 'David' },
  { value: 'emma', label: 'Emma' }
]

const value1 = ref('@alice')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
const value6 = ref('')
const value7 = ref('')
const value8 = ref('')
const value9 = ref('')
const eventLog = ref('')

const handleFocus = () => {
  eventLog.value = 'focus 事件触发'
}

const handleBlur = () => {
  eventLog.value = 'blur 事件触发'
}
const handleClear = () => {
  eventLog.value = 'clear 事件触发'
}
const handleChange = (value: string) => {
  eventLog.value = `change 事件触发，值为: ${value}`
}
</script>

<style scoped>
.mention-demo {
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
  gap: 10px;
}

.demo-text {
  color: #606266;
  font-size: 14px;
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
