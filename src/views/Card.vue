<template>
  <div class="card-demo">
    <h2>Card 卡片</h2>
    <p>常用的数据展示容器。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <cc-card>
        <div>卡片内容</div>
      </cc-card>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>简单卡片</span>
      </template>
      <cc-card>
        <p>卡片内容 1</p>
        <p>卡片内容 2</p>
        <p>卡片内容 3</p>
      </cc-card>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>带标题和操作</span>
      </template>
      <cc-card>
        <template #header>
          <div class="card-header">
            <span>卡片标题</span>
            <el-button type="primary">操作</el-button>
          </div>
        </template>
        <p>卡片内容</p>
      </cc-card>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>卡片阴影</span>
      </template>
      <div class="shadow-demo">
        <cc-card shadow="hover">
          <p>hover 时显示阴影</p>
        </cc-card>
        <cc-card shadow="always">
          <p>始终显示阴影</p>
        </cc-card>
        <cc-card shadow="never">
          <p>不显示阴影</p>
        </cc-card>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>卡片尺寸</span>
      </template>
      <div class="size-demo">
        <cc-card :body-style="{ padding: '20px' }">
          <p>默认内边距 20px</p>
        </cc-card>
        <cc-card :body-style="{ padding: '0px' }">
          <p>无内边距</p>
        </cc-card>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>图片卡片</span>
      </template>
      <div class="image-demo">
        <cc-card :body-style="{ padding: '0px' }">
          <img
            src="https://element-plus.org/images/element-plus-logo.svg"
            class="image"
          />
          <div style="padding: 14px">
            <span>图片卡片</span>
            <div class="bottom">
              <time class="time">2024-01-01</time>
              <el-button type="text">操作</el-button>
            </div>
          </div>
        </cc-card>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>卡片组合</span>
      </template>
      <div class="card-group">
        <cc-card class="group-card">
          <template #header>
            <span>用户信息</span>
          </template>
          <p>姓名: 张三</p>
          <p>邮箱: zhangsan@example.com</p>
        </cc-card>
        <cc-card class="group-card">
          <template #header>
            <span>订单信息</span>
          </template>
          <p>订单号: 123456789</p>
          <p>状态: 已完成</p>
        </cc-card>
        <cc-card class="group-card">
          <template #header>
            <span>统计信息</span>
          </template>
          <p>访问量: 1,234</p>
          <p>收益: ¥5,678</p>
        </cc-card>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <cc-card @click="handleCardClick">
        <p>点击我</p>
      </cc-card>
      <p v-if="clickCount > 0" class="click-count">点击次数: {{ clickCount }}</p>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CcCard from '@/components/Card/index.vue'

const clickCount = ref(0)

const handleCardClick = () => {
  clickCount.value++
}
</script>

<style scoped>
.card-demo {
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  margin-bottom: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.shadow-demo {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.shadow-demo .cc-card {
  width: 200px;
}

.size-demo {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.size-demo .cc-card {
  width: 200px;
}

.image-demo {
  width: 300px;
}

.image {
  width: 100%;
  display: block;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.time {
  font-size: 13px;
  color: #999;
}

.card-group {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.group-card {
  width: 250px;
}

.click-count {
  margin-top: 10px;
  color: #409eff;
  font-weight: bold;
}
</style>
