<template>
  <div class="form-demo">
    <h2>Form 表单</h2>
    <p>由输入框、选择器、单选框、多选框等控件组成，用以收集、校验、提交数据。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="demo-row">
        <cc-form :model="form1" label-width="80px">
          <cc-form-item label="姓名">
            <cc-input v-model="form1.name" placeholder="请输入姓名" />
          </cc-form-item>
          <cc-form-item label="邮箱">
            <cc-input v-model="form1.email" placeholder="请输入邮箱" />
          </cc-form-item>
        </cc-form>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>表单验证</span>
      </template>
      <div class="demo-row">
        <cc-form ref="formRef" :model="form2" :rules="rules" label-width="80px">
          <cc-form-item label="姓名" prop="name">
            <cc-input v-model="form2.name" placeholder="请输入姓名" />
          </cc-form-item>
          <cc-form-item label="邮箱" prop="email">
            <cc-input v-model="form2.email" placeholder="请输入邮箱" />
          </cc-form-item>
          <cc-form-item>
            <el-button type="primary" @click="submitForm">提交</el-button>
            <el-button @click="resetForm">重置</el-button>
          </cc-form-item>
        </cc-form>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>行内表单</span>
      </template>
      <div class="demo-row">
        <cc-form :model="form3" inline>
          <cc-form-item label="姓名">
            <cc-input v-model="form3.name" placeholder="请输入姓名" style="width: 200px" />
          </cc-form-item>
          <cc-form-item>
            <el-button type="primary" @click="onSubmit">查询</el-button>
          </cc-form-item>
        </cc-form>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>标签位置 - left</span>
      </template>
      <div class="demo-row">
        <cc-form :model="form4" label-position="left" label-width="100px">
          <cc-form-item label="姓名">
            <cc-input v-model="form4.name" placeholder="请输入姓名" />
          </cc-form-item>
          <cc-form-item label="邮箱">
            <cc-input v-model="form4.email" placeholder="请输入邮箱" />
          </cc-form-item>
        </cc-form>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>标签位置 - top</span>
      </template>
      <div class="demo-row">
        <cc-form :model="form5" label-position="top">
          <cc-form-item label="姓名">
            <cc-input v-model="form5.name" placeholder="请输入姓名" />
          </cc-form-item>
          <cc-form-item label="邮箱">
            <cc-input v-model="form5.email" placeholder="请输入邮箱" />
          </cc-form-item>
        </cc-form>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>表单尺寸</span>
      </template>
      <div class="demo-row vertical">
        <div class="size-demo">
          <p>large</p>
          <cc-form :model="form6" size="large" label-width="80px">
            <cc-form-item label="姓名">
              <cc-input v-model="form6.name" />
            </cc-form-item>
          </cc-form>
        </div>
        <div class="size-demo">
          <p>default</p>
          <cc-form :model="form7" size="default" label-width="80px">
            <cc-form-item label="姓名">
              <cc-input v-model="form7.name" />
            </cc-form-item>
          </cc-form>
        </div>
        <div class="size-demo">
          <p>small</p>
          <cc-form :model="form8" size="small" label-width="80px">
            <cc-form-item label="姓名">
              <cc-input v-model="form8.name" />
            </cc-form-item>
          </cc-form>
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用表单</span>
      </template>
      <div class="demo-row">
        <cc-form :model="form9" label-width="80px" disabled>
          <cc-form-item label="姓名">
            <cc-input v-model="form9.name" />
          </cc-form-item>
          <cc-form-item label="邮箱">
            <cc-input v-model="form9.email" />
          </cc-form-item>
        </cc-form>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>验证事件回调</span>
      </template>
      <div class="demo-row">
        <cc-form :model="form10" :rules="rules" label-width="80px" @validate="handleValidate">
          <cc-form-item label="姓名" prop="name">
            <cc-input v-model="form10.name" placeholder="请输入姓名" />
          </cc-form-item>
          <cc-form-item label="邮箱" prop="email">
            <cc-input v-model="form10.email" placeholder="请输入邮箱" />
          </cc-form-item>
        </cc-form>
        <div class="event-log">
          <p>验证日志: {{ validateLog || '无' }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
import CcForm from '@/components/Form/index.vue'
import CcFormItem from '@/components/FormItem/index.vue'
import CcInput from '@/components/Input/index.vue'

const formRef = ref<FormInstance>()

// 基础用法
const form1 = reactive({
  name: '',
  email: ''
})

// 表单验证
const form2 = reactive({
  name: '',
  email: ''
})

const rules: FormRules = {
  name: [
    { required: true, message: '请输入姓名', trigger: 'blur' }
  ],
  email: [
    { required: true, message: '请输入邮箱', trigger: 'blur' },
    { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }
  ]
}

const submitForm = async () => {
  if (!formRef.value) return
  await formRef.value.validate((isValid) => {
    if (isValid) {
      ElMessage.success('提交成功')
      console.log('表单数据:', form2)
    } else {
      ElMessage.error('验证失败')
    }
  })
}

const resetForm = () => {
  formRef.value?.resetFields()
}

// 行内表单
const form3 = reactive({
  name: ''
})

const onSubmit = () => {
  console.log('查询:', form3)
}

// 标签位置
const form4 = reactive({
  name: '',
  email: ''
})

const form5 = reactive({
  name: '',
  email: ''
})

// 表单尺寸
const form6 = reactive({ name: '' })
const form7 = reactive({ name: '' })
const form8 = reactive({ name: '' })

// 禁用表单
const form9 = reactive({
  name: '禁用的值',
  email: 'disabled@example.com'
})

// 验证事件
const form10 = reactive({
  name: '',
  email: ''
})

const validateLog = ref('')

const handleValidate = (prop: string, isValid: boolean, message: string) => {
  validateLog.value = `字段 ${prop} 验证${isValid ? '通过' : '失败'}: ${message}`
}
</script>

<style scoped>
.form-demo {
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

.demo-row.vertical {
  flex-direction: column;
}

.demo-row :deep(.el-form) {
  width: 400px;
}

.demo-row.vertical :deep(.el-form) {
  width: 100%;
}

.size-demo {
  width: 400px;
}

.size-demo p {
  margin-bottom: 10px;
  font-weight: bold;
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
