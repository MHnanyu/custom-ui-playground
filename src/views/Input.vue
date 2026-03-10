<template>
  <div class="input-demo">
    <h2>Input 输入框</h2>
    <p>通过鼠标或键盘输入内容。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="demo-row">
        <cc-input v-model="input1" placeholder="请输入内容" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用状态</span>
      </template>
      <div class="demo-row">
        <cc-input v-model="input2" disabled placeholder="禁用状态" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>可清空</span>
      </template>
      <div class="demo-row">
        <cc-input v-model="input3" clearable placeholder="可清空" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>密码输入框</span>
      </template>
      <div class="demo-row">
        <cc-input v-model="password" show-password placeholder="请输入密码" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>带图标的输入框</span>
      </template>
      <div class="demo-row">
        <cc-input v-model="input4" placeholder="前缀图标" :prefix-icon="Search" style="margin-bottom: 10px" />
        <cc-input v-model="input5" placeholder="后缀图标" :suffix-icon="Search" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>复合型输入框</span>
      </template>
      <div class="demo-row">
        <cc-input v-model="input6" placeholder="请输入内容" style="margin-bottom: 10px">
          <template #prepend>Http://</template>
        </cc-input>
        <cc-input v-model="input7" placeholder="请输入内容" style="margin-bottom: 10px">
          <template #append>.com</template>
        </cc-input>
        <cc-input v-model="input8" placeholder="请输入内容">
          <template #prepend>
            <el-select v-model="select" style="width: 100px">
              <el-option label="餐厅名" value="1" />
              <el-option label="订单号" value="2" />
              <el-option label="用户电话" value="3" />
            </el-select>
          </template>
          <template #append>
            <el-button :icon="Search" />
          </template>
        </cc-input>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>文本域</span>
      </template>
      <div class="demo-row">
        <cc-input v-model="textarea1" type="textarea" placeholder="请输入内容" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自适应文本域</span>
      </template>
      <div class="demo-row">
        <cc-input
          v-model="textarea2"
          type="textarea"
          :autosize="true"
          placeholder="自适应高度"
          style="margin-bottom: 10px"
        />
        <cc-input
          v-model="textarea3"
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 6 }"
          placeholder="限制最小2行，最大6行"
        />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>输入长度限制</span>
      </template>
      <div class="demo-row">
        <cc-input
          v-model="input9"
          :maxlength="10"
          show-word-limit
          placeholder="最多输入10个字符"
          style="margin-bottom: 10px"
        />
        <cc-input
          v-model="textarea4"
          type="textarea"
          :maxlength="30"
          show-word-limit
          placeholder="最多输入30个字符"
        />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>尺寸</span>
      </template>
      <div class="demo-row">
        <cc-input v-model="input10" size="large" placeholder="large 尺寸" style="margin-bottom: 10px" />
        <cc-input v-model="input11" placeholder="默认尺寸" style="margin-bottom: 10px" />
        <cc-input v-model="input12" size="small" placeholder="small 尺寸" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="demo-row">
        <cc-input
          v-model="input13"
          placeholder="请输入内容"
          clearable
          @focus="handleFocus"
          @blur="handleBlur"
          @clear="handleClear"
          @change="handleChange"
        />
        <div class="event-log">
          <p>当前值: {{ input13 || '无' }}</p>
          <p>事件日志: {{ eventLog || '无' }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import CcInput from '@/components/Input/index.vue'

const input1 = ref('')
const input2 = ref('禁用的值')
const input3 = ref('')
const password = ref('')
const input4 = ref('')
const input5 = ref('')
const input6 = ref('')
const input7 = ref('')
const input8 = ref('')
const select = ref('1')
const textarea1 = ref('')
const textarea2 = ref('')
const textarea3 = ref('')
const input9 = ref('')
const textarea4 = ref('')
const input10 = ref('')
const input11 = ref('')
const input12 = ref('')
const input13 = ref('')
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

const handleChange = (value: string) => {
  eventLog.value = `change 事件触发，值为: ${value}`
}
</script>

<style scoped>
.input-demo {
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

.demo-row > :first-child {
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
