<template>
  <div class="border-demo">
    <h2>Border 边框</h2>
    <p>用于展示边框样式，包含边框、圆角、阴影等功能。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <cc-border>
        这是一个带边框的内容区域
      </cc-border>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>边框样式</span>
      </template>
      <div class="demo-row">
        <cc-border border-style="solid" width="150px">实线边框</cc-border>
        <cc-border border-style="dashed" width="150px">虚线边框</cc-border>
        <cc-border border-style="dotted" width="150px">点线边框</cc-border>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>边框颜色</span>
      </template>
      <div class="demo-row">
        <cc-border border-color="#409eff" width="150px">蓝色边框</cc-border>
        <cc-border border-color="#67c23a" width="150px">绿色边框</cc-border>
        <cc-border border-color="#e6a23c" width="150px">橙色边框</cc-border>
        <cc-border border-color="#f56c6c" width="150px">红色边框</cc-border>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>边框宽度</span>
      </template>
      <div class="demo-row">
        <cc-border border-width="1px" width="150px">1px 边框</cc-border>
        <cc-border border-width="2px" width="150px">2px 边框</cc-border>
        <cc-border border-width="3px" width="150px">3px 边框</cc-border>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>圆角</span>
      </template>
      <div class="demo-row">
        <cc-border border-radius="0px" width="150px">无圆角</cc-border>
        <cc-border border-radius="4px" width="150px">小圆角</cc-border>
        <cc-border border-radius="8px" width="150px">中圆角</cc-border>
        <cc-border border-radius="16px" width="150px">大圆角</cc-border>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>圆形边框</span>
      </template>
      <div class="demo-row">
        <cc-border round width="150px">圆形边框</cc-border>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>阴影</span>
      </template>
      <div class="demo-row">
        <cc-border shadow="always" width="200px">总是显示阴影</cc-border>
        <cc-border shadow="hover" width="200px">悬浮时显示阴影</cc-border>
        <cc-border shadow="never" width="200px">不显示阴影</cc-border>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>内边距</span>
      </template>
      <div class="demo-row">
        <cc-border padding="10px" width="150px">小内边距</cc-border>
        <cc-border padding="20px" width="150px">中等内边距</cc-border>
        <cc-border padding="40px" width="150px">大内边距</cc-border>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义边框</span>
      </template>
      <div class="demo-row">
        <cc-border border="2px dashed #409eff" width="200px">
          自定义边框样式
        </cc-border>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>无边框</span>
      </template>
      <div class="demo-row">
        <cc-border :border="false" shadow="always" width="200px">
          无边框但有阴影
        </cc-border>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>组合使用</span>
      </template>
      <cc-border 
        border-color="#409eff" 
        border-width="2px" 
        border-radius="8px" 
        shadow="hover"
        padding="30px"
      >
        <h3>组合样式</h3>
        <p>这是一个组合了多种边框属性的内容区域</p>
      </cc-border>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import CcBorder from '@/components/Border/index.vue'
</script>

<style scoped>
.border-demo {
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  margin-bottom: 20px;
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: flex-start;
}
</style>
