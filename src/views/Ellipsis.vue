<template>
  <div class="ellipsis-demo">
    <h2>Ellipsis 文本省略</h2>
    <p>当文本过长时，使用省略号展示，并支持展开/收起功能。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <cc-ellipsis :content="longText" :line="1" />
    </el-card>

    <el-card class="section">
      <template #header>
        <span>多行省略 (2行)</span>
      </template>
      <cc-ellipsis :content="longText" :line="2" />
    </el-card>

    <el-card class="section">
      <template #header>
        <span>多行省略 (3行)</span>
      </template>
      <cc-ellipsis :content="longText" :line="3" />
    </el-card>

    <el-card class="section">
      <template #header>
        <span>不显示 Tooltip</span>
      </template>
      <cc-ellipsis :content="longText" :line="1" :show-tooltip="false" />
    </el-card>

    <el-card class="section">
      <template #header>
        <span>Tooltip 位置 - Bottom</span>
      </template>
      <cc-ellipsis 
        :content="longText" 
        :line="1" 
        show-tooltip 
        tooltip-placement="bottom" 
      />
    </el-card>

    <el-card class="section">
      <template #header>
        <span>可展开/收起</span>
      </template>
      <cc-ellipsis 
        :content="longText" 
        :line="2" 
        expandable 
        expand-text="展开" 
        collapse-text="收起" 
      />
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义最大宽度</span>
      </template>
      <div class="max-width-demo">
        <cc-ellipsis :content="longText" :line="1" max-width="300px" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>短文本（无省略）</span>
      </template>
      <cc-ellipsis content="这是一段短文本" :line="1" />
    </el-card>

    <el-card class="section">
      <template #header>
        <span>Light 主题 Tooltip</span>
      </template>
      <cc-ellipsis 
        :content="longText" 
        :line="1" 
        show-tooltip 
        tooltip-effect="light" 
      />
    </el-card>
  </div>
</template>

<script setup lang="ts">
import CcEllipsis from '@/components/Ellipsis/index.vue'

const longText = '这是一段很长的文本内容，用于展示文本省略组件的基本用法。当文本超过指定宽度或行数时，会自动显示省略号。这个组件在展示摘要、简介或者需要控制文本长度的场景中非常有用。通过设置不同的属性，可以实现单行省略、多行省略、展开收起等功能。同时支持 Tooltip 提示，当鼠标悬停时显示完整内容。'
</script>

<style scoped>
.ellipsis-demo {
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  margin-bottom: 20px;
}

.max-width-demo {
  background-color: #f5f7fa;
  padding: 10px;
  border-radius: 4px;
}
</style>
