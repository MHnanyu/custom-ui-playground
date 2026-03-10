<template>
  <div class="link-demo">
    <h2>Link 链接</h2>
    <p>文字超链接。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="link-group">
        <cc-link>默认链接</cc-link>
        <cc-link type="primary">主要链接</cc-link>
        <cc-link type="success">成功链接</cc-link>
        <cc-link type="warning">警告链接</cc-link>
        <cc-link type="danger">危险链接</cc-link>
        <cc-link type="info">信息链接</cc-link>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用状态</span>
      </template>
      <div class="link-group">
        <cc-link disabled>默认链接</cc-link>
        <cc-link type="primary" disabled>主要链接</cc-link>
        <cc-link type="success" disabled>成功链接</cc-link>
        <cc-link type="warning" disabled>警告链接</cc-link>
        <cc-link type="danger" disabled>危险链接</cc-link>
        <cc-link type="info" disabled>信息链接</cc-link>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>下划线</span>
      </template>
      <div class="link-group">
        <cc-link :underline="false">无下划线</cc-link>
        <cc-link type="primary" :underline="false">无下划线</cc-link>
        <cc-link type="success" :underline="false">无下划线</cc-link>
        <cc-link type="warning" :underline="false">无下划线</cc-link>
        <cc-link type="danger" :underline="false">无下划线</cc-link>
        <cc-link type="info" :underline="false">无下划线</cc-link>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>图标链接</span>
      </template>
      <div class="link-group">
        <cc-link type="primary" :icon="Search">搜索</cc-link>
        <cc-link type="primary" :icon="Edit">编辑</cc-link>
        <cc-link type="primary" :icon="View">查看</cc-link>
        <cc-link type="primary" :icon="Download">下载</cc-link>
        <cc-link type="primary" :icon="Link">链接</cc-link>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>跳转链接</span>
      </template>
      <div class="link-group">
        <cc-link href="https://element-plus.org" target="_blank">Element Plus</cc-link>
        <cc-link type="primary" href="https://github.com" target="_blank">GitHub</cc-link>
        <cc-link type="success" href="https://vuejs.org" target="_blank">Vue.js</cc-link>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="link-group">
        <cc-link type="primary" @click="handleLinkClick">点击我</cc-link>
        <span v-if="clickCount > 0" class="click-count">点击次数: {{ clickCount }}</span>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search, Edit, View, Download, Link } from '@element-plus/icons-vue'
import CcLink from '@/components/Link/index.vue'

const clickCount = ref(0)

const handleLinkClick = () => {
  clickCount.value++
}
</script>

<style scoped>
.link-demo {
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  margin-bottom: 20px;
}

.link-group {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
}

.click-count {
  margin-left: 10px;
  color: #409eff;
  font-weight: bold;
}
</style>
