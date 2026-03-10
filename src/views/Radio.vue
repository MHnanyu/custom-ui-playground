<template>
  <div class="radio-demo">
    <h2>Radio 单选框</h2>
    <p>用于在多个备选项中选中单个状态。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="demo-row">
        <cc-radio v-model="radio1" label="1">选项一</cc-radio>
        <cc-radio v-model="radio1" label="2">选项二</cc-radio>
        <span class="demo-text">当前选中: {{ radio1 }}</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用状态</span>
      </template>
      <div class="demo-row">
        <cc-radio v-model="radio2" label="1" disabled>禁用</cc-radio>
        <cc-radio v-model="radio2" label="2">未禁用</cc-radio>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>单选框组</span>
      </template>
      <div class="demo-row">
        <el-radio-group v-model="radio3">
          <cc-radio label="1">选项一</cc-radio>
          <cc-radio label="2">选项二</cc-radio>
          <cc-radio label="3">选项三</cc-radio>
        </el-radio-group>
        <span class="demo-text">当前选中: {{ radio3 }}</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>不同尺寸</span>
      </template>
      <div class="demo-column">
        <div class="demo-row">
          <span class="demo-label">large:</span>
          <el-radio-group v-model="radio4" size="large">
            <cc-radio label="1">选项一</cc-radio>
            <cc-radio label="2">选项二</cc-radio>
          </el-radio-group>
        </div>
        <div class="demo-row">
          <span class="demo-label">default:</span>
          <el-radio-group v-model="radio4">
            <cc-radio label="1">选项一</cc-radio>
            <cc-radio label="2">选项二</cc-radio>
          </el-radio-group>
        </div>
        <div class="demo-row">
          <span class="demo-label">small:</span>
          <el-radio-group v-model="radio4" size="small">
            <cc-radio label="1">选项一</cc-radio>
            <cc-radio label="2">选项二</cc-radio>
          </el-radio-group>
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>带有边框</span>
      </template>
      <div class="demo-row">
        <cc-radio v-model="radio5" label="1" border>选项一</cc-radio>
        <cc-radio v-model="radio5" label="2" border>选项二</cc-radio>
        <cc-radio v-model="radio5" label="3" border>选项三</cc-radio>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>单选框按钮样式</span>
      </template>
      <div class="demo-row">
        <el-radio-group v-model="radio6">
          <el-radio-button label="上海" />
          <el-radio-button label="北京" />
          <el-radio-button label="广州" />
          <el-radio-button label="深圳" />
        </el-radio-group>
        <span class="demo-text">当前选中: {{ radio6 }}</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="demo-row">
        <el-radio-group v-model="radio7" @change="handleChange">
          <cc-radio label="1">选项一</cc-radio>
          <cc-radio label="2">选项二</cc-radio>
          <cc-radio label="3">选项三</cc-radio>
        </el-radio-group>
        <div class="event-log">
          <p>当前值: {{ radio7 }}</p>
          <p>事件日志: {{ eventLog || '无' }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CcRadio from '@/components/Radio/index.vue'

const radio1 = ref('1')
const radio2 = ref('2')
const radio3 = ref('1')
const radio4 = ref('1')
const radio5 = ref('1')
const radio6 = ref('上海')
const radio7 = ref('1')
const eventLog = ref('')

const handleChange = (value: string) => {
  eventLog.value = `change 事件触发，值为: ${value}`
}
</script>

<style scoped>
.radio-demo {
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
