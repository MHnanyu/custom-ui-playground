<template>
  <div class="divider-demo">
    <h2>Divider 分割线</h2>
    <p>用于分隔内容的分割线。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div>
        <p>我奔跑，我攀爬，我会飞翔。</p>
        <p>永不言败。</p>
        <cc-divider />
        <p>我奔跑，我攀爬，我会飞翔。</p>
        <p>永不言败。</p>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>设置文案</span>
      </template>
      <div>
        <p>我奔跑，我攀爬，我会飞翔。</p>
        <p>永不言败。</p>
        <cc-divider content-position="left">分割线</cc-divider>
        <p>我奔跑，我攀爬，我会飞翔。</p>
        <p>永不言败。</p>
        <cc-divider content-position="center">分割线</cc-divider>
        <p>我奔跑，我攀爬，我会飞翔。</p>
        <p>永不言败。</p>
        <cc-divider content-position="right">分割线</cc-divider>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>垂直分割</span>
      </template>
      <div>
        <span>雨纷纷</span>
        <cc-divider direction="vertical" />
        <span>旧故里</span>
        <cc-divider direction="vertical" />
        <span>草木深</span>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>设置分割线样式</span>
      </template>
      <div>
        <p>我奔跑，我攀爬，我会飞翔。</p>
        <p>永不言败。</p>
        <cc-divider border-style="dashed" />
        <p>我奔跑，我攀爬，我会飞翔。</p>
        <p>永不言败。</p>
        <cc-divider border-style="dotted" />
        <p>我奔跑，我攀爬，我会飞翔。</p>
        <p>永不言败。</p>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>组合使用</span>
      </template>
      <div>
        <p>默认样式（实线）</p>
        <cc-divider />
        <p>虚线样式</p>
        <cc-divider border-style="dashed" />
        <p>点线样式</p>
        <cc-divider border-style="dotted" />
        <p>带文字的分割线</p>
        <cc-divider content-position="center">文字居中</cc-divider>
        <cc-divider content-position="left">文字靠左</cc-divider>
        <cc-divider content-position="right">文字靠右</cc-divider>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import CcDivider from '@/components/Divider/index.vue'
</script>

<style scoped>
.divider-demo {
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  margin-bottom: 20px;
}

p {
  margin: 10px 0;
  color: #606266;
}

span {
  color: #606266;
}
</style>
