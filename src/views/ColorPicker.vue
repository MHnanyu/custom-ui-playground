<template>
  <div class="color-picker-demo">
    <h2>ColorPicker 颜色选择器</h2>
    <p>用于颜色选择，支持多种格式。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="demo-row">
        <cc-color-picker v-model="color" />
        <p>当前颜色: {{ color }}</p>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用状态</span>
      </template>
      <div class="demo-row">
        <cc-color-picker v-model="color2" disabled />
        <p>禁用状态的颜色选择器</p>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>透明度</span>
      </template>
      <div class="demo-row">
        <cc-color-picker v-model="color3" show-alpha />
        <p>当前颜色: {{ color3 }}</p>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>预定义颜色</span>
      </template>
      <div class="demo-row">
        <cc-color-picker v-model="color4" :predefine="predefineColors" />
        <p>当前颜色: {{ color4 }}</p>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>不同尺寸</span>
      </template>
      <div class="demo-row">
        <div class="size-demo">
          <span>Large:</span>
          <cc-color-picker v-model="color5" size="large" />
        </div>
        <div class="size-demo">
          <span>Default:</span>
          <cc-color-picker v-model="color6" />
        </div>
        <div class="size-demo">
          <span>Small:</span>
          <cc-color-picker v-model="color7" size="small" />
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>不同颜色格式</span>
      </template>
      <div class="demo-row">
        <div class="format-demo">
          <span>hex 格式:</span>
          <cc-color-picker v-model="colorHex" color-format="hex" />
          <p>{{ colorHex }}</p>
        </div>
        <div class="format-demo">
          <span>rgb 格式:</span>
          <cc-color-picker v-model="colorRgb" color-format="rgb" />
          <p>{{ colorRgb }}</p>
        </div>
        <div class="format-demo">
          <span>hsl 格式:</span>
          <cc-color-picker v-model="colorHsl" color-format="hsl" />
          <p>{{ colorHsl }}</p>
        </div>
        <div class="format-demo">
          <span>hsv 格式:</span>
          <cc-color-picker v-model="colorHsv" color-format="hsv" />
          <p>{{ colorHsv }}</p>
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="demo-row">
        <cc-color-picker v-model="eventColor" @change="handleChange" @active-change="handleActiveChange" />
        <div class="event-log">
          <p>change 事件: {{ changeLog || '无' }}</p>
          <p>active-change 事件: {{ activeChangeLog || '无' }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CcColorPicker from '@/components/ColorPicker/index.vue'

const color = ref('#409EFF')
const color2 = ref('#409EFF')
const color3 = ref('rgba(19, 206, 102, 0.8)')
const color4 = ref('#409EFF')
const color5 = ref('#409EFF')
const color6 = ref('#67C23A')
const color7 = ref('#E6A23C')

const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577'
])

const colorHex = ref('#409EFF')
const colorRgb = ref('rgb(64, 158, 255)')
const colorHsl = ref('hsl(210, 100%, 63%)')
const colorHsv = ref('hsv(210, 75, 100)')

const eventColor = ref('#409EFF')
const changeLog = ref('')
const activeChangeLog = ref('')

const handleChange = (val: string) => {
  changeLog.value = `颜色值: ${val}`
}

const handleActiveChange = (val: string) => {
  activeChangeLog.value = `当前显示: ${val}`
}
</script>

<style scoped>
.color-picker-demo {
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

.size-demo {
  display: flex;
  align-items: center;
  gap: 16px;
}

.size-demo span {
  width: 80px;
  color: #606266;
}

.format-demo {
  display: flex;
  align-items: center;
  gap: 16px;
}

.format-demo span {
  width: 80px;
  color: #606266;
}

.format-demo p {
  margin: 0;
  color: #909399;
  font-size: 12px;
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
}
</style>
