<template>
  <div class="space-demo">
    <h2>Space 间距</h2>
    <p>设置组件之间的间距。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <cc-space>
        <cc-button>按钮1</cc-button>
        <cc-button>按钮2</cc-button>
        <cc-button>按钮3</cc-button>
      </cc-space>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>垂直布局</span>
      </template>
      <cc-space direction="vertical">
        <cc-button>按钮1</cc-button>
        <cc-button>按钮2</cc-button>
        <cc-button>按钮3</cc-button>
      </cc-space>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>控制间距的大小</span>
      </template>
      <div class="demo-row">
        <span class="label">Large:</span>
        <cc-space size="large">
          <cc-button>按钮1</cc-button>
          <cc-button>按钮2</cc-button>
        </cc-space>
      </div>
      <div class="demo-row">
        <span class="label">Default:</span>
        <cc-space size="default">
          <cc-button>按钮1</cc-button>
          <cc-button>按钮2</cc-button>
        </cc-space>
      </div>
      <div class="demo-row">
        <span class="label">Small:</span>
        <cc-space size="small">
          <cc-button>按钮1</cc-button>
          <cc-button>按钮2</cc-button>
        </cc-space>
      </div>
      <div class="demo-row">
        <span class="label">30px:</span>
        <cc-space :size="30">
          <cc-button>按钮1</cc-button>
          <cc-button>按钮2</cc-button>
        </cc-space>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自动换行</span>
      </template>
      <cc-space wrap>
        <cc-button v-for="i in 20" :key="i">按钮 {{ i }}</cc-button>
      </cc-space>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>间隔符</span>
      </template>
      <cc-space spacer="|">
        <span>文字1</span>
        <span>文字2</span>
        <span>文字3</span>
        <span>文字4</span>
      </cc-space>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>填充容器</span>
      </template>
      <div style="width: 100%; background: #f5f5f5; padding: 10px;">
        <cc-space fill>
          <cc-button>按钮1</cc-button>
          <cc-button>按钮2</cc-button>
          <cc-button>按钮3</cc-button>
        </cc-space>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>对齐方式</span>
      </template>
      <div class="demo-row">
        <span class="label">Center:</span>
        <cc-space alignment="center">
          <span style="background: #e6a23c; padding: 20px;">大</span>
          <span style="background: #67c23a; padding: 10px;">中</span>
          <span style="background: #409eff;">小</span>
        </cc-space>
      </div>
      <div class="demo-row">
        <span class="label">Start:</span>
        <cc-space alignment="start">
          <span style="background: #e6a23c; padding: 20px;">大</span>
          <span style="background: #67c23a; padding: 10px;">中</span>
          <span style="background: #409eff;">小</span>
        </cc-space>
      </div>
      <div class="demo-row">
        <span class="label">End:</span>
        <cc-space alignment="end">
          <span style="background: #e6a23c; padding: 20px;">大</span>
          <span style="background: #67c23a; padding: 10px;">中</span>
          <span style="background: #409eff;">小</span>
        </cc-space>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import CcSpace from '@/components/Space/index.vue'
import CcButton from '@/components/Button/index.vue'
</script>

<style scoped>
.space-demo {
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  margin-bottom: 20px;
}

.demo-row {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
}

.label {
  width: 80px;
  color: #606266;
  font-weight: bold;
}
</style>
