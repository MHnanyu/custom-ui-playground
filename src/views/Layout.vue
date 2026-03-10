<template>
  <div class="layout-demo">
    <h2>Layout 布局</h2>
    <p>用于快速搭建页面的整体布局，基于 24 分栏的栅格系统。</p>

    <el-card class="section">
      <template #header>
        <span>基础布局</span>
      </template>
      <div class="demo-row">
        <cc-row>
          <cc-col :span="24"><div class="grid-content bg-purple-dark">24</div></cc-col>
        </cc-row>
        <cc-row>
          <cc-col :span="12"><div class="grid-content bg-purple">12</div></cc-col>
          <cc-col :span="12"><div class="grid-content bg-purple-light">12</div></cc-col>
        </cc-row>
        <cc-row>
          <cc-col :span="8"><div class="grid-content bg-purple">8</div></cc-col>
          <cc-col :span="8"><div class="grid-content bg-purple-light">8</div></cc-col>
          <cc-col :span="8"><div class="grid-content bg-purple">8</div></cc-col>
        </cc-row>
        <cc-row>
          <cc-col :span="6"><div class="grid-content bg-purple">6</div></cc-col>
          <cc-col :span="6"><div class="grid-content bg-purple-light">6</div></cc-col>
          <cc-col :span="6"><div class="grid-content bg-purple">6</div></cc-col>
          <cc-col :span="6"><div class="grid-content bg-purple-light">6</div></cc-col>
        </cc-row>
        <cc-row>
          <cc-col :span="4"><div class="grid-content bg-purple">4</div></cc-col>
          <cc-col :span="4"><div class="grid-content bg-purple-light">4</div></cc-col>
          <cc-col :span="4"><div class="grid-content bg-purple">4</div></cc-col>
          <cc-col :span="4"><div class="grid-content bg-purple-light">4</div></cc-col>
          <cc-col :span="4"><div class="grid-content bg-purple">4</div></cc-col>
          <cc-col :span="4"><div class="grid-content bg-purple-light">4</div></cc-col>
        </cc-row>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>分栏间隔</span>
      </template>
      <div class="demo-row">
        <cc-row :gutter="20">
          <cc-col :span="6"><div class="grid-content bg-purple">6</div></cc-col>
          <cc-col :span="6"><div class="grid-content bg-purple">6</div></cc-col>
          <cc-col :span="6"><div class="grid-content bg-purple">6</div></cc-col>
          <cc-col :span="6"><div class="grid-content bg-purple">6</div></cc-col>
        </cc-row>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>混合布局</span>
      </template>
      <div class="demo-row">
        <cc-row :gutter="20">
          <cc-col :span="16"><div class="grid-content bg-purple">16</div></cc-col>
          <cc-col :span="8"><div class="grid-content bg-purple">8</div></cc-col>
        </cc-row>
        <cc-row :gutter="20">
          <cc-col :span="8"><div class="grid-content bg-purple">8</div></cc-col>
          <cc-col :span="8"><div class="grid-content bg-purple">8</div></cc-col>
          <cc-col :span="4"><div class="grid-content bg-purple">4</div></cc-col>
          <cc-col :span="4"><div class="grid-content bg-purple">4</div></cc-col>
        </cc-row>
        <cc-row :gutter="20">
          <cc-col :span="4"><div class="grid-content bg-purple">4</div></cc-col>
          <cc-col :span="16"><div class="grid-content bg-purple">16</div></cc-col>
          <cc-col :span="4"><div class="grid-content bg-purple">4</div></cc-col>
        </cc-row>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>分栏偏移</span>
      </template>
      <div class="demo-row">
        <cc-row :gutter="20">
          <cc-col :span="6"><div class="grid-content bg-purple">6</div></cc-col>
          <cc-col :span="6" :offset="6"><div class="grid-content bg-purple">6, offset: 6</div></cc-col>
        </cc-row>
        <cc-row :gutter="20">
          <cc-col :span="6" :offset="6"><div class="grid-content bg-purple">6, offset: 6</div></cc-col>
          <cc-col :span="6" :offset="6"><div class="grid-content bg-purple">6, offset: 6</div></cc-col>
        </cc-row>
        <cc-row :gutter="20">
          <cc-col :span="12" :offset="6"><div class="grid-content bg-purple">12, offset: 6</div></cc-col>
        </cc-row>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>对齐方式</span>
      </template>
      <div class="demo-row">
        <cc-row class="row-bg" justify="center">
          <cc-col :span="6"><div class="grid-content bg-purple">center</div></cc-col>
          <cc-col :span="6"><div class="grid-content bg-purple-light">center</div></cc-col>
          <cc-col :span="6"><div class="grid-content bg-purple">center</div></cc-col>
        </cc-row>
        <cc-row class="row-bg" justify="space-between">
          <cc-col :span="6"><div class="grid-content bg-purple">space-between</div></cc-col>
          <cc-col :span="6"><div class="grid-content bg-purple-light">space-between</div></cc-col>
          <cc-col :span="6"><div class="grid-content bg-purple">space-between</div></cc-col>
        </cc-row>
        <cc-row class="row-bg" justify="space-around">
          <cc-col :span="6"><div class="grid-content bg-purple">space-around</div></cc-col>
          <cc-col :span="6"><div class="grid-content bg-purple-light">space-around</div></cc-col>
          <cc-col :span="6"><div class="grid-content bg-purple">space-around</div></cc-col>
        </cc-row>
        <cc-row class="row-bg" justify="space-evenly">
          <cc-col :span="6"><div class="grid-content bg-purple">space-evenly</div></cc-col>
          <cc-col :span="6"><div class="grid-content bg-purple-light">space-evenly</div></cc-col>
          <cc-col :span="6"><div class="grid-content bg-purple">space-evenly</div></cc-col>
        </cc-row>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>响应式布局</span>
      </template>
      <p class="tip">调整浏览器窗口大小查看布局变化：<br/>
        xs(&lt;768px) 每行1列 | sm(≥768px) 每行2列 | md(≥992px) 每行3列 | lg(≥1200px) 每行4列 | xl(≥1920px) 每行6列
      </p>
      <div class="demo-row">
        <cc-row :gutter="10">
          <cc-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
            <div class="grid-content bg-purple">列1</div>
          </cc-col>
          <cc-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
            <div class="grid-content bg-purple-light">列2</div>
          </cc-col>
          <cc-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
            <div class="grid-content bg-purple">列3</div>
          </cc-col>
          <cc-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
            <div class="grid-content bg-purple-light">列4</div>
          </cc-col>
          <cc-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
            <div class="grid-content bg-purple">列5</div>
          </cc-col>
          <cc-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
            <div class="grid-content bg-purple-light">列6</div>
          </cc-col>
        </cc-row>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import CcRow from '@/components/Layout/Row.vue'
import CcCol from '@/components/Layout/Col.vue'
</script>

<style scoped>
.layout-demo {
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  margin-bottom: 20px;
}

.tip {
  background-color: #f4f4f5;
  padding: 8px 16px;
  margin-bottom: 16px;
  color: #606266;
  font-size: 14px;
  line-height: 1.6;
  border-radius: 4px;
}

.demo-row {
  margin-bottom: 20px;
}

.demo-row:last-child {
  margin-bottom: 0;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  font-size: 14px;
  margin-bottom: 10px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.row-bg {
  background-color: #f9fafc;
  padding: 10px 0;
}
</style>
