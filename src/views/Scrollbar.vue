<template>
  <div class="scrollbar-demo">
    <h2>Scrollbar 滚动条</h2>
    <p>用于替换浏览器原生滚动条。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <cc-scrollbar height="400px">
        <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
          {{ item }}
        </p>
      </cc-scrollbar>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>横向滚动</span>
      </template>
      <cc-scrollbar>
        <div class="scrollbar-flex-content">
          <p v-for="item in 50" :key="item" class="scrollbar-demo-item">
            {{ item }}
          </p>
        </div>
      </cc-scrollbar>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>最大高度</span>
      </template>
      <cc-scrollbar max-height="200px">
        <p v-for="item in 5" :key="item" class="scrollbar-demo-item">
          {{ item }}
        </p>
      </cc-scrollbar>
      <div style="margin-top: 20px;">
        <p>当内容超过最大高度时:</p>
        <cc-scrollbar max-height="200px">
          <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
            {{ item }}
          </p>
        </cc-scrollbar>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>手动控制滚动</span>
      </template>
      <div class="control-buttons">
        <el-button type="primary" @click="handleScrollTop">滚动到顶部</el-button>
        <el-button type="primary" @click="handleScrollBottom">滚动到底部</el-button>
        <el-button type="success" @click="handleScrollLeft">滚动到左侧</el-button>
        <el-button type="success" @click="handleScrollRight">滚动到右侧</el-button>
      </div>
      <cc-scrollbar ref="scrollbarRef" height="300px" @scroll="handleScroll">
        <div class="scrollbar-flex-content">
          <p v-for="item in 100" :key="item" class="scrollbar-demo-item">
            {{ item }}
          </p>
        </div>
      </cc-scrollbar>
      <div class="scroll-info" v-if="scrollInfo">
        当前位置 - 左: {{ scrollInfo.left }}, 上: {{ scrollInfo.top }}
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>总是显示滚动条</span>
      </template>
      <cc-scrollbar height="400px" always>
        <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
          {{ item }}
        </p>
      </cc-scrollbar>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>原生滚动条</span>
      </template>
      <cc-scrollbar height="400px" native>
        <p v-for="item in 20" :key="item" class="scrollbar-demo-item">
          {{ item }}
        </p>
      </cc-scrollbar>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CcScrollbar from '@/components/Scrollbar/index.vue'

const scrollbarRef = ref()
const scrollInfo = ref<{ left: number; top: number } | null>(null)

const handleScrollTop = () => {
  scrollbarRef.value?.setScrollTop(0)
}

const handleScrollBottom = () => {
  scrollbarRef.value?.setScrollTop(10000)
}

const handleScrollLeft = () => {
  scrollbarRef.value?.setScrollLeft(0)
}

const handleScrollRight = () => {
  scrollbarRef.value?.setScrollLeft(10000)
}

const handleScroll = (scrollLeft: number, scrollTop: number) => {
  scrollInfo.value = {
    left: Math.round(scrollLeft),
    top: Math.round(scrollTop)
  }
}
</script>

<style scoped>
.scrollbar-demo {
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  margin-bottom: 20px;
}

.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}

.scrollbar-flex-content {
  display: flex;
}

.scrollbar-flex-content .scrollbar-demo-item {
  flex-shrink: 0;
  width: 100px;
}

.control-buttons {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.scroll-info {
  margin-top: 10px;
  padding: 10px;
  background: #f0f9ff;
  border-radius: 4px;
  color: #409eff;
  font-weight: bold;
}
</style>
