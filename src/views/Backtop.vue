<template>
  <div class="backtop-demo">
    <h2>Backtop 回到顶部</h2>
    <p>返回页面顶部的操作按钮。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <p>向下滚动查看右下角的回到顶部按钮。</p>
      <div class="scroll-content">
        <p v-for="i in 20" :key="i">内容区域 {{ i }} - 向下滚动以查看回到顶部按钮</p>
      </div>
      <cc-backtop />
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义内容</span>
      </template>
      <p>通过插槽自定义回到顶部按钮的内容。</p>
      <div class="scroll-content">
        <p v-for="i in 20" :key="i">内容区域 {{ i }} - 向下滚动以查看自定义按钮</p>
      </div>
      <cc-backtop>
        <div class="custom-backtop">
          UP
        </div>
      </cc-backtop>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义位置</span>
      </template>
      <p>设置 right 和 bottom 属性来自定义按钮位置。</p>
      <div class="scroll-content">
        <p v-for="i in 20" :key="i">内容区域 {{ i }}</p>
      </div>
      <cc-backtop :right="100" :bottom="100">
        <div class="custom-backtop">
          ↑ TOP
        </div>
      </cc-backtop>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>指定滚动容器</span>
      </template>
      <p>设置 target 属性指定滚动容器，按钮将出现在容器内部右下角。</p>
      <div class="target-wrapper">
        <div class="target-container" ref="containerRef">
          <p v-for="i in 30" :key="i">内容区域 {{ i }} - 向下滚动以查看容器内的回到顶部按钮</p>
        </div>
        <cc-backtop :target="containerRef" :visibility-height="100" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <p>点击回到顶部按钮时触发事件。</p>
      <div class="scroll-content">
        <p v-for="i in 20" :key="i">内容区域 {{ i }}</p>
      </div>
      <cc-backtop @click="handleClick" />
      <p class="click-info">点击次数: {{ clickCount }}</p>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CcBacktop from '@/components/Backtop/index.vue'

const containerRef = ref<HTMLElement>()
const clickCount = ref(0)

const handleClick = (event: MouseEvent) => {
  clickCount.value++
  console.log('点击了回到顶部按钮', event)
}
</script>

<style scoped>
.backtop-demo {
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 100px;
}

.section {
  margin-bottom: 20px;
}

.scroll-content {
  height: 400px;
  overflow-y: auto;
  border: 1px solid #eee;
  padding: 20px;
  margin-bottom: 60px;
}

.custom-backtop {
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #409eff;
  color: #fff;
  border-radius: 50%;
  font-weight: bold;
  font-size: 12px;
}

.target-wrapper {
  position: relative;
  height: 300px;
}

.target-container {
  height: 100%;
  overflow-y: auto;
  border: 1px solid #eee;
  padding: 20px;
}

.click-info {
  margin-top: 10px;
  color: #409eff;
  font-weight: bold;
}
</style>
