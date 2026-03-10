<template>
  <div class="anchor-demo">
    <h2>Anchor 锚点</h2>
    <p>锚点组件用于跳转到页面指定位置，常用于长页面的导航。</p>

    <el-row :gutter="20">
      <el-col :span="6">
        <el-card class="section">
          <template #header>
            <span>基础用法</span>
          </template>
          <p>默认固定在左侧，点击链接滚动到对应位置。</p>
          <cc-anchor>
            <el-anchor-link href="#basic-usage" title="基础用法" />
            <el-anchor-link href="#affix" title="固定锚点" />
            <el-anchor-link href="#type" title="类型切换" />
            <el-anchor-link href="#events" title="事件监听" />
          </cc-anchor>
        </el-card>
      </el-col>
      <el-col :span="18">
        <el-card id="basic-usage" class="section">
          <template #header>
            <span>基础用法</span>
          </template>
          <p>点击左侧锚点链接，页面会平滑滚动到对应的内容区域。</p>
          <div class="content-block">
            <h3>基础用法内容区域</h3>
            <p>这是基础用法的内容区域。锚点组件可以让你快速定位到页面的特定位置。</p>
          </div>
        </el-card>

        <el-card id="affix" class="section">
          <template #header>
            <span>固定锚点</span>
          </template>
          <p>设置 affix 属性使锚点固定在页面上。</p>
          <cc-anchor :affix="true">
            <el-anchor-link href="#basic-usage" title="基础用法" />
            <el-anchor-link href="#affix" title="固定锚点" />
            <el-anchor-link href="#type" title="类型切换" />
            <el-anchor-link href="#events" title="事件监听" />
          </cc-anchor>
          <div class="content-block">
            <h3>固定锚点内容区域</h3>
            <p>设置 affix 属性后，即使页面滚动，锚点也会固定在原位置。</p>
          </div>
        </el-card>

        <el-card id="type" class="section">
          <template #header>
            <span>类型切换</span>
          </template>
          <p>通过 type 属性切换锚点的类型：line 或 circle。</p>
          <div class="type-demo">
            <cc-anchor type="line">
              <el-anchor-link href="#basic-usage" title="基础用法" />
              <el-anchor-link href="#affix" title="固定锚点" />
              <el-anchor-link href="#type" title="类型切换" />
            </cc-anchor>
          </div>
          <div class="content-block">
            <h3>类型切换内容区域</h3>
            <p>line 类型显示为线条样式，circle 类型显示为圆点样式。</p>
          </div>
        </el-card>

        <el-card id="events" class="section">
          <template #header>
            <span>事件监听</span>
          </template>
          <p>监听锚点切换事件。</p>
          <cc-anchor @change="handleChange" @click="handleClick">
            <el-anchor-link href="#basic-usage" title="基础用法" />
            <el-anchor-link href="#affix" title="固定锚点" />
            <el-anchor-link href="#type" title="类型切换" />
            <el-anchor-link href="#events" title="事件监听" />
          </cc-anchor>
          <div class="content-block">
            <h3>事件监听内容区域</h3>
            <p>当前激活的锚点: {{ activeLink || '无' }}</p>
            <p>点击次数: {{ clickCount }}</p>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CcAnchor from '@/components/Anchor/index.vue'

const activeLink = ref('')
const clickCount = ref(0)

const handleChange = (link: string) => {
  activeLink.value = link
  console.log('锚点切换:', link)
}

const handleClick = (e: MouseEvent, link: { href: string; title: string }) => {
  clickCount.value++
  console.log('点击锚点:', link)
}
</script>

<style scoped>
.anchor-demo {
  max-width: 1400px;
  margin: 0 auto;
  padding-bottom: 100px;
}

.section {
  margin-bottom: 20px;
}

.content-block {
  padding: 20px;
  background-color: #f5f7fa;
  border-radius: 4px;
  margin-top: 20px;
}

.content-block h3 {
  margin-bottom: 10px;
  color: #303133;
}

.type-demo {
  margin-bottom: 20px;
}
</style>
