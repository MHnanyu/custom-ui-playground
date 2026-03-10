<template>
  <div class="slider-demo">
    <h2>Slider 滑块</h2>
    <p>通过拖动滑块在一个固定区间内进行选择。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="demo-row">
        <cc-slider v-model="value1" />
        <span class="demo-text">当前值: {{ value1 }}</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用状态</span>
      </template>
      <div class="demo-row">
        <cc-slider v-model="value2" disabled />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>带有输入框</span>
      </template>
      <div class="demo-row">
        <cc-slider v-model="value3" show-input />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>范围选择</span>
      </template>
      <div class="demo-row">
        <cc-slider v-model="value4" range />
        <span class="demo-text">当前值: {{ value4 }}</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>设置步长</span>
      </template>
      <div class="demo-row">
        <cc-slider v-model="value5" :step="10" />
        <span class="demo-text">当前值: {{ value5 }}</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>显示间断点</span>
      </template>
      <div class="demo-row">
        <cc-slider v-model="value6" :step="10" show-stops />
        <span class="demo-text">当前值: {{ value6 }}</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义范围</span>
      </template>
      <div class="demo-row">
        <cc-slider v-model="value7" :min="10" :max="90" />
        <span class="demo-text">当前值: {{ value7 }} (范围: 10-90)</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>格式化 Tooltip</span>
      </template>
      <div class="demo-row">
        <cc-slider v-model="value8" :format-tooltip="formatTooltip" />
        <span class="demo-text">当前值: {{ value8 }}%</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>竖向模式</span>
      </template>
      <div class="demo-row vertical-demo">
        <div class="vertical-item">
          <cc-slider v-model="value9" vertical height="200px" />
          <span class="demo-text">值: {{ value9 }}</span>
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>展示标记</span>
      </template>
      <div class="demo-row">
        <cc-slider v-model="value10" :marks="marks" />
        <span class="demo-text">当前值: {{ value10 }}</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="demo-row">
        <cc-slider v-model="value11" @change="handleChange" @input="handleInput" />
        <div class="event-log">
          <p>当前值: {{ value11 }}</p>
          <p>change事件: {{ changeLog || '无' }}</p>
          <p>input事件: {{ inputLog || '无' }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref(30)
const value2 = ref(50)
const value3 = ref(20)
const value4 = ref([10, 80])
const value5 = ref(30)
const value6 = ref(20)
const value7 = ref(30)
const value8 = ref(50)
const value9 = ref(40)
const value10 = ref(30)
const value11 = ref(0)

const changeLog = ref('')
const inputLog = ref('')

const marks = {
  0: '0°C',
  8: '8°C',
  37: '37°C',
  50: {
    style: {
      color: '#1989FA'
    },
    label: '50%'
  },
  100: '100°C'
}

const formatTooltip = (val: number) => {
  return `${val}%`
}

const handleChange = (val: number) => {
  changeLog.value = `值变为 ${val}`
}

const handleInput = (val: number) => {
  inputLog.value = `正在拖动 ${val}`
}
</script>

<style scoped>
.slider-demo {
  padding: 20px;
}

.section {
  margin-bottom: 20px;
}

.demo-row {
  display: flex;
  align-items: center;
  gap: 20px;
}

.demo-text {
  color: #666;
  font-size: 14px;
  min-width: 150px;
}

.vertical-demo {
  padding: 20px 0;
}

.vertical-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  height: 250px;
}

.event-log {
  font-size: 14px;
  color: #666;
}

.event-log p {
  margin: 5px 0;
}
</style>
