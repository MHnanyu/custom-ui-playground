<template>
  <div class="transfer-demo">
    <h2>Transfer 穿梭框</h2>
    <p>双栏穿梭选择框，常用于将数据从一个容器移动到另一个容器。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="demo-row">
        <cc-transfer v-model="value1" :data="data" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>可搜索</span>
      </template>
      <div class="demo-row">
        <cc-transfer
          v-model="value2"
          :data="data"
          filterable
          filter-placeholder="请输入搜索内容"
        />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义标题</span>
      </template>
      <div class="demo-row">
        <cc-transfer
          v-model="value3"
          :data="data"
          :titles="['源列表', '目标列表']"
        />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义按钮文案</span>
      </template>
      <div class="demo-row">
        <cc-transfer
          v-model="value4"
          :data="data"
          :button-texts="['到左边', '到右边']"
        />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用状态</span>
      </template>
      <div class="demo-row">
        <cc-transfer v-model="value5" :data="data" disabled />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="demo-row">
        <cc-transfer
          v-model="value6"
          :data="data"
          @change="handleChange"
          @left-check-change="handleLeftCheckChange"
          @right-check-change="handleRightCheckChange"
        />
        <div class="event-log">
          <p>当前值: {{ value6.join(', ') || '无' }}</p>
          <p>事件日志: {{ eventLog || '无' }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CcTransfer from '@/components/Transfer/index.vue'

const generateData = () => {
  const data = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i.toString(),
      label: `选项 ${i}`,
      disabled: i % 4 === 0
    })
  }
  return data
}

const data = ref(generateData())
const value1 = ref(['1', '4'])
const value2 = ref([])
const value3 = ref([])
const value4 = ref([])
const value5 = ref(['1', '4'])
const value6 = ref(['1', '4'])
const eventLog = ref('')

const handleChange = (value: any, direction: string, movedKeys: any) => {
  eventLog.value = `change 事件触发，值: ${value.join(', ')}，方向: ${direction}，移动的键: ${movedKeys.join(', ')}`
}

const handleLeftCheckChange = (value: any, movedKeys: any) => {
  eventLog.value = `left-check-change 事件触发，选中值: ${value.join(', ')}，变动的键: ${movedKeys.join(', ')}`
}

const handleRightCheckChange = (value: any, movedKeys: any) => {
  eventLog.value = `right-check-change 事件触发，选中值: ${value.join(', ')}，变动的键: ${movedKeys.join(', ')}`
}
</script>

<style scoped>
.transfer-demo {
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  margin-bottom: 20px;
}

.demo-row {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
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
