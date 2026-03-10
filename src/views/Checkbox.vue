<template>
  <div class="checkbox-demo">
    <h2>Checkbox 多选框</h2>
    <p>多选框组件，用于在一组选项中进行多项选择。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="demo-row">
        <cc-checkbox v-model="checked">选项</cc-checkbox>
        <p>当前状态: {{ checked }}</p>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用状态</span>
      </template>
      <div class="demo-row">
        <cc-checkbox v-model="checked1" disabled>禁用状态（选中）</cc-checkbox>
        <cc-checkbox v-model="checked2" disabled>禁用状态（未选中）</cc-checkbox>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>多选框组</span>
      </template>
      <div class="demo-row">
        <cc-checkbox-group v-model="checkList">
          <cc-checkbox label="Option A" />
          <cc-checkbox label="Option B" />
          <cc-checkbox label="Option C" />
          <cc-checkbox label="Option D" disabled />
        </cc-checkbox-group>
        <p>当前选中: {{ checkList }}</p>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>中间状态（全选示例）</span>
      </template>
      <div class="demo-row">
        <cc-checkbox
          v-model="checkAll"
          :indeterminate="isIndeterminate"
          @change="handleCheckAllChange"
        >
          全选
        </cc-checkbox>
        <el-divider />
        <cc-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
          <cc-checkbox v-for="city in cities" :key="city" :label="city">
            {{ city }}
          </cc-checkbox>
        </cc-checkbox-group>
        <p>当前选中: {{ checkedCities }}</p>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>可选项目数量限制（最少1个，最多3个）</span>
      </template>
      <div class="demo-row">
        <cc-checkbox-group v-model="checkedCities1" :min="1" :max="3">
          <cc-checkbox v-for="city in cities" :key="city" :label="city">
            {{ city }}
          </cc-checkbox>
        </cc-checkbox-group>
        <p>当前选中: {{ checkedCities1 }}</p>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>按钮样式</span>
      </template>
      <div class="demo-row">
        <cc-checkbox-group v-model="checkboxGroup1">
          <cc-checkbox-button v-for="city in cities" :key="city" :label="city">
            {{ city }}
          </cc-checkbox-button>
        </cc-checkbox-group>
        <p>当前选中: {{ checkboxGroup1 }}</p>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>带有边框</span>
      </template>
      <div class="demo-row">
        <cc-checkbox-group v-model="checkboxGroup2">
          <cc-checkbox v-for="city in cities" :key="city" :label="city" border>
            {{ city }}
          </cc-checkbox>
        </cc-checkbox-group>
        <p>当前选中: {{ checkboxGroup2 }}</p>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>不同尺寸</span>
      </template>
      <div class="demo-row">
        <div class="size-demo">
          <p>Large 尺寸：</p>
          <cc-checkbox v-model="size1" size="large" border>Large</cc-checkbox>
        </div>
        <div class="size-demo">
          <p>Default 尺寸：</p>
          <cc-checkbox v-model="size2" border>Default</cc-checkbox>
        </div>
        <div class="size-demo">
          <p>Small 尺寸：</p>
          <cc-checkbox v-model="size3" size="small" border>Small</cc-checkbox>
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="demo-row">
        <cc-checkbox v-model="eventTest" @change="handleChange">触发 change 事件</cc-checkbox>
        <div class="event-log">
          <p>事件日志: {{ eventLog || '无' }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CcCheckbox from '@/components/Checkbox/index.vue'
import CcCheckboxGroup from '@/components/Checkbox/Group.vue'
import CcCheckboxButton from '@/components/Checkbox/Button.vue'

const checked = ref(true)
const checked1 = ref(true)
const checked2 = ref(false)

const checkList = ref(['Option A', 'Option B'])

const checkAll = ref(false)
const isIndeterminate = ref(true)
const cities = ['北京', '上海', '广州', '深圳']
const checkedCities = ref(['上海', '深圳'])

const handleCheckAllChange = (val: boolean) => {
  checkedCities.value = val ? cities : []
  isIndeterminate.value = false
}

const handleCheckedCitiesChange = (value: string[]) => {
  const checkedCount = value.length
  checkAll.value = checkedCount === cities.length
  isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length
}

const checkedCities1 = ref(['上海', '深圳'])

const checkboxGroup1 = ref(['上海'])
const checkboxGroup2 = ref(['上海'])

const size1 = ref(true)
const size2 = ref(true)
const size3 = ref(true)

const eventTest = ref(false)
const eventLog = ref('')

const handleChange = (val: boolean) => {
  eventLog.value = `change 事件触发，当前值: ${val}`
}
</script>

<style scoped>
.checkbox-demo {
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

.size-demo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.size-demo p {
  margin: 0;
  width: 120px;
  color: #606266;
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
