<template>
  <div class="rate-demo">
    <h2>Rate 评分</h2>
    <p>用于评分展示和输入评分。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="demo-row">
        <cc-rate v-model="rate1" />
        <span class="demo-text">当前评分: {{ rate1 }}</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用状态</span>
      </template>
      <div class="demo-row">
        <cc-rate v-model="rate2" disabled />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>不同尺寸</span>
      </template>
      <div class="demo-column">
        <div class="demo-row">
          <span class="demo-label">large:</span>
          <cc-rate v-model="rate3" size="large" />
        </div>
        <div class="demo-row">
          <span class="demo-label">default:</span>
          <cc-rate v-model="rate3" />
        </div>
        <div class="demo-row">
          <span class="demo-label">small:</span>
          <cc-rate v-model="rate3" size="small" />
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>允许半选</span>
      </template>
      <div class="demo-row">
        <cc-rate v-model="rate4" allow-half show-score />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>显示分数</span>
      </template>
      <div class="demo-row">
        <cc-rate v-model="rate5" show-score />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>辅助文字</span>
      </template>
      <div class="demo-row">
        <cc-rate
          v-model="rate6"
          show-text
          :texts="['极差', '失望', '一般', '满意', '惊喜']"
        />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义颜色</span>
      </template>
      <div class="demo-row">
        <cc-rate v-model="rate7" :colors="['#99A9BF', '#F7BA2A', '#FF9900']" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="demo-row">
        <cc-rate
          v-model="rate8"
          @change="handleChange"
          @hover-change="handleHoverChange"
        />
        <div class="event-log">
          <p>当前值: {{ rate8 }}</p>
          <p>事件日志: {{ eventLog || '无' }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CcRate from '@/components/Rate/index.vue'

const rate1 = ref(0)
const rate2 = ref(2)
const rate3 = ref(3)
const rate4 = ref(3.5)
const rate5 = ref(4)
const rate6 = ref(0)
const rate7 = ref(0)
const rate8 = ref(0)
const eventLog = ref('')

const handleChange = (value: number) => {
  eventLog.value = `change 事件触发，值为: ${value}`
}

const handleHoverChange = (value: number) => {
  eventLog.value = `hover-change 事件触发，值为: ${value}`
}
</script>

<style scoped>
.rate-demo {
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
