<template>
  <div class="tooltip-demo">
    <h2>Tooltip 文字提示</h2>
    <p>常用于展示鼠标 hover 时的提示信息。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="button-group">
        <cc-tooltip content="这是一段提示信息">
          <cc-button>鼠标悬停</cc-button>
        </cc-tooltip>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>展示位置 - 上面</span>
      </template>
      <div class="button-group placement-group">
        <cc-tooltip content="上面" placement="top">
          <cc-button>top</cc-button>
        </cc-tooltip>
        <cc-tooltip content="上面开始" placement="top-start">
          <cc-button>top-start</cc-button>
        </cc-tooltip>
        <cc-tooltip content="上面结束" placement="top-end">
          <cc-button>top-end</cc-button>
        </cc-tooltip>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>展示位置 - 下面</span>
      </template>
      <div class="button-group placement-group">
        <cc-tooltip content="下面" placement="bottom">
          <cc-button>bottom</cc-button>
        </cc-tooltip>
        <cc-tooltip content="下面开始" placement="bottom-start">
          <cc-button>bottom-start</cc-button>
        </cc-tooltip>
        <cc-tooltip content="下面结束" placement="bottom-end">
          <cc-button>bottom-end</cc-button>
        </cc-tooltip>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>展示位置 - 左侧</span>
      </template>
      <div class="button-group placement-group">
        <cc-tooltip content="左边" placement="left">
          <cc-button>left</cc-button>
        </cc-tooltip>
        <cc-tooltip content="左边开始" placement="left-start">
          <cc-button>left-start</cc-button>
        </cc-tooltip>
        <cc-tooltip content="左边结束" placement="left-end">
          <cc-button>left-end</cc-button>
        </cc-tooltip>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>展示位置 - 右侧</span>
      </template>
      <div class="button-group placement-group">
        <cc-tooltip content="右边" placement="right">
          <cc-button>right</cc-button>
        </cc-tooltip>
        <cc-tooltip content="右边开始" placement="right-start">
          <cc-button>right-start</cc-button>
        </cc-tooltip>
        <cc-tooltip content="右边结束" placement="right-end">
          <cc-button>right-end</cc-button>
        </cc-tooltip>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>主题</span>
      </template>
      <div class="button-group">
        <cc-tooltip content="深色主题" effect="dark">
          <cc-button>深色主题</cc-button>
        </cc-tooltip>
        <cc-tooltip content="浅色主题" effect="light">
          <cc-button>浅色主题</cc-button>
        </cc-tooltip>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>触发方式</span>
      </template>
      <div class="button-group">
        <cc-tooltip content="hover 触发">
          <cc-button>hover</cc-button>
        </cc-tooltip>
        <cc-tooltip content="click 触发" trigger="click">
          <cc-button>click</cc-button>
        </cc-tooltip>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>手动控制显示</span>
      </template>
      <div class="button-group">
        <cc-tooltip v-model="visible" content="手动控制">
          <cc-button @click="visible = !visible">手动控制</cc-button>
        </cc-tooltip>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用</span>
      </template>
      <div class="button-group">
        <cc-tooltip content="禁用状态" disabled>
          <cc-button>禁用</cc-button>
        </cc-tooltip>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>显示/隐藏延迟</span>
      </template>
      <div class="button-group">
        <cc-tooltip content="显示延迟 500ms" :show-after="500">
          <cc-button>显示延迟</cc-button>
        </cc-tooltip>
        <cc-tooltip content="隐藏延迟 500ms" :hide-after="500">
          <cc-button>隐藏延迟</cc-button>
        </cc-tooltip>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>隐藏箭头</span>
      </template>
      <div class="button-group">
        <cc-tooltip content="隐藏箭头" :show-arrow="false">
          <cc-button>隐藏箭头</cc-button>
        </cc-tooltip>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义内容 - 使用插槽</span>
      </template>
      <div class="button-group">
        <cc-tooltip>
          <template #content>
            <div style="color: #409eff; font-weight: bold;">自定义内容</div>
          </template>
          <cc-button>使用插槽</cc-button>
        </cc-tooltip>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="button-group">
        <cc-tooltip content="查看控制台日志" @show="handleShow" @hide="handleHide">
          <cc-button>查看事件</cc-button>
        </cc-tooltip>
      </div>
      <div v-if="eventLog.length" class="event-log">
        <h4>事件日志：</h4>
        <ul>
          <li v-for="(log, index) in eventLog" :key="index">{{ log }}</li>
        </ul>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CcButton from '@/components/Button/index.vue'
import CcTooltip from '@/components/Tooltip/index.vue'

const visible = ref(false)
const eventLog = ref<string[]>([])

const handleShow = () => {
  eventLog.value.push('show: 气泡显示')
}

const handleHide = () => {
  eventLog.value.push('hide: 气泡隐藏')
}
</script>

<style scoped>
.tooltip-demo {
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  margin-bottom: 20px;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.placement-group {
  justify-content: center;
}

.event-log {
  margin-top: 20px;
  padding: 10px;
  background: #f5f7fa;
  border-radius: 4px;
}

.event-log ul {
  margin: 0;
  padding-left: 20px;
}
</style>
