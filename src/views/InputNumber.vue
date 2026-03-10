<template>
  <div class="input-number-demo">
    <h2>InputNumber 数字输入框</h2>
    <p>仅允许输入标准的数字值，可自定义范围。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="demo-row">
        <cc-input-number v-model="num1" :min="1" :max="10" />
        <span class="demo-text">当前值: {{ num1 }}</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用状态</span>
      </template>
      <div class="demo-row">
        <cc-input-number v-model="num2" disabled />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>步进</span>
      </template>
      <div class="demo-row">
        <cc-input-number v-model="num3" :step="2" />
        <span class="demo-text">步进为 2</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>严格步进</span>
      </template>
      <div class="demo-row">
        <cc-input-number v-model="num4" :step="2" step-strictly />
        <span class="demo-text">只能输入步进的倍数</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>精度</span>
      </template>
      <div class="demo-row">
        <cc-input-number v-model="num5" :precision="2" :step="0.1" :max="10" />
        <span class="demo-text">精度为 2 位小数</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>不同尺寸</span>
      </template>
      <div class="demo-row">
        <cc-input-number v-model="num6" size="large" />
        <cc-input-number v-model="num7" />
        <cc-input-number v-model="num8" size="small" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>按钮位置</span>
      </template>
      <div class="demo-row">
        <cc-input-number v-model="num9" controls-position="right" />
        <span class="demo-text">按钮在右侧</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>无控制按钮</span>
      </template>
      <div class="demo-row">
        <cc-input-number v-model="num10" :controls="false" />
        <span class="demo-text">隐藏控制按钮</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义按钮图标</span>
      </template>
      <div class="demo-row">
        <cc-input-number v-model="num11" :min="1" :max="10">
          <template #decrease>
            <el-icon><Minus /></el-icon>
          </template>
          <template #increase>
            <el-icon><Plus /></el-icon>
          </template>
        </cc-input-number>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>前缀和后缀</span>
      </template>
      <div class="demo-row">
        <cc-input-number v-model="price" :precision="2">
          <template #prefix>¥</template>
          <template #suffix>元</template>
        </cc-input-number>
        <span class="demo-text">价格: ¥{{ price }} 元</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="demo-row">
        <cc-input-number
          v-model="num12"
          :min="1"
          :max="100"
          @focus="handleFocus"
          @blur="handleBlur"
          @change="handleChange"
        />
        <div class="event-log">
          <p>当前值: {{ num12 }}</p>
          <p>事件日志: {{ eventLog || '无' }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Minus, Plus } from '@element-plus/icons-vue'
import CcInputNumber from '@/components/InputNumber/index.vue'

const num1 = ref(1)
const num2 = ref(5)
const num3 = ref(0)
const num4 = ref(2)
const num5 = ref(0)
const num6 = ref(1)
const num7 = ref(1)
const num8 = ref(1)
const num9 = ref(0)
const num10 = ref(0)
const num11 = ref(1)
const price = ref(100)
const num12 = ref(1)
const eventLog = ref('')

const handleFocus = () => {
  eventLog.value = 'focus 事件触发'
}

const handleBlur = () => {
  eventLog.value = 'blur 事件触发'
}

const handleChange = (value: number) => {
  eventLog.value = `change 事件触发，值为: ${value}`
}
</script>

<style scoped>
.input-number-demo {
  max-width: 1200px;
  margin: 0 auto;
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
