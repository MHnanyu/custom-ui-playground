<template>
  <div class="home">
    <h1>CC UI 组件库</h1>
    <p>基于 Element Plus 的自定义组件库</p>
    <el-card>
      <template #header>
        <span>组件列表</span>
      </template>
      <div class="component-list">
        <h3>Basic 基础组件</h3>
        <router-link to="/button">
          <el-button type="primary">Button 按钮</el-button>
        </router-link>
        <router-link to="/border">
          <el-button type="primary">Border 边框</el-button>
        </router-link>
        <router-link to="/color">
          <el-button type="primary">Color 色彩</el-button>
        </router-link>
        <router-link to="/container">
          <el-button type="primary">Container 布局容器</el-button>
        </router-link>
        <router-link to="/icon">
          <el-button type="primary">Icon 图标</el-button>
        </router-link>
        <router-link to="/layout">
          <el-button type="primary">Layout 布局</el-button>
        </router-link>
        <router-link to="/link">
          <el-button type="primary">Link 链接</el-button>
        </router-link>
        <router-link to="/scrollbar">
          <el-button type="primary">Scrollbar 滚动条</el-button>
        </router-link>
        <router-link to="/space">
          <el-button type="primary">Space 间距</el-button>
        </router-link>
        <router-link to="/typography">
          <el-button type="primary">Typography 排版</el-button>
        </router-link>
        <router-link to="/divider">
          <el-button type="primary">Divider 分割线</el-button>
        </router-link>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}
h1 {
  color: #409eff;
}
.component-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
h3 {
  margin-bottom: 10px;
  color: #606266;
}
</style>
