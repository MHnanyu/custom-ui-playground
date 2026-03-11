<template>
  <div class="popconfirm-demo">
    <h2>Popconfirm 气泡确认框</h2>
    <p>一种目标元素的操作命令，用户点击后，弹出一个气泡确认框来进行二次确认。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="button-group">
        <cc-popconfirm
          title="确定要删除这项内容吗？"
          @confirm="handleConfirm"
          @cancel="handleCancel"
        >
          <template #reference>
            <cc-button>删除</cc-button>
          </template>
        </cc-popconfirm>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义按钮文字</span>
      </template>
      <div class="button-group">
        <cc-popconfirm
          confirm-button-text="好的"
          cancel-button-text="算了"
          title="确定要执行此操作吗？"
        >
          <template #reference>
            <cc-button>自定义文字</cc-button>
          </template>
        </cc-popconfirm>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>按钮类型</span>
      </template>
      <div class="button-group">
        <cc-popconfirm
          title="确定要删除吗？"
          confirm-button-type="primary"
        >
          <template #reference>
            <cc-button>主要按钮</cc-button>
          </template>
        </cc-popconfirm>

        <cc-popconfirm
          title="确定要删除吗？"
          confirm-button-type="success"
        >
          <template #reference>
            <cc-button type="success">成功按钮</cc-button>
          </template>
        </cc-popconfirm>

        <cc-popconfirm
          title="确定要删除吗？"
          confirm-button-type="danger"
        >
          <template #reference>
            <cc-button type="danger">危险按钮</cc-button>
          </template>
        </cc-popconfirm>

        <cc-popconfirm
          title="确定要删除吗？"
          confirm-button-type="warning"
        >
          <template #reference>
            <cc-button type="warning">警告按钮</cc-button>
          </template>
        </cc-popconfirm>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>展示位置 - 上面</span>
      </template>
      <div class="button-group placement-group">
        <cc-popconfirm title="上面" placement="top">
          <template #reference>
            <cc-button>top</cc-button>
          </template>
        </cc-popconfirm>

        <cc-popconfirm title="上面开始" placement="top-start">
          <template #reference>
            <cc-button>top-start</cc-button>
          </template>
        </cc-popconfirm>

        <cc-popconfirm title="上面结束" placement="top-end">
          <template #reference>
            <cc-button>top-end</cc-button>
          </template>
        </cc-popconfirm>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>展示位置 - 下面</span>
      </template>
      <div class="button-group placement-group">
        <cc-popconfirm title="下面" placement="bottom">
          <template #reference>
            <cc-button>bottom</cc-button>
          </template>
        </cc-popconfirm>

        <cc-popconfirm title="下面开始" placement="bottom-start">
          <template #reference>
            <cc-button>bottom-start</cc-button>
          </template>
        </cc-popconfirm>

        <cc-popconfirm title="下面结束" placement="bottom-end">
          <template #reference>
            <cc-button>bottom-end</cc-button>
          </template>
        </cc-popconfirm>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>展示位置 - 左侧</span>
      </template>
      <div class="button-group placement-group">
        <cc-popconfirm title="左边" placement="left">
          <template #reference>
            <cc-button>left</cc-button>
          </template>
        </cc-popconfirm>

        <cc-popconfirm title="左边开始" placement="left-start">
          <template #reference>
            <cc-button>left-start</cc-button>
          </template>
        </cc-popconfirm>

        <cc-popconfirm title="左边结束" placement="left-end">
          <template #reference>
            <cc-button>left-end</cc-button>
          </template>
        </cc-popconfirm>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>展示位置 - 右侧</span>
      </template>
      <div class="button-group placement-group">
        <cc-popconfirm title="右边" placement="right">
          <template #reference>
            <cc-button>right</cc-button>
          </template>
        </cc-popconfirm>

        <cc-popconfirm title="右边开始" placement="right-start">
          <template #reference>
            <cc-button>right-start</cc-button>
          </template>
        </cc-popconfirm>

        <cc-popconfirm title="右边结束" placement="right-end">
          <template #reference>
            <cc-button>right-end</cc-button>
          </template>
        </cc-popconfirm>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>隐藏图标</span>
      </template>
      <div class="button-group">
        <cc-popconfirm hide-icon title="确定要执行此操作吗？">
          <template #reference>
            <cc-button>隐藏图标</cc-button>
          </template>
        </cc-popconfirm>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用</span>
      </template>
      <div class="button-group">
        <cc-popconfirm disabled title="禁用状态">
          <template #reference>
            <cc-button>禁用</cc-button>
          </template>
        </cc-popconfirm>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>手动控制显示</span>
      </template>
      <div class="button-group">
        <cc-popconfirm v-model="visible" title="手动控制显示">
          <template #reference>
            <cc-button @click="visible = !visible">手动控制</cc-button>
          </template>
        </cc-popconfirm>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义图标</span>
      </template>
      <div class="button-group">
        <cc-popconfirm title="确定要删除吗？" :icon="InfoFilled">
          <template #reference>
            <cc-button>自定义图标</cc-button>
          </template>
        </cc-popconfirm>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="button-group">
        <cc-popconfirm
          title="查看控制台日志"
          @confirm="handleConfirm"
          @cancel="handleCancel"
          @show="handleShow"
          @hide="handleHide"
        >
          <template #reference>
            <cc-button>查看事件</cc-button>
          </template>
        </cc-popconfirm>
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
import { InfoFilled } from '@element-plus/icons-vue'
import CcButton from '@/components/Button/index.vue'
import CcPopconfirm from '@/components/Popconfirm/index.vue'

const visible = ref(false)
const eventLog = ref<string[]>([])

const handleConfirm = () => {
  eventLog.value.push('confirm: 点击了确认')
}

const handleCancel = () => {
  eventLog.value.push('cancel: 点击了取消')
}

const handleShow = () => {
  eventLog.value.push('show: 气泡确认框显示')
}

const handleHide = () => {
  eventLog.value.push('hide: 气泡确认框隐藏')
}
</script>

<style scoped>
.popconfirm-demo {
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
