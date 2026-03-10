<template>
  <div class="menu-demo">
    <h2>Menu 菜单</h2>
    <p>菜单组件用于展示导航菜单，支持水平模式和垂直模式。</p>

    <el-row :gutter="20">
      <el-col :span="24">
        <el-card class="section">
          <template #header>
            <span>基础用法</span>
          </template>
          <p>水平模式的菜单。</p>
          <cc-menu default-active="1" class="menu-demo">
            <cc-menu-item index="1">处理中心</cc-menu-item>
            <cc-menu-item index="2">订单管理</cc-menu-item>
            <cc-menu-item index="3">商品管理</cc-menu-item>
            <cc-menu-item index="4">用户管理</cc-menu-item>
          </cc-menu>
        </el-card>

        <el-card class="section">
          <template #header>
            <span>带子菜单</span>
          </template>
          <p>支持多级子菜单。</p>
          <cc-menu default-active="1" class="menu-demo">
            <cc-menu-item index="1">处理中心</cc-menu-item>
            <cc-menu-item index="2">订单管理</cc-menu-item>
            <cc-sub-menu index="3">
              <template #title>商品管理</template>
              <cc-menu-item index="3-1">商品列表</cc-menu-item>
              <cc-menu-item index="3-2">商品分类</cc-menu-item>
              <cc-sub-menu index="3-3">
                <template #title>商品属性</template>
                <cc-menu-item index="3-3-1">颜色</cc-menu-item>
                <cc-menu-item index="3-3-2">尺寸</cc-menu-item>
              </cc-sub-menu>
            </cc-sub-menu>
            <cc-menu-item index="4">用户管理</cc-menu-item>
          </cc-menu>
        </el-card>

        <el-card class="section">
          <template #header>
            <span>垂直菜单</span>
          </template>
          <p>设置 mode 为 vertical 显示垂直菜单。</p>
          <div class="vertical-menu-wrapper">
            <cc-menu default-active="1" mode="vertical" class="menu-demo-vertical">
              <cc-menu-item index="1">处理中心</cc-menu-item>
              <cc-menu-item index="2">订单管理</cc-menu-item>
              <cc-sub-menu index="3">
                <template #title>商品管理</template>
                <cc-menu-item index="3-1">商品列表</cc-menu-item>
                <cc-menu-item index="3-2">商品分类</cc-menu-item>
              </cc-sub-menu>
              <cc-menu-item index="4">用户管理</cc-menu-item>
            </cc-menu>
          </div>
        </el-card>

        <el-card class="section">
          <template #header>
            <span>带折叠功能</span>
          </template>
          <p>配合折叠按钮使用。</p>
          <div class="collapse-wrapper">
            <el-button @click="collapse = !collapse" class="collapse-btn">
              {{ collapse ? '展开' : '折叠' }}
            </el-button>
            <cc-menu :collapse="collapse" class="menu-demo-collapse">
              <cc-menu-item index="1">
                <span>处理中心</span>
              </cc-menu-item>
              <cc-menu-item index="2">
                <span>订单管理</span>
              </cc-menu-item>
              <cc-menu-item index="3">
                <span>商品管理</span>
              </cc-menu-item>
              <cc-menu-item index="4">
                <span>用户管理</span>
              </cc-menu-item>
            </cc-menu>
          </div>
        </el-card>

        <el-card class="section">
          <template #header>
            <span>带分组</span>
          </template>
          <p>使用 MenuItemGroup 进行菜单分组。</p>
          <cc-menu default-active="1" class="menu-demo">
            <cc-menu-item index="1">处理中心</cc-menu-item>
            <cc-menu-item-group title="订单管理">
              <cc-menu-item index="2-1">全部订单</cc-menu-item>
              <cc-menu-item index="2-2">待付款</cc-menu-item>
              <cc-menu-item index="2-3">待发货</cc-menu-item>
            </cc-menu-item-group>
            <cc-menu-item-group title="商品管理">
              <cc-menu-item index="3-1">商品列表</cc-menu-item>
              <cc-menu-item index="3-2">商品分类</cc-menu-item>
            </cc-menu-item-group>
          </cc-menu>
        </el-card>

        <el-card class="section">
          <template #header>
            <span>事件监听</span>
          </template>
          <p>监听菜单选择事件。</p>
          <p>当前激活: {{ activeIndex || '无' }}</p>
          <cc-menu default-active="1" @select="handleSelect" class="menu-demo">
            <cc-menu-item index="1">处理中心</cc-menu-item>
            <cc-menu-item index="2">订单管理</cc-menu-item>
            <cc-menu-item index="3">商品管理</cc-menu-item>
            <cc-menu-item index="4">用户管理</cc-menu-item>
          </cc-menu>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CcMenu from '@/components/Menu/index.vue'
import CcMenuItem from '@/components/Menu/MenuItem.vue'
import CcSubMenu from '@/components/Menu/SubMenu.vue'
import CcMenuItemGroup from '@/components/Menu/MenuItemGroup.vue'

const collapse = ref(false)
const activeIndex = ref('')

const handleSelect = (index: string, indexPath: string[]) => {
  activeIndex.value = index
  console.log('选择菜单:', index, indexPath)
}
</script>

<style scoped>
.menu-demo {
  border-right: none;
}

.menu-demo-vertical {
  width: 200px;
}

.menu-demo-collapse {
  width: 200px;
}

.vertical-menu-wrapper {
  display: flex;
}

.collapse-wrapper {
  display: flex;
  align-items: flex-start;
}

.collapse-btn {
  margin-right: 20px;
}

.section {
  margin-bottom: 20px;
}
</style>
