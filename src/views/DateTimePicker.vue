<template>
  <div class="date-time-picker-demo">
    <h2>DateTimePicker 日期时间选择器</h2>
    <p>用于选择或输入日期时间。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="demo-row">
        <cc-date-time-picker
          v-model="state1"
          placeholder="选择日期时间"
          style="width: 300px"
        />
        <p>选中的日期时间: {{ state1 || '无' }}</p>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>带快捷选项</span>
      </template>
      <div class="demo-row">
        <cc-date-time-picker
          v-model="state2"
          placeholder="选择日期时间"
          :shortcuts="shortcuts"
          style="width: 300px"
        />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>设置默认时间</span>
      </template>
      <div class="demo-row">
        <cc-date-time-picker
          v-model="state3"
          placeholder="选择日期时间"
          :default-time="defaultTime"
          style="width: 300px"
        />
        <p>默认时间设置为: 12:00:00</p>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>日期时间格式</span>
      </template>
      <div class="demo-row">
        <div class="demo-item">
          <span>默认:</span>
          <cc-date-time-picker
            v-model="state4"
            placeholder="选择日期时间"
            style="width: 300px"
          />
        </div>
        <div class="demo-item">
          <span>自定义格式:</span>
          <cc-date-time-picker
            v-model="state5"
            placeholder="选择日期时间"
            format="YYYY/MM/DD HH:mm:ss"
            value-format="YYYY-MM-DD HH:mm:ss"
            style="width: 300px"
          />
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>日期时间范围</span>
      </template>
      <div class="demo-row">
        <div class="demo-item">
          <span>默认:</span>
          <cc-date-time-picker
            v-model="state6"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期时间"
            end-placeholder="结束日期时间"
            style="width: 400px"
          />
        </div>
        <div class="demo-item">
          <span>带快捷选项:</span>
          <cc-date-time-picker
            v-model="state7"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期时间"
            end-placeholder="结束日期时间"
            :shortcuts="rangeShortcuts"
            style="width: 400px"
          />
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>默认值</span>
      </template>
      <div class="demo-row">
        <cc-date-time-picker
          v-model="state8"
          placeholder="选择日期时间"
          :default-value="defaultDate"
          style="width: 300px"
        />
        <p>默认日期: 2010年10月1日 12:00:00</p>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>日期时间限制</span>
      </template>
      <div class="demo-row">
        <div class="demo-item">
          <span>禁止选择今天之后的日期:</span>
          <cc-date-time-picker
            v-model="state9"
            placeholder="选择日期时间"
            :disabled-date="disabledDate1"
            style="width: 300px"
          />
        </div>
        <div class="demo-item">
          <span>只能选择今天及以后的日期:</span>
          <cc-date-time-picker
            v-model="state10"
            placeholder="选择日期时间"
            :disabled-date="disabledDate2"
            style="width: 300px"
          />
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用状态</span>
      </template>
      <div class="demo-row">
        <cc-date-time-picker
          v-model="state11"
          placeholder="选择日期时间"
          disabled
          style="width: 300px"
        />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>可清空</span>
      </template>
      <div class="demo-row">
        <cc-date-time-picker
          v-model="state12"
          placeholder="选择日期时间"
          clearable
          style="width: 300px"
        />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>尺寸</span>
      </template>
      <div class="demo-row">
        <cc-date-time-picker
          v-model="state13"
          placeholder="默认尺寸"
          size="default"
          style="width: 300px"
        />
        <cc-date-time-picker
          v-model="state14"
          placeholder="大尺寸"
          size="large"
          style="width: 300px"
        />
        <cc-date-time-picker
          v-model="state15"
          placeholder="小尺寸"
          size="small"
          style="width: 300px"
        />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>输入框可编辑</span>
      </template>
      <div class="demo-row">
        <div class="demo-item">
          <span>可编辑（可手动输入日期时间）:</span>
          <cc-date-time-picker
            v-model="state16"
            placeholder="选择日期时间"
            editable
            style="width: 300px"
          />
        </div>
        <div class="demo-item">
          <span>不可编辑（只能选择日期时间）:</span>
          <cc-date-time-picker
            v-model="state17"
            placeholder="选择日期时间"
            :editable="false"
            style="width: 300px"
          />
        </div>
      </div>
      <p style="color: #909399; font-size: 13px; margin-top: 12px;">
        提示：可编辑时可以直接在输入框中输入日期时间文本；不可编辑时只能通过日期时间选择器选择
      </p>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="demo-row">
        <cc-date-time-picker
          v-model="state18"
          placeholder="选择日期时间"
          style="width: 300px"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
          @visible-change="handleVisibleChange"
        />
        <div class="event-log">
          <p>选中的值: {{ state18 || '无' }}</p>
          <p>事件日志: {{ eventLog || '无' }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CcDateTimePicker from '@/components/DateTimePicker/index.vue'

const state1 = ref('')
const state2 = ref('')
const state3 = ref('')
const state4 = ref('')
const state5 = ref('')
const state6 = ref([])
const state7 = ref([])
const state8 = ref('')
const state9 = ref('')
const state10 = ref('')
const state11 = ref('')
const state12 = ref('')
const state13 = ref('')
const state14 = ref('')
const state15 = ref('')
const state16 = ref('')
const state17 = ref('')
const state18 = ref('')
const eventLog = ref('')

const defaultTime = new Date(2000, 1, 1, 12, 0, 0)
const defaultDate = new Date(2010, 9, 1, 12, 0, 0)

const shortcuts = [
  {
    text: '今天',
    value: new Date(),
  },
  {
    text: '昨天',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
  {
    text: '一周前',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    },
  },
]

const rangeShortcuts = [
  {
    text: '最近一周',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
      return [start, end]
    },
  },
  {
    text: '最近一个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
      return [start, end]
    },
  },
  {
    text: '最近三个月',
    value: () => {
      const end = new Date()
      const start = new Date()
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
      return [start, end]
    },
  },
]

const disabledDate1 = (time: Date) => {
  return time.getTime() > Date.now()
}

const disabledDate2 = (time: Date) => {
  return time.getTime() < Date.now() - 8.64e7
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
.date-time-picker-demo {
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
  min-width: 180px;
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
