<template>
  <div class="switch-demo">
    <h2>Switch 开关</h2>
    <p>表示两种相互对立的状态间的切换，多用于触发「开」或「关」。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="demo-row">
        <cc-switch v-model="value1" />
        <span class="demo-text">当前值: {{ value1 }}</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用状态</span>
      </template>
      <div class="demo-row">
        <cc-switch v-model="value2" disabled />
        <cc-switch v-model="value3" />
        <span class="demo-text">当前值: {{ value3 }}</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>不同尺寸</span>
      </template>
      <div class="demo-column">
        <div class="demo-row">
          <span class="demo-label">large:</span>
          <cc-switch v-model="value4" size="large" />
        </div>
        <div class="demo-row">
          <span class="demo-label">default:</span>
          <cc-switch v-model="value5" />
        </div>
        <div class="demo-row">
          <span class="demo-label">small:</span>
          <cc-switch v-model="value6" size="small" />
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>文字描述</span>
      </template>
      <div class="demo-column">
        <div class="demo-row">
          <cc-switch
            v-model="value7"
            active-text="按月付费"
            inactive-text="按年付费"
          />
        </div>
        <div class="demo-row">
          <cc-switch
            v-model="value8"
            active-text="开启"
            inactive-text="关闭"
          />
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>扩展的 value 类型</span>
      </template>
      <div class="demo-row">
        <cc-switch
          v-model="value9"
          active-value="100"
          inactive-value="0"
        />
        <span class="demo-text">当前值: {{ value9 }}</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>加载状态</span>
      </template>
      <div class="demo-row">
        <cc-switch v-model="value10" loading />
        <cc-switch v-model="value11" loading disabled />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>阻止关闭</span>
      </template>
      <div class="demo-row">
        <cc-switch
          v-model="value12"
          :before-change="beforeChange"
        />
        <span class="demo-text">当前值: {{ value12 }}</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义颜色</span>
      </template>
      <div class="demo-row">
        <cc-switch
          v-model="value13"
          active-color="#13ce66"
          inactive-color="#ff4949"
        />
        <cc-switch
          v-model="value14"
          active-color="#67c23a"
          inactive-color="#f56c6c"
          active-text="开"
          inactive-text="关"
        />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="demo-row">
        <cc-switch v-model="value15" @change="handleChange" />
        <div class="event-log">
          <p>当前值: {{ value15 }}</p>
          <p>事件日志: {{ eventLog || '无' }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import CcSwitch from '@/components/Switch/index.vue'

const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(false)
const value4 = ref(true)
const value5 = ref(false)
const value6 = ref(true)
const value7 = ref(true)
const value8 = ref(true)
const value9 = ref('100')
const value10 = ref(true)
const value11 = ref(false)
const value12 = ref(true)
const value13 = ref(true)
const value14 = ref(true)
const value15 = ref(true)
const eventLog = ref('')

const beforeChange = () => {
  return new Promise((resolve) => {
    ElMessage.info('阻止关闭')
    resolve(false)
  })
}

const handleChange = (value: boolean | string | number) => {
  eventLog.value = `change 事件触发，值为: ${value}`
}
</script>

<style scoped>
.switch-demo {
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
