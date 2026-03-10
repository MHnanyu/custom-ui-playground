<template>
  <div class="time-picker-demo">
    <h2>TimePicker 时间选择器</h2>
    <p>用于选择时间。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="demo-row">
        <cc-time-picker
          v-model="state1"
          placeholder="选择时间"
          style="width: 240px"
        />
        <p>选中的时间: {{ state1 || '无' }}</p>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>固定时间点</span>
      </template>
      <div class="demo-row">
        <div class="demo-item">
          <span>禁止选择特定小时:</span>
          <cc-time-picker
            v-model="state2"
            placeholder="选择时间"
            :disabled-hours="disabledHours"
            style="width: 240px"
          />
        </div>
        <div class="demo-item">
          <span>禁止选择特定分钟:</span>
          <cc-time-picker
            v-model="state3"
            placeholder="选择时间"
            :disabled-minutes="disabledMinutes"
            style="width: 240px"
          />
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>时间范围</span>
      </template>
      <div class="demo-row">
        <div class="demo-item">
          <span>默认范围选择:</span>
          <cc-time-picker
            v-model="state4"
            is-range
            range-separator="至"
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            style="width: 350px"
          />
        </div>
      </div>
      <p>选中的时间范围: {{ state4 ? `${state4[0]} - ${state4[1]}` : '无' }}</p>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>箭头控制</span>
      </template>
      <div class="demo-row">
        <cc-time-picker
          v-model="state5"
          placeholder="选择时间"
          arrow-control
          style="width: 240px"
        />
        <p>选中的时间: {{ state5 || '无' }}</p>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>时间格式</span>
      </template>
      <div class="demo-row">
        <div class="demo-item">
          <span>默认 (HH:mm:ss):</span>
          <cc-time-picker
            v-model="state6"
            placeholder="选择时间"
            style="width: 240px"
          />
        </div>
        <div class="demo-item">
          <span>仅小时分钟:</span>
          <cc-time-picker
            v-model="state7"
            placeholder="选择时间"
            format="HH:mm"
            style="width: 180px"
          />
        </div>
        <div class="demo-item">
          <span>时间戳:</span>
          <cc-time-picker
            v-model="state8"
            placeholder="选择时间"
            value-format="x"
            style="width: 240px"
          />
          <span style="color: #909399; font-size: 13px;">(时间戳: {{ state8 }})</span>
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用状态</span>
      </template>
      <div class="demo-row">
        <cc-time-picker
          v-model="state9"
          placeholder="选择时间"
          disabled
          style="width: 240px"
        />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>可清空</span>
      </template>
      <div class="demo-row">
        <cc-time-picker
          v-model="state10"
          placeholder="选择时间"
          clearable
          style="width: 240px"
        />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>尺寸</span>
      </template>
      <div class="demo-row">
        <div class="demo-item">
          <span>默认尺寸:</span>
          <cc-time-picker
            v-model="state11"
            placeholder="选择时间"
            style="width: 240px"
          />
        </div>
        <div class="demo-item">
          <span>大尺寸:</span>
          <cc-time-picker
            v-model="state12"
            placeholder="选择时间"
            size="large"
            style="width: 240px"
          />
        </div>
        <div class="demo-item">
          <span>小尺寸:</span>
          <cc-time-picker
            v-model="state13"
            placeholder="选择时间"
            size="small"
            style="width: 240px"
          />
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="demo-row">
        <cc-time-picker
          v-model="state14"
          placeholder="选择时间"
          style="width: 240px"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
          @visible-change="handleVisibleChange"
        />
        <div class="event-log">
          <p>选中的值: {{ state14 || '无' }}</p>
          <p>事件日志: {{ eventLog || '无' }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CcTimePicker from '@/components/TimePicker/index.vue'

const state1 = ref('')
const state2 = ref('')
const state3 = ref('')
const state4 = ref([])
const state5 = ref('')
const state6 = ref('')
const state7 = ref('')
const state8 = ref('')
const state9 = ref('')
const state10 = ref('')
const state11 = ref('')
const state12 = ref('')
const state13 = ref('')
const state14 = ref('')
const eventLog = ref('')

// 禁止选择 1, 5, 10, 15, 20, 23 点
const disabledHours = () => {
  return [1, 5, 10, 15, 20, 23]
}

// 禁止选择 10, 20, 30, 40, 50 分
const disabledMinutes = () => {
  return [10, 20, 30, 40, 50]
}

const handleChange = (value: any) => {
  eventLog.value = `change 事件触发，值: ${value}`
}

const handleFocus = (event: FocusEvent) => {
  eventLog.value = 'focus 事件触发'
}

const handleBlur = (event: FocusEvent) => {
  eventLog.value = 'blur 事件触发'
}

const handleVisibleChange = (visible: boolean) => {
  eventLog.value = `visible-change 事件触发，可见性: ${visible}`
}
</script>

<style scoped>
.time-picker-demo {
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

.demo-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.demo-item span {
  min-width: 100px;
  color: #606266;
  font-size: 14px;
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
