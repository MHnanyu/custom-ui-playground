<template>
  <div class="message-box-demo">
    <h2>MessageBox 消息弹框</h2>
    <p>模拟系统的消息提示弹框，用于消息提示、确认操作和输入内容。</p>

    <el-card class="section">
      <template #header>
        <span>消息提示</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="handleAlert">消息提示</cc-button>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>确认消息</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="handleConfirm">确认消息</cc-button>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>输入框</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="handlePrompt">输入框</cc-button>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义配置</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="handleCustom">自定义配置</cc-button>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>使用 HTML 片段</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="handleHtml">HTML 内容</cc-button>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>区分取消和关闭</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="handleDistinguish">区分取消和关闭</cc-button>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>居中布局</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="handleCenter">居中布局</cc-button>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>不同类型</span>
      </template>
      <div class="button-group">
        <cc-button type="success" @click="handleSuccess">成功</cc-button>
        <cc-button type="warning" @click="handleWarning">警告</cc-button>
        <cc-button type="info" @click="handleInfo">信息</cc-button>
        <cc-button type="danger" @click="handleError">错误</cc-button>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>回调函数</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="handleCallback">带回调函数</cc-button>
      </div>
      <div v-if="actionLog" class="action-log">
        <h4>操作日志：</h4>
        <p>{{ actionLog }}</p>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessageBox } from 'element-plus'
import CcButton from '@/components/Button/index.vue'

const actionLog = ref('')

// 消息提示
const handleAlert = async () => {
  await ElMessageBox.alert('这是一条提示信息', '提示')
}

// 确认消息
const handleConfirm = async () => {
  try {
    await ElMessageBox.confirm('此操作将永久删除该文件，是否继续？', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
    ElMessageBox.alert('已确认', '提示')
  } catch {
    // 用户取消
  }
}

// 输入框
const handlePrompt = async () => {
  try {
    const { value } = await ElMessageBox.prompt('请输入您的姓名', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      inputPattern: /.+/,
      inputErrorMessage: '姓名不能为空'
    })
    ElMessageBox.alert(`您输入的姓名是：${value}`, '提示')
  } catch {
    // 用户取消
  }
}

// 自定义配置
const handleCustom = async () => {
  await ElMessageBox({
    title: '自定义标题',
    message: '这是一条自定义配置的消息',
    confirmButtonText: '知道了',
    type: 'success'
  })
}

// 使用 HTML
const handleHtml = async () => {
  await ElMessageBox.alert(
    '<strong style="color: red">这是 HTML 内容</strong>',
    '提示',
    {
      dangerouslyUseHTMLString: true
    }
  )
}

// 区分取消和关闭
const handleDistinguish = async () => {
  try {
    await ElMessageBox.confirm('此操作将永久删除该文件，是否继续？', '提示', {
      distinguishCancelAndClose: true
    })
    actionLog.value = '用户点击了确认'
  } catch (action) {
    actionLog.value = `用户点击了：${action === 'cancel' ? '取消' : '关闭'}`
  }
}

// 居中布局
const handleCenter = async () => {
  await ElMessageBox.alert('这是一条提示信息', '提示', {
    center: true
  })
}

// 不同类型
const handleSuccess = async () => {
  await ElMessageBox.alert('操作成功', '提示', { type: 'success' })
}

const handleWarning = async () => {
  await ElMessageBox.alert('警告信息', '提示', { type: 'warning' })
}

const handleInfo = async () => {
  await ElMessageBox.alert('信息提示', '提示', { type: 'info' })
}

const handleError = async () => {
  await ElMessageBox.alert('操作失败', '提示', { type: 'error' })
}

// 回调函数
const handleCallback = async () => {
  await ElMessageBox.alert('这是一条带回调的消息', '提示', {
    callback: (action) => {
      actionLog.value = `用户点击了：${action === 'confirm' ? '确认' : '关闭'}`
    }
  })
}
</script>

<style scoped>
.message-box-demo {
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  margin-bottom: 20px;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.action-log {
  margin-top: 20px;
  padding: 15px;
  background: #f5f7fa;
  border-radius: 4px;
}

.action-log h4 {
  margin: 0 0 10px;
}

.action-log p {
  margin: 0;
}
</style>
