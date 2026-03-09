<template>
  <div class="home">
    <h1>CC UI 组件库</h1>
    <p>基于 Element Plus 的自定义组件库</p>
    <el-card>
      <template #header>
        <span>快速开始</span>
      </template>
      <p>请选择左侧菜单查看组件演示</p>
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
</style>
