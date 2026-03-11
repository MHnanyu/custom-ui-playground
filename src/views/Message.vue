<template>
  <div class="message-demo">
    <h2>Message 消息提示</h2>
    <p>用于向用户反馈操作结果的消息提示组件。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="handleBasic">显示消息</cc-button>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>不同类型</span>
      </template>
      <div class="button-group">
        <cc-button type="success" @click="handleSuccess">成功</cc-button>
        <cc-button type="warning" @click="handleWarning">警告</cc-button>
        <cc-button type="danger" @click="handleError">错误</cc-button>
        <cc-button @click="handleInfo">信息</cc-button>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>可关闭</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="handleClosable">可关闭消息</cc-button>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>文字居中</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="handleCenter">居中显示</cc-button>
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
        <span>自定义时长</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="handleDuration">5秒后关闭</cc-button>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>偏移量</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="handleOffset">距离顶部 100px</cc-button>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>关闭所有消息</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="handleShowMultiple">显示多条消息</cc-button>
        <cc-button type="danger" @click="handleCloseAll">关闭所有</cc-button>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import CcButton from '@/components/Button/index.vue'

// 基础用法
const handleBasic = () => {
  ElMessage('这是一条消息提示')
}

// 不同类型
const handleSuccess = () => {
  ElMessage.success('这是一条成功消息')
}

const handleWarning = () => {
  ElMessage.warning('这是一条警告消息')
}

const handleError = () => {
  ElMessage.error('这是一条错误消息')
}

const handleInfo = () => {
  ElMessage.info('这是一条信息消息')
}

// 可关闭
const handleClosable = () => {
  ElMessage({
    message: '这是一条可关闭的消息',
    showClose: true
  })
}

// 文字居中
const handleCenter = () => {
  ElMessage({
    message: '文字居中的消息',
    center: true
  })
}

// 使用 HTML
const handleHtml = () => {
  ElMessage({
    message: '<strong style="color: red">这是 HTML 内容</strong>',
    dangerouslyUseHTMLString: true
  })
}

// 自定义时长
const handleDuration = () => {
  ElMessage({
    message: '5秒后关闭',
    duration: 5000
  })
}

// 偏移量
const handleOffset = () => {
  ElMessage({
    message: '距离顶部 100px',
    offset: 100
  })
}

// 显示多条消息
const handleShowMultiple = () => {
  ElMessage.success('第一条消息')
  ElMessage.info('第二条消息')
  ElMessage.warning('第三条消息')
}

// 关闭所有
const handleCloseAll = () => {
  ElMessage.closeAll()
}
</script>

<style scoped>
.message-demo {
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
</style>
