<template>
  <div class="breadcrumb-demo">
    <h2>Breadcrumb 面包屑</h2>
    <p>显示当前页面的路径，快速返回之前的任意页面。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <p>使用 cc-breadcrumb 和 cc-breadcrumb-item 组件来创建面包屑。</p>
      <cc-breadcrumb>
        <cc-breadcrumb-item :to="{ path: '/' }">首页</cc-breadcrumb-item>
        <cc-breadcrumb-item>组件</cc-breadcrumb-item>
        <cc-breadcrumb-item>面包屑</cc-breadcrumb-item>
      </cc-breadcrumb>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>使用图标分隔符</span>
      </template>
      <p>通过设置 separator-icon 属性来指定分隔符图标。</p>
      <cc-breadcrumb separator-icon="ArrowRight">
        <cc-breadcrumb-item :to="{ path: '/' }">首页</cc-breadcrumb-item>
        <cc-breadcrumb-item>组件</cc-breadcrumb-item>
        <cc-breadcrumb-item>面包屑</cc-breadcrumb-item>
      </cc-breadcrumb>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义分隔符</span>
      </template>
      <p>通过设置 separator 属性来自定义分隔符。</p>
      <cc-breadcrumb separator=">">
        <cc-breadcrumb-item :to="{ path: '/' }">首页</cc-breadcrumb-item>
        <cc-breadcrumb-item>组件</cc-breadcrumb-item>
        <cc-breadcrumb-item>面包屑</cc-breadcrumb-item>
      </cc-breadcrumb>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>路由跳转</span>
      </template>
      <p>使用 to 属性设置跳转链接。</p>
      <cc-breadcrumb>
        <cc-breadcrumb-item to="/">首页</cc-breadcrumb-item>
        <cc-breadcrumb-item to="/menu">组件</cc-breadcrumb-item>
        <cc-breadcrumb-item>面包屑</cc-breadcrumb-item>
      </cc-breadcrumb>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>替换历史记录</span>
      </template>
      <p>使用 replace 属性设置是否替换当前历史记录。</p>
      <cc-breadcrumb>
        <cc-breadcrumb-item to="/" replace>首页</cc-breadcrumb-item>
        <cc-breadcrumb-item to="/menu" replace>组件</cc-breadcrumb-item>
        <cc-breadcrumb-item>面包屑</cc-breadcrumb-item>
      </cc-breadcrumb>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>带图标的面包屑</span>
      </template>
      <p>在面包屑项中添加图标。</p>
      <cc-breadcrumb separator-icon="ArrowRight">
        <cc-breadcrumb-item :to="{ path: '/' }">
          <el-icon><House /></el-icon>
          首页
        </cc-breadcrumb-item>
        <cc-breadcrumb-item>
          <el-icon><FolderOpened /></el-icon>
          组件
        </cc-breadcrumb-item>
        <cc-breadcrumb-item>面包屑</cc-breadcrumb-item>
      </cc-breadcrumb>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { House, FolderOpened } from '@element-plus/icons-vue'
import CcBreadcrumb from '@/components/Breadcrumb/index.vue'
import CcBreadcrumbItem from '@/components/BreadcrumbItem/index.vue'
</script>

<style scoped>
.breadcrumb-demo {
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 100px;
}

.section {
  margin-bottom: 20px;
}
</style>
