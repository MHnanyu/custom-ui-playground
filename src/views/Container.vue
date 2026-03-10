<template>
  <div class="container-demo">
    <h2>Container 布局容器</h2>
    <p>用于布局的容器组件，方便快速搭建页面的基本结构。</p>

    <el-card class="section">
      <template #header>
        <span>布局1：Header + Main</span>
      </template>
      <cc-container class="layout-demo">
        <cc-header>Header</cc-header>
        <cc-main>Main</cc-main>
      </cc-container>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>布局2：Header + Main + Footer</span>
      </template>
      <cc-container class="layout-demo">
        <cc-header>Header</cc-header>
        <cc-main>Main</cc-main>
        <cc-footer>Footer</cc-footer>
      </cc-container>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>布局3：Aside + Main</span>
      </template>
      <cc-container class="layout-demo">
        <cc-aside width="200px">Aside</cc-aside>
        <cc-main>Main</cc-main>
      </cc-container>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>布局4：Header + Aside + Main</span>
      </template>
      <cc-container class="layout-demo layout-vertical">
        <cc-header>Header</cc-header>
        <cc-container>
          <cc-aside width="200px">Aside</cc-aside>
          <cc-main>Main</cc-main>
        </cc-container>
      </cc-container>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>布局5：Header + Aside + Main + Footer</span>
      </template>
      <cc-container class="layout-demo layout-vertical">
        <cc-header>Header</cc-header>
        <cc-container>
          <cc-aside width="200px">Aside</cc-aside>
          <cc-container>
            <cc-main>Main</cc-main>
            <cc-footer>Footer</cc-footer>
          </cc-container>
        </cc-container>
      </cc-container>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>布局6：Aside + Header + Main</span>
      </template>
      <cc-container class="layout-demo">
        <cc-aside width="200px">Aside</cc-aside>
        <cc-container>
          <cc-header>Header</cc-header>
          <cc-main>Main</cc-main>
        </cc-container>
      </cc-container>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>布局7：Aside + Header + Main + Footer</span>
      </template>
      <cc-container class="layout-demo">
        <cc-aside width="200px">Aside</cc-aside>
        <cc-container>
          <cc-header>Header</cc-header>
          <cc-main>Main</cc-main>
          <cc-footer>Footer</cc-footer>
        </cc-container>
      </cc-container>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义高度示例</span>
      </template>
      <cc-container class="layout-demo">
        <cc-header height="80px">Header (80px)</cc-header>
        <cc-main>Main</cc-main>
        <cc-footer height="40px">Footer (40px)</cc-footer>
      </cc-container>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义宽度示例</span>
      </template>
      <cc-container class="layout-demo">
        <cc-aside width="150px">Aside (150px)</cc-aside>
        <cc-main>Main</cc-main>
      </cc-container>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import CcContainer from '@/components/Container/index.vue'
import CcHeader from '@/components/Container/Header.vue'
import CcAside from '@/components/Container/Aside.vue'
import CcMain from '@/components/Container/Main.vue'
import CcFooter from '@/components/Container/Footer.vue'
</script>

<style scoped>
.container-demo {
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  margin-bottom: 20px;
}

.layout-demo {
  min-height: 200px;
}

.layout-vertical {
  min-height: 300px;
}

.layout-demo :deep(.el-header),
.layout-demo :deep(.el-footer) {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.layout-demo :deep(.el-aside) {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.layout-demo :deep(.el-main) {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
