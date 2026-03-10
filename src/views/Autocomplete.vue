<template>
  <div class="autocomplete-demo">
    <h2>Autocomplete 自动补全输入框</h2>
    <p>获得输入建议的自动补全输入框。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="demo-row">
        <cc-autocomplete
          v-model="state1"
          :fetch-suggestions="querySearch"
          clearable
          placeholder="请输入内容"
          @select="handleSelect"
        />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用状态</span>
      </template>
      <div class="demo-row">
        <cc-autocomplete v-model="state2" disabled placeholder="禁用状态" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>可清空</span>
      </template>
      <div class="demo-row">
        <cc-autocomplete
          v-model="state3"
          :fetch-suggestions="querySearch"
          clearable
          placeholder="可清空"
        />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义模板</span>
      </template>
      <div class="demo-row">
        <cc-autocomplete
          v-model="state4"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
        >
          <template #default="{ item }">
            <div class="custom-item">
              <span class="name">{{ item.value }}</span>
              <span class="addr">{{ item.address }}</span>
            </div>
          </template>
        </cc-autocomplete>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>远程搜索</span>
      </template>
      <div class="demo-row">
        <cc-autocomplete
          v-model="state5"
          :fetch-suggestions="querySearchAsync"
          placeholder="请输入内容(模拟异步)"
          @select="handleSelect"
        />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>输入长度限制</span>
      </template>
      <div class="demo-row">
        <cc-autocomplete
          v-model="state6"
          :fetch-suggestions="querySearch"
          :maxlength="20"
          show-word-limit
          placeholder="最多输入20个字符"
        />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="demo-row">
        <cc-autocomplete
          v-model="state7"
          :fetch-suggestions="querySearch"
          placeholder="请输入内容"
          @focus="handleFocus"
          @blur="handleBlur"
          @clear="handleClear"
          @select="handleSelectEvent"
        />
        <div class="event-log">
          <p>选中项: {{ selectedValue || '无' }}</p>
          <p>事件日志: {{ eventLog || '无' }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CcAutocomplete from '@/components/Autocomplete/index.vue'

interface RestaurantItem {
  value: string
  address: string
}

const state1 = ref('')
const state2 = ref('')
const state3 = ref('')
const state4 = ref('')
const state5 = ref('')
const state6 = ref('')
const state7 = ref('')
const selectedValue = ref('')
const eventLog = ref('')

const restaurants = ref<RestaurantItem[]>([])

const loadAll = (): RestaurantItem[] => {
  return [
    { value: '三全鲜食（北新泾店）', address: '长宁区新渔路144号' },
    { value: 'Hot honey 首尔炸鸡（仙霞路）', address: '上海市长宁区淞虹路661号' },
    { value: '新旺角茶餐厅', address: '上海市普陀区真北路988号创展大厦6层' },
    { value: '泷千家（天山西路店）', address: '天山西路438号' },
    { value: '胖仙女纸杯蛋糕（上海凌空店）', address: '上海市长宁区金钟路968号1幢18号楼一层商铺18-101' },
    { value: '贡茶', address: '上海市长宁区金钟路633号' },
    { value: '豪大大香鸡排超级奶爸', address: '上海市嘉定区曹安公路曹安路1685号' },
    { value: '茶芝道（中环百联店）', address: '上海市普陀区真光路150号' },
    { value: '十二泷町', address: '上海市北翟路1444弄81号B幢-107' },
    { value: '星源浓缩咖啡', address: '上海市长宁区金钟路968号' },
    { value: '阿姨奶茶/豪大大', address: '嘉定区曹安路1611号' },
    { value: '新麦甜四季甜品炸鸡', address: '嘉定区曹安公路2383弄' },
    { value: 'Monica摩托主题咖啡店', address: '嘉定区曹安公路2383弄' },
    { value: '浮生咖啡', address: '上海市普陀区真光路150号' },
    { value: 'NONO JUICE  鲜榨果汁', address: '上海市普陀区真光路150号' },
    { value: 'CoCo都可(北新泾店）', address: '上海市长宁区金钟路968号' },
    { value: '快乐柠檬（神州智慧店）', address: '上海市长宁区金钟路968号' },
    { value: '保罗培根', address: '上海市普陀区真光路150号' },
    { value: '西北郎烧烤', address: '上海市普陀区真光路150号' }
  ]
}

onMounted(() => {
  restaurants.value = loadAll()
})

const querySearch = (queryString: string, cb: (results: RestaurantItem[]) => void) => {
  const results = queryString
    ? restaurants.value.filter(item => item.value.toLowerCase().includes(queryString.toLowerCase()))
    : restaurants.value
  cb(results)
}

const querySearchAsync = (queryString: string, cb: (results: RestaurantItem[]) => void) => {
  const results = queryString
    ? restaurants.value.filter(item => item.value.toLowerCase().includes(queryString.toLowerCase()))
    : restaurants.value
  setTimeout(() => {
    cb(results)
  }, 500)
}

const handleSelect = (item: RestaurantItem) => {
  console.log(item)
}

const handleFocus = () => {
  eventLog.value = 'focus 事件触发'
}

const handleBlur = () => {
  eventLog.value = 'blur 事件触发'
}

const handleClear = () => {
  eventLog.value = 'clear 事件触发'
  selectedValue.value = ''
}

const handleSelectEvent = (item: RestaurantItem) => {
  eventLog.value = 'select 事件触发'
  selectedValue.value = item.value
}
</script>

<style scoped>
.autocomplete-demo {
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

.demo-row > :first-child {
  width: 400px;
}

.custom-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
}

.name {
  font-weight: 500;
}

.addr {
  color: #999;
  font-size: 12px;
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
