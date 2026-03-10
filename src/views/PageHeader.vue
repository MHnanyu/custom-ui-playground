<template>
  <div class="page-header-demo">
    <h2>PageHeader 页头</h2>
    <p>页头组件，用于展示当前页面位置、标题和返回按钮等信息。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <p>使用 cc-page-header 组件创建页头。</p>
      <cc-page-header title="返回" content="详情页面" />
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义标题</span>
      </template>
      <p>通过 title 属性自定义标题文字。</p>
      <cc-page-header title="自定义标题" content="页面内容区域" />
    </el-card>

    <el-card class="section">
      <template #header>
        <span>隐藏返回按钮</span>
      </template>
      <p>将 title 设置为 false 可隐藏返回按钮。</p>
      <cc-page-header :title="false" content="无返回按钮的页头" />
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义内容</span>
      </template>
      <p>使用 content slot 自定义内容区域。</p>
      <cc-page-header title="完整示例">
        <template #content>
          <div style="color: #409eff; font-weight: bold;">自定义内容区域</div>
        </template>
      </cc-page-header>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>带操作按钮</span>
      </template>
      <p>使用 extra slot 添加额外操作。</p>
      <cc-page-header title="带操作按钮" content="页面内容">
        <template #extra>
          <el-button type="primary">主要操作</el-button>
          <el-button>次要操作</el-button>
        </template>
      </cc-page-header>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>返回事件</span>
      </template>
      <p>监听 back 事件处理返回操作。</p>
      <cc-page-header title="点击返回" content="点击返回按钮触发事件" @back="handleBack" />
    </el-card>

    <el-card class="section">
      <template #header>
        <span>使用图标</span>
      </template>
      <p>使用图标增强视觉效果。</p>
      <cc-page-header title="返回" icon="ArrowLeft" content="带图标的面包屑" />
    </el-card>

    <el-card class="section">
      <template #header>
        <span>完整示例</span>
      </template>
      <p>综合使用各种属性和插槽。</p>
      <cc-page-header title="订单详情" content="订单编号：20240310001">
        <template #extra>
          <el-button type="success">通过</el-button>
          <el-button type="danger">拒绝</el-button>
        </template>
        <div style="padding: 20px;">
          <el-descriptions :column="2" border>
            <el-descriptions-item label="下单时间">2024-03-10 10:30:00</el-descriptions-item>
            <el-descriptions-item label="订单金额">¥999.00</el-descriptions-item>
            <el-descriptions-item label="商品名称">Vue3 实战课程</el-descriptions-item>
            <el-descriptions-item label="订单状态">已完成</el-descriptions-item>
          </el-descriptions>
        </div>
      </cc-page-header>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import CcPageHeader from '@/components/PageHeader/index.vue'

const handleBack = () => {
  ElMessage.info('点击了返回按钮')
}
</script>

<style scoped>
.page-header-demo {
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 100px;
}

.section {
  margin-bottom: 20px;
}
</style>
