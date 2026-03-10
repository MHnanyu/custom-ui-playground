<template>
  <div class="input-tag-demo">
    <h2>InputTag 输入框标签</h2>
    <p>用于输入多个标签的输入框组件。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="demo-row">
        <cc-input-tag v-model="tags1" placeholder="请输入标签" />
        <span class="demo-text">当前标签: {{ tags1.join(', ') || '无' }}</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用状态</span>
      </template>
      <div class="demo-row">
        <cc-input-tag v-model="tags2" disabled placeholder="禁用状态" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>只读状态</span>
      </template>
      <div class="demo-row">
        <cc-input-tag v-model="tags3" readonly placeholder="只读状态" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>可清空</span>
      </template>
      <div class="demo-row">
        <cc-input-tag v-model="tags4" clearable placeholder="可清空" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>最大标签数</span>
      </template>
      <div class="demo-row">
        <cc-input-tag v-model="tags5" :max="3" placeholder="最多3个标签" />
        <span class="demo-text">限制最多3个标签</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>标签类型</span>
      </template>
      <div class="demo-column">
        <div class="demo-row">
          <cc-input-tag v-model="tags6_1" tag-type="success" placeholder="success类型" />
        </div>
        <div class="demo-row">
          <cc-input-tag v-model="tags6_2" tag-type="info" placeholder="info类型" />
        </div>
        <div class="demo-row">
          <cc-input-tag v-model="tags6_3" tag-type="warning" placeholder="warning类型" />
        </div>
        <div class="demo-row">
          <cc-input-tag v-model="tags6_4" tag-type="danger" placeholder="danger类型" />
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>标签效果</span>
      </template>
      <div class="demo-column">
        <div class="demo-row">
          <cc-input-tag v-model="tags7_1" tag-effect="dark" placeholder="dark效果" />
        </div>
        <div class="demo-row">
          <cc-input-tag v-model="tags7_2" tag-effect="light" placeholder="light效果" />
        </div>
        <div class="demo-row">
          <cc-input-tag v-model="tags7_3" tag-effect="plain" placeholder="plain效果" />
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>触发方式</span>
      </template>
      <div class="demo-column">
        <div class="demo-row">
          <cc-input-tag v-model="tags8_1" trigger="Enter" placeholder="按Enter添加标签" />
          <span class="demo-text">按Enter键添加</span>
        </div>
        <div class="demo-row">
          <cc-input-tag v-model="tags8_2" trigger="Space" placeholder="按空格添加标签" />
          <span class="demo-text">按空格键添加</span>
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>不同尺寸</span>
      </template>
      <div class="demo-column">
        <div class="demo-row">
          <cc-input-tag v-model="tags9_1" size="large" placeholder="large 尺寸" />
        </div>
        <div class="demo-row">
          <cc-input-tag v-model="tags9_2" placeholder="默认尺寸" />
        </div>
        <div class="demo-row">
          <cc-input-tag v-model="tags9_3" size="small" placeholder="small 尺寸" />
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>前缀和后缀</span>
      </template>
      <div class="demo-row">
        <cc-input-tag v-model="tags10">
          <template #prefix>标签:</template>
          <template #suffix>个</template>
        </cc-input-tag>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="demo-row">
        <cc-input-tag
          v-model="tags11"
          clearable
          placeholder="请输入标签"
          @focus="handleFocus"
          @blur="handleBlur"
          @clear="handleClear"
          @change="handleChange"
        />
        <div class="event-log">
          <p>当前标签: {{ tags11.join(', ') || '无' }}</p>
          <p>事件日志: {{ eventLog || '无' }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CcInputTag from '@/components/InputTag/index.vue'

const tags1 = ref(['Tag 1', 'Tag 2'])
const tags2 = ref(['禁用标签'])
const tags3 = ref(['只读标签'])
const tags4 = ref(['可清空标签'])
const tags5 = ref(['标签1'])
const tags6_1 = ref(['成功'])
const tags6_2 = ref(['信息'])
const tags6_3 = ref(['警告'])
const tags6_4 = ref(['危险'])
const tags7_1 = ref(['深色'])
const tags7_2 = ref(['浅色'])
const tags7_3 = ref(['朴素'])
const tags8_1 = ref([])
const tags8_2 = ref([])
const tags9_1 = ref(['大尺寸'])
const tags9_2 = ref(['默认尺寸'])
const tags9_3 = ref(['小尺寸'])
const tags10 = ref(['Vue', 'React'])
const tags11 = ref(['测试'])
const eventLog = ref('')

const handleFocus = () => {
  eventLog.value = 'focus 事件触发'
}

const handleBlur = () => {
  eventLog.value = 'blur 事件触发'
}

const handleClear = () => {
  eventLog.value = 'clear 事件触发'
}

const handleChange = (value: string[]) => {
  eventLog.value = `change 事件触发，值为: ${value.join(', ')}`
}
</script>

<style scoped>
.input-tag-demo {
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

.demo-column {
  display: flex;
  flex-direction: column;
  gap: 10px;
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
