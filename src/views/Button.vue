<template>
  <div class="button-demo">
    <h2>Button 按钮</h2>
    <p>常用的操作按钮。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="button-group">
        <cc-button>默认按钮</cc-button>
        <cc-button type="primary">主要按钮</cc-button>
        <cc-button type="success">成功按钮</cc-button>
        <cc-button type="warning">警告按钮</cc-button>
        <cc-button type="danger">危险按钮</cc-button>
        <cc-button type="info">信息按钮</cc-button>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用状态</span>
      </template>
      <div class="button-group">
        <cc-button disabled>默认按钮</cc-button>
        <cc-button type="primary" disabled>主要按钮</cc-button>
        <cc-button type="success" disabled>成功按钮</cc-button>
        <cc-button type="warning" disabled>警告按钮</cc-button>
        <cc-button type="danger" disabled>危险按钮</cc-button>
        <cc-button type="info" disabled>信息按钮</cc-button>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>简洁按钮</span>
      </template>
      <div class="button-group">
        <cc-button plain>朴素按钮</cc-button>
        <cc-button type="primary" plain>主要按钮</cc-button>
        <cc-button type="success" plain>成功按钮</cc-button>
        <cc-button type="warning" plain>警告按钮</cc-button>
        <cc-button type="danger" plain>危险按钮</cc-button>
        <cc-button type="info" plain>信息按钮</cc-button>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>圆角按钮</span>
      </template>
      <div class="button-group">
        <cc-button round>圆角按钮</cc-button>
        <cc-button type="primary" round>主要按钮</cc-button>
        <cc-button type="success" round>成功按钮</cc-button>
        <cc-button type="warning" round>警告按钮</cc-button>
        <cc-button type="danger" round>危险按钮</cc-button>
        <cc-button type="info" round>信息按钮</cc-button>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>图标按钮</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" :icon="Search">搜索</cc-button>
        <cc-button type="primary" :icon="Edit">编辑</cc-button>
        <cc-button type="primary" :icon="Check">检查</cc-button>
        <cc-button type="primary" :icon="Message">消息</cc-button>
        <cc-button type="primary" :icon="Star">收藏</cc-button>
        <cc-button type="primary" :icon="Delete">删除</cc-button>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>按钮尺寸</span>
      </template>
      <div class="button-group">
        <cc-button size="large">大型按钮</cc-button>
        <cc-button size="default">默认按钮</cc-button>
        <cc-button size="small">小型按钮</cc-button>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>加载状态</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" :loading="loading" @click="handleClick">
          {{ loading ? '加载中...' : '点击加载' }}
        </cc-button>
        <cc-button type="primary" loading>加载中</cc-button>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>文字按钮</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" text>文字按钮</cc-button>
        <cc-button type="success" text>文字按钮</cc-button>
        <cc-button type="warning" text>文字按钮</cc-button>
        <cc-button type="danger" text>文字按钮</cc-button>
        <cc-button type="info" text>文字按钮</cc-button>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="handleButtonClick">点击我</cc-button>
        <span v-if="clickCount > 0" class="click-count">点击次数: {{ clickCount }}</span>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search, Edit, Check, Message, Star, Delete } from '@element-plus/icons-vue'
import CcButton from '@/components/Button/index.vue'

const loading = ref(false)
const clickCount = ref(0)

const handleClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 2000)
}

const handleButtonClick = () => {
  clickCount.value++
}
</script>

<style scoped>
.button-demo {
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

.click-count {
  margin-left: 10px;
  color: #409eff;
  font-weight: bold;
}
</style>
