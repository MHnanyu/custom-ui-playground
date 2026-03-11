<template>
  <div class="popover-demo">
    <h2>Popover 气泡卡片</h2>
    <p>弹出式卡片，用于展示更复杂的内容。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="button-group">
        <cc-popover title="标题" content="这是一段内容" width="200">
          <template #reference>
            <cc-button>点击弹出</cc-button>
          </template>
        </cc-popover>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>触发方式</span>
      </template>
      <div class="button-group">
        <cc-popover trigger="click" content="click 触发">
          <template #reference>
            <cc-button>click 触发</cc-button>
          </template>
        </cc-popover>
        <cc-popover trigger="hover" content="hover 触发">
          <template #reference>
            <cc-button>hover 触发</cc-button>
          </template>
        </cc-popover>
        <cc-popover trigger="focus" content="focus 触发">
          <template #reference>
            <cc-button>focus 触发</cc-button>
          </template>
        </cc-popover>
        <cc-popover trigger="manual" v-model="manualVisible" content="手动触发">
          <template #reference>
            <cc-button @click="manualVisible = !manualVisible">manual 触发</cc-button>
          </template>
        </cc-popover>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>展示位置 - 上面</span>
      </template>
      <div class="button-group placement-group">
        <cc-popover placement="top" content="top">
          <template #reference>
            <cc-button>top</cc-button>
          </template>
        </cc-popover>
        <cc-popover placement="top-start" content="top-start">
          <template #reference>
            <cc-button>top-start</cc-button>
          </template>
        </cc-popover>
        <cc-popover placement="top-end" content="top-end">
          <template #reference>
            <cc-button>top-end</cc-button>
          </template>
        </cc-popover>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>展示位置 - 下面</span>
      </template>
      <div class="button-group placement-group">
        <cc-popover placement="bottom" content="bottom">
          <template #reference>
            <cc-button>bottom</cc-button>
          </template>
        </cc-popover>
        <cc-popover placement="bottom-start" content="bottom-start">
          <template #reference>
            <cc-button>bottom-start</cc-button>
          </template>
        </cc-popover>
        <cc-popover placement="bottom-end" content="bottom-end">
          <template #reference>
            <cc-button>bottom-end</cc-button>
          </template>
        </cc-popover>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>展示位置 - 左侧</span>
      </template>
      <div class="button-group placement-group">
        <cc-popover placement="left" content="left">
          <template #reference>
            <cc-button>left</cc-button>
          </template>
        </cc-popover>
        <cc-popover placement="left-start" content="left-start">
          <template #reference>
            <cc-button>left-start</cc-button>
          </template>
        </cc-popover>
        <cc-popover placement="left-end" content="left-end">
          <template #reference>
            <cc-button>left-end</cc-button>
          </template>
        </cc-popover>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>展示位置 - 右侧</span>
      </template>
      <div class="button-group placement-group">
        <cc-popover placement="right" content="right">
          <template #reference>
            <cc-button>right</cc-button>
          </template>
        </cc-popover>
        <cc-popover placement="right-start" content="right-start">
          <template #reference>
            <cc-button>right-start</cc-button>
          </template>
        </cc-popover>
        <cc-popover placement="right-end" content="right-end">
          <template #reference>
            <cc-button>right-end</cc-button>
          </template>
        </cc-popover>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>嵌套复杂内容</span>
      </template>
      <div class="button-group">
        <cc-popover width="220">
          <template #reference>
            <cc-button>嵌套复杂内容</cc-button>
          </template>
          <div class="custom-content">
            <p>用户名: admin</p>
            <p>角色: 管理员</p>
            <p>状态: 正常</p>
          </div>
        </cc-popover>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>嵌套操作</span>
      </template>
      <div class="button-group">
        <cc-popover width="200">
          <template #reference>
            <cc-button>操作 Popover</cc-button>
          </template>
          <div class="action-content">
            <p>确定要执行此操作吗？</p>
            <div class="action-buttons">
              <cc-button size="small" @click="handleCancel">取消</cc-button>
              <cc-button size="small" type="primary" @click="handleConfirm">确定</cc-button>
            </div>
          </div>
        </cc-popover>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用</span>
      </template>
      <div class="button-group">
        <cc-popover disabled content="禁用状态">
          <template #reference>
            <cc-button>禁用</cc-button>
          </template>
        </cc-popover>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>不显示箭头</span>
      </template>
      <div class="button-group">
        <cc-popover :show-arrow="false" title="无箭头" content="不显示箭头">
          <template #reference>
            <cc-button>不显示箭头</cc-button>
          </template>
        </cc-popover>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="button-group">
        <cc-popover
          title="事件测试"
          content="查看控制台日志"
          @show="handleShow"
          @hide="handleHide"
        >
          <template #reference>
            <cc-button>查看事件</cc-button>
          </template>
        </cc-popover>
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
import CcPopover from '@/components/Popover/index.vue'

const manualVisible = ref(false)
const eventLog = ref<string[]>([])

const handleShow = () => {
  eventLog.value.push('show: 气泡卡片显示')
}

const handleHide = () => {
  eventLog.value.push('hide: 气泡卡片隐藏')
}

const handleCancel = () => {
  eventLog.value.push('点击了取消')
}

const handleConfirm = () => {
  eventLog.value.push('点击了确定')
}
</script>

<style scoped>
.popover-demo {
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

.custom-content p {
  margin: 5px 0;
  font-size: 14px;
}

.custom-content p:first-child {
  margin-top: 0;
}

.action-content p {
  margin-bottom: 10px;
}

.action-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
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
