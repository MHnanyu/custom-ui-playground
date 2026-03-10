<template>
  <div class="select-demo">
    <h2>Select 选择器</h2>
    <p>当选项过多时，使用下拉菜单展示并选择内容。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="demo-row">
        <cc-select v-model="value1" placeholder="请选择">
          <cc-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </cc-select>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>有禁用选项</span>
      </template>
      <div class="demo-row">
        <cc-select v-model="value2" placeholder="请选择">
          <cc-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
            :disabled="item.disabled"
          />
        </cc-select>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用选择器</span>
      </template>
      <div class="demo-row">
        <cc-select v-model="value3" placeholder="请选择" disabled>
          <cc-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </cc-select>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>可清空</span>
      </template>
      <div class="demo-row">
        <cc-select v-model="value4" placeholder="请选择" clearable>
          <cc-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </cc-select>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>多选</span>
      </template>
      <div class="demo-row">
        <cc-select v-model="value5" multiple placeholder="请选择">
          <cc-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </cc-select>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>选择器尺寸</span>
      </template>
      <div class="demo-row">
        <cc-select v-model="value6" placeholder="请选择" size="large">
          <cc-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </cc-select>
        <cc-select v-model="value7" placeholder="请选择">
          <cc-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </cc-select>
        <cc-select v-model="value8" placeholder="请选择" size="small">
          <cc-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </cc-select>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>可搜索</span>
      </template>
      <div class="demo-row">
        <cc-select v-model="value9" placeholder="请选择" filterable>
          <cc-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </cc-select>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>分组</span>
      </template>
      <div class="demo-row">
        <cc-select v-model="value10" placeholder="请选择">
          <cc-option-group
            v-for="group in groupOptions"
            :key="group.label"
            :label="group.label"
          >
            <cc-option
              v-for="item in group.options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </cc-option-group>
        </cc-select>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="demo-row">
        <cc-select
          v-model="value11"
          placeholder="请选择"
          clearable
          @change="handleChange"
          @clear="handleClear"
          @visible-change="handleVisibleChange"
          @remove-tag="handleRemoveTag"
        >
          <cc-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </cc-select>
        <div class="event-log">
          <p>当前值: {{ value11 || '无' }}</p>
          <p>事件日志: {{ eventLog || '无' }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CcSelect from '@/components/Select/index.vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref([])
const value6 = ref('')
const value7 = ref('')
const value8 = ref('')
const value9 = ref('')
const value10 = ref('')
const value11 = ref('')
const eventLog = ref('')

const options = [
  { value: '选项1', label: '黄金糕' },
  { value: '选项2', label: '双皮奶', disabled: true },
  { value: '选项3', label: '蚵仔煎' },
  { value: '选项4', label: '龙须面' },
  { value: '选项5', label: '北京烤鸭' }
]

const groupOptions = [
  {
    label: '热门城市',
    options: [
      { value: 'Shanghai', label: '上海' },
      { value: 'Beijing', label: '北京' }
    ]
  },
  {
    label: '城市名',
    options: [
      { value: 'Chengdu', label: '成都' },
      { value: 'Shenzhen', label: '深圳' },
      { value: 'Guangzhou', label: '广州' },
      { value: 'Dalian', label: '大连' }
    ]
  }
]

const handleChange = (value: any) => {
  eventLog.value = `change 事件触发，值为: ${value}`
}

const handleClear = () => {
  eventLog.value = 'clear 事件触发'
}

const handleVisibleChange = (visible: boolean) => {
  eventLog.value = `visible-change 事件触发，下拉框${visible ? '显示' : '隐藏'}`
}

const handleRemoveTag = (tag: any) => {
  eventLog.value = `remove-tag 事件触发，移除的标签: ${tag}`
}
</script>

<style scoped>
.select-demo {
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

.demo-row{
  width: 400px;
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
