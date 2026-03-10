<template>
  <div class="affix-demo">
    <h2>Affix 固钉</h2>
    <p>将元素固定在页面可视区域。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <p>固钉默认固定在页面顶部。向下滚动查看效果。</p>
      <div class="affix-wrapper">
        <cc-affix>
          <el-button type="primary">固定在顶部</el-button>
        </cc-affix>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>固定位置 - 顶部</span>
      </template>
      <p>设置 position="top" 固定在顶部。</p>
      <div class="affix-wrapper">
        <cc-affix position="top">
          <el-button type="primary">固定在顶部</el-button>
        </cc-affix>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>固定偏移</span>
      </template>
      <p>设置 :offset="80" 距离顶部 80px 固定。</p>
      <div class="affix-wrapper">
        <cc-affix :offset="80">
          <el-button type="success">距离顶部 80px 固定</el-button>
        </cc-affix>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>监听固定状态</span>
      </template>
      <p>使用 @change 事件监听固钉的固定状态变化。</p>
      <div class="affix-wrapper">
        <cc-affix @change="handleChange">
          <el-button :type="fixed ? 'success' : 'primary'">
            {{ fixed ? '已固定' : '未固定' }}
          </el-button>
        </cc-affix>
      </div>
      <p class="status-text">固钉状态: {{ fixed ? '已固定' : '未固定' }}</p>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <p>向下滚动页面，查看控制台输出状态变化。</p>
      <div class="affix-wrapper">
        <cc-affix @change="handleAffixChange">
          <el-button type="warning">测试固钉事件</el-button>
        </cc-affix>
      </div>
      <p>状态变化次数: {{ changeCount }}</p>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CcAffix from '@/components/Affix/index.vue'

const fixed = ref(false)
const changeCount = ref(0)

const handleChange = (isFixed: boolean) => {
  fixed.value = isFixed
}

const handleAffixChange = (isFixed: boolean) => {
  changeCount.value++
  console.log('固钉状态变化:', isFixed)
}
</script>

<style scoped>
.affix-demo {
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 100px;
}

.section {
  margin-bottom: 20px;
}

.affix-wrapper {
  padding: 10px 0;
}

.status-text {
  margin-top: 10px;
  color: #409eff;
  font-weight: bold;
}
</style>
