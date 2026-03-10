<template>
  <div class="time-select-demo">
    <h2>TimeSelect 时间选择</h2>
    <p>用于选择固定时间点。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="demo-row">
        <cc-time-select
          v-model="state1"
          placeholder="选择时间"
          style="width: 240px"
        />
        <p>选中的时间: {{ state1 || '无' }}</p>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>时间间隔</span>
      </template>
      <div class="demo-row">
        <div class="demo-item">
          <span>间隔 30 分钟:</span>
          <cc-time-select
            v-model="state2"
            placeholder="选择时间"
            :step="'00:30'"
            style="width: 200px"
          />
        </div>
        <div class="demo-item">
          <span>间隔 15 分钟:</span>
          <cc-time-select
            v-model="state3"
            placeholder="选择时间"
            :step="'00:15'"
            style="width: 200px"
          />
        </div>
        <div class="demo-item">
          <span>间隔 1 小时:</span>
          <cc-time-select
            v-model="state4"
            placeholder="选择时间"
            :step="'01:00'"
            style="width: 200px"
          />
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>起始和结束时间</span>
      </template>
      <div class="demo-row">
        <div class="demo-item">
          <span>工作时间 (08:30 - 18:30):</span>
          <cc-time-select
            v-model="state5"
            placeholder="选择时间"
            start="08:30"
            end="18:30"
            style="width: 200px"
          />
        </div>
        <div class="demo-item">
          <span>上午时段 (09:00 - 12:00):</span>
          <cc-time-select
            v-model="state6"
            placeholder="选择时间"
            start="09:00"
            end="12:00"
            :step="'00:30'"
            style="width: 200px"
          />
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用状态</span>
      </template>
      <div class="demo-row">
        <cc-time-select
          v-model="state7"
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
        <cc-time-select
          v-model="state8"
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
          <cc-time-select
            v-model="state9"
            placeholder="选择时间"
            style="width: 240px"
          />
        </div>
        <div class="demo-item">
          <span>大尺寸:</span>
          <cc-time-select
            v-model="state10"
            placeholder="选择时间"
            size="large"
            style="width: 240px"
          />
        </div>
        <div class="demo-item">
          <span>小尺寸:</span>
          <cc-time-select
            v-model="state11"
            placeholder="选择时间"
            size="small"
            style="width: 240px"
          />
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>时间格式</span>
      </template>
      <div class="demo-row">
        <div class="demo-item">
          <span>默认 (HH:mm:ss):</span>
          <cc-time-select
            v-model="state12"
            placeholder="选择时间"
            style="width: 240px"
          />
        </div>
        <div class="demo-item">
          <span>仅小时分钟:</span>
          <cc-time-select
            v-model="state13"
            placeholder="选择时间"
            format="HH:mm"
            style="width: 180px"
          />
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="demo-row">
        <cc-time-select
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
import CcTimeSelect from '@/components/TimeSelect/index.vue'

const state1 = ref('')
const state2 = ref('')
const state3 = ref('')
const state4 = ref('')
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
.time-select-demo {
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
  min-width: 120px;
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
