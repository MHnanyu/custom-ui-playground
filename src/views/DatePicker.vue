<template>
  <div class="date-picker-demo">
    <h2>DatePicker 日期选择器</h2>
    <p>用于选择或输入日期。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="demo-row">
        <cc-date-picker
          v-model="state1"
          type="date"
          placeholder="选择日期"
          style="width: 240px"
        />
        <p>选中的日期: {{ state1 || '无' }}</p>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>其他日期单位</span>
      </template>
      <div class="demo-row">
        <div class="demo-item">
          <span>周:</span>
          <cc-date-picker
            v-model="state2"
            type="week"
            format="[Week] ww"
            placeholder="选择周"
            style="width: 240px"
          />
        </div>
        <div class="demo-item">
          <span>月:</span>
          <cc-date-picker
            v-model="state3"
            type="month"
            placeholder="选择月"
            style="width: 240px"
          />
        </div>
        <div class="demo-item">
          <span>年:</span>
          <cc-date-picker
            v-model="state4"
            type="year"
            placeholder="选择年"
            style="width: 240px"
          />
        </div>
        <div class="demo-item">
          <span>多个日期:</span>
          <cc-date-picker
            v-model="state5"
            type="dates"
            placeholder="选择一个或多个日期"
            style="width: 240px"
          />
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>日期格式</span>
      </template>
      <div class="demo-row">
        <div class="demo-item">
          <span>默认:</span>
          <cc-date-picker
            v-model="state6"
            type="date"
            placeholder="选择日期"
            style="width: 240px"
          />
        </div>
        <div class="demo-item">
          <span>自定义格式:</span>
          <cc-date-picker
            v-model="state7"
            type="date"
            placeholder="选择日期"
            format="YYYY/MM/DD"
            value-format="YYYY-MM-DD"
            style="width: 240px"
          />
        </div>
        <div class="demo-item">
          <span>时间戳:</span>
          <cc-date-picker
            v-model="state8"
            type="date"
            placeholder="选择日期"
            value-format="x"
            style="width: 240px"
          />
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>日期时间选择</span>
      </template>
      <div class="demo-row">
        <div class="demo-item">
          <span>默认:</span>
          <cc-date-picker
            v-model="state9"
            type="datetime"
            placeholder="选择日期时间"
            style="width: 300px"
          />
        </div>
        <div class="demo-item">
          <span>带快捷选项:</span>
          <cc-date-picker
            v-model="state10"
            type="datetime"
            placeholder="选择日期时间"
            :shortcuts="shortcuts"
            style="width: 300px"
          />
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>日期范围</span>
      </template>
      <div class="demo-row">
        <div class="demo-item">
          <span>默认:</span>
          <cc-date-picker
            v-model="state11"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            style="width: 350px"
          />
        </div>
        <div class="demo-item">
          <span>带快捷选项:</span>
          <cc-date-picker
            v-model="state12"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :shortcuts="rangeShortcuts"
            style="width: 350px"
          />
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>月份范围</span>
      </template>
      <div class="demo-row">
        <cc-date-picker
          v-model="state13"
          type="monthrange"
          range-separator="至"
          start-placeholder="开始月份"
          end-placeholder="结束月份"
          style="width: 350px"
        />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>日期限制</span>
      </template>
      <div class="demo-row">
        <div class="demo-item">
          <span>禁止选择今天之后的日期:</span>
          <cc-date-picker
            v-model="state14"
            type="date"
            placeholder="选择日期"
            :disabled-date="disabledDate1"
            style="width: 240px"
          />
        </div>
        <div class="demo-item">
          <span>只能选择今天及以后的日期:</span>
          <cc-date-picker
            v-model="state15"
            type="date"
            placeholder="选择日期"
            :disabled-date="disabledDate2"
            style="width: 240px"
          />
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用状态</span>
      </template>
      <div class="demo-row">
        <cc-date-picker
          v-model="state16"
          type="date"
          placeholder="选择日期"
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
        <cc-date-picker
          v-model="state17"
          type="date"
          placeholder="选择日期"
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
        <cc-date-picker
          v-model="state18"
          type="date"
          placeholder="默认尺寸"
          size="default"
          style="width: 240px"
        />
        <cc-date-picker
          v-model="state19"
          type="date"
          placeholder="大尺寸"
          size="large"
          style="width: 240px"
        />
        <cc-date-picker
          v-model="state20"
          type="date"
          placeholder="小尺寸"
          size="small"
          style="width: 240px"
        />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>输入框可编辑</span>
      </template>
      <div class="demo-row">
        <div class="demo-item">
          <span>可编辑（可手动输入日期）:</span>
          <cc-date-picker
            v-model="state21"
            type="date"
            placeholder="选择日期"
            editable
            style="width: 240px"
          />
        </div>
        <div class="demo-item">
          <span>不可编辑（只能选择日期）:</span>
          <cc-date-picker
            v-model="state22"
            type="date"
            placeholder="选择日期"
            :editable="false"
            style="width: 240px"
          />
        </div>
      </div>
      <p style="color: #909399; font-size: 13px; margin-top: 12px;">
        提示：可编辑时可以直接在输入框中输入日期文本；不可编辑时只能通过日期选择器选择日期
      </p>
    </el-card>

    <!-- <el-card class="section">
      <template #header>
        <span>自定义内容</span>
      </template>
      <div class="demo-row">
        <cc-date-picker v-model="state23" type="date" placeholder="选择日期" style="width: 240px">
          <template #default="{ date }">
            <div class="custom-cell">
              {{ date?.getDate() || '' }}
            </div>
          </template>
        </cc-date-picker>
      </div>
    </el-card> -->

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="demo-row">
        <cc-date-picker
          v-model="state24"
          type="date"
          placeholder="选择日期"
          style="width: 240px"
          @change="handleChange"
          @focus="handleFocus"
          @blur="handleBlur"
          @visible-change="handleVisibleChange"
        />
        <div class="event-log">
          <p>选中的值: {{ state24 || '无' }}</p>
          <p>事件日志: {{ eventLog || '无' }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CcDatePicker from '@/components/DatePicker/index.vue'

const state1 = ref('')
const state2 = ref('')
const state3 = ref('')
const state4 = ref('')
const state5 = ref([])
const state6 = ref('')
const state7 = ref('')
const state8 = ref('')
const state9 = ref('')
const state10 = ref('')
const state11 = ref([])
const state12 = ref([])
const state13 = ref([])
const state14 = ref('')
const state15 = ref('')
const state16 = ref('')
const state17 = ref('')
const state18 = ref('')
const state19 = ref('')
const state20 = ref('')
const state21 = ref('')
const state22 = ref('')
const state23 = ref('')
const state24 = ref('')
const eventLog = ref('')

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
.date-picker-demo {
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
  min-width: 140px;
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

.custom-cell {
  height: 30px;
  padding: 0;
  line-height: 30px;
}
</style>
