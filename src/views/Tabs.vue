<template>
  <div class="tabs-demo">
    <h2>Tabs 标签页</h2>
    <p>分隔内容上有关联但不属于同一层级的内容。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <p>基础的标签页使用方法。</p>
      <cc-tabs v-model="active1">
        <cc-tab-pane label="用户管理" name="first">用户管理内容</cc-tab-pane>
        <cc-tab-pane label="配置管理" name="second">配置管理内容</cc-tab-pane>
        <cc-tab-pane label="角色管理" name="third">角色管理内容</cc-tab-pane>
      </cc-tabs>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>卡片风格</span>
      </template>
      <p>设置 type 为 card 可以显示为卡片风格。</p>
      <cc-tabs v-model="active2" type="card">
        <cc-tab-pane label="用户管理" name="first">用户管理内容</cc-tab-pane>
        <cc-tab-pane label="配置管理" name="second">配置管理内容</cc-tab-pane>
        <cc-tab-pane label="角色管理" name="third">角色管理内容</cc-tab-pane>
      </cc-tabs>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>边框卡片风格</span>
      </template>
      <p>设置 type 为 border-card 可以显示为边框卡片风格。</p>
      <cc-tabs v-model="active3" type="border-card">
        <cc-tab-pane label="用户管理" name="first">用户管理内容</cc-tab-pane>
        <cc-tab-pane label="配置管理" name="second">配置管理内容</cc-tab-pane>
        <cc-tab-pane label="角色管理" name="third">角色管理内容</cc-tab-pane>
      </cc-tabs>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义标签</span>
      </template>
      <p>可以通过设置 label 添加自定义标签内容。</p>
      <cc-tabs v-model="active4">
        <cc-tab-pane name="first">
          <template #label>
            <span><el-icon><User /></el-icon> 用户管理</span>
          </template>
          用户管理内容
        </cc-tab-pane>
        <cc-tab-pane name="second">
          <template #label>
            <span><el-icon><Setting /></el-icon> 配置管理</span>
          </template>
          配置管理内容
        </cc-tab-pane>
        <cc-tab-pane name="third">
          <template #label>
            <span><el-icon><UserFilled /></el-icon> 角色管理</span>
          </template>
          角色管理内容
        </cc-tab-pane>
      </cc-tabs>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用状态</span>
      </template>
      <p>设置 disabled 属性来禁用标签页。</p>
      <cc-tabs v-model="active5">
        <cc-tab-pane label="用户管理" name="first">用户管理内容</cc-tab-pane>
        <cc-tab-pane label="配置管理" name="second" disabled>配置管理内容</cc-tab-pane>
        <cc-tab-pane label="角色管理" name="third">角色管理内容</cc-tab-pane>
      </cc-tabs>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>可关闭</span>
      </template>
      <p>设置 closable 属性可以关闭标签页。</p>
      <cc-tabs v-model="active6" type="card" editable @tab-remove="handleTabRemove">
        <cc-tab-pane v-for="item in tabList" :key="item.name" :label="item.title" :name="item.name">
          {{ item.content }}
        </cc-tab-pane>
      </cc-tabs>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>动态添加标签页</span>
      </template>
      <p>可以动态添加和关闭标签页。</p>
      <cc-tabs v-model="active7" type="card" editable addable @tab-add="handleTabAdd" @tab-remove="handleTabRemove7">
        <cc-tab-pane v-for="item in tabList7" :key="item.name" :label="item.title" :name="item.name">
          {{ item.content }}
        </cc-tab-pane>
      </cc-tabs>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>延迟加载</span>
      </template>
      <p>设置 lazy 属性可以延迟加载标签页内容。</p>
      <cc-tabs v-model="active8" type="border-card">
        <cc-tab-pane label="用户管理" name="first">用户管理内容</cc-tab-pane>
        <cc-tab-pane label="配置管理" name="second" lazy>配置管理内容（延迟加载）</cc-tab-pane>
        <cc-tab-pane label="角色管理" name="third" lazy>角色管理内容（延迟加载）</cc-tab-pane>
      </cc-tabs>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>动态效果</span>
      </template>
      <p>可以通过 effect 属性设置切换动画效果。</p>
      <div style="margin-bottom: 20px">
        <el-radio-group v-model="effect" size="small">
          <el-radio-button value="light">light</el-radio-button>
          <el-radio-button value="dark">dark</el-radio-button>
        </el-radio-group>
      </div>
      <cc-tabs v-model="active9" :effect="effect" type="border-card">
        <cc-tab-pane label="用户管理" name="first">用户管理内容</cc-tab-pane>
        <cc-tab-pane label="配置管理" name="second">配置管理内容</cc-tab-pane>
        <cc-tab-pane label="角色管理" name="third">角色管理内容</cc-tab-pane>
      </cc-tabs>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { User, Setting, UserFilled } from '@element-plus/icons-vue'
import CcTabs from '@/components/Tabs/index.vue'
import CcTabPane from '@/components/TabPane/index.vue'
import { ElMessage } from 'element-plus'

const active1 = ref('first')
const active2 = ref('first')
const active3 = ref('first')
const active4 = ref('first')
const active5 = ref('first')
const active6 = ref('first')
const active7 = ref('first')
const active8 = ref('first')
const active9 = ref('first')
const effect = ref<'light' | 'dark'>('light')

const tabList = ref([
  { title: '用户管理', name: 'first', content: '用户管理内容' },
  { title: '配置管理', name: 'second', content: '配置管理内容' },
  { title: '角色管理', name: 'third', content: '角色管理内容' }
])

const tabList7 = ref([
  { title: '用户管理', name: 'first', content: '用户管理内容' },
  { title: '配置管理', name: 'second', content: '配置管理内容' },
  { title: '角色管理', name: 'third', content: '角色管理内容' }
])

const handleTabRemove = (tabName: string | number) => {
  ElMessage.info(`关闭了标签: ${tabName}`)
  tabList.value = tabList.value.filter(item => item.name !== tabName)
}

const handleTabRemove7 = (tabName: string | number) => {
  tabList7.value = tabList7.value.filter(item => item.name !== tabName)
}

const handleTabAdd = () => {
  const newTabName = `${tabList7.value.length + 1}`
  tabList7.value.push({
    title: `新标签${newTabName}`,
    name: newTabName,
    content: `新标签${newTabName}内容`
  })
}
</script>

<style scoped>
.tabs-demo {
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 100px;
}

.section {
  margin-bottom: 20px;
}

cc-tabs {
  margin-top: 10px;
}
</style>
