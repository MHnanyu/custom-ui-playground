<template>
  <div class="dialog-demo">
    <h2>Dialog 对话框</h2>
    <p>在保留当前页面状态的情况下，告知用户并承载相关操作。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="dialogVisible1 = true">打开对话框</cc-button>
        <cc-dialog v-model="dialogVisible1" title="提示" width="500px">
          <span>这是一段内容</span>
          <template #footer>
            <span class="dialog-footer">
              <cc-button @click="dialogVisible1 = false">取消</cc-button>
              <cc-button type="primary" @click="dialogVisible1 = false">确定</cc-button>
            </span>
          </template>
        </cc-dialog>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>不显示标题</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="dialogVisible2 = true">打开对话框</cc-button>
        <cc-dialog v-model="dialogVisible2" :show-title="false">
          <span>不显示标题的对话框</span>
        </cc-dialog>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>居中对话框</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="dialogVisible3 = true">居中对话框</cc-button>
        <cc-dialog v-model="dialogVisible3" title="提示" width="500px" center>
          <span>内容居中的对话框</span>
        </cc-dialog>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用关闭</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="dialogVisible4 = true">禁用关闭</cc-button>
        <cc-dialog
          v-model="dialogVisible4"
          title="提示"
          width="500px"
          :close-on-click-modal="false"
          :show-close="false"
        >
          <span>禁用点击遮罩关闭和显示关闭按钮</span>
        </cc-dialog>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>全屏对话框</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="dialogVisible5 = true">全屏对话框</cc-button>
        <cc-dialog v-model="dialogVisible5" title="提示" fullscreen>
          <span>全屏显示的对话框</span>
        </cc-dialog>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义尺寸</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="dialogVisible6 = true">30% 宽度</cc-button>
        <cc-button type="primary" @click="dialogVisible7 = true">800px 宽度</cc-button>
        <cc-dialog v-model="dialogVisible6" title="提示" width="30%">
          <span>30% 宽度的对话框</span>
        </cc-dialog>
        <cc-dialog v-model="dialogVisible7" title="提示" width="800">
          <span>800px 宽度的对话框</span>
        </cc-dialog>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="dialogVisible8 = true">查看事件</cc-button>
        <cc-button @click="dialogVisible9 = true">销毁内容</cc-button>
        <cc-dialog
          v-model="dialogVisible8"
          title="提示"
          width="500px"
          @open="handleOpen"
          @opened="handleOpened"
          @close="handleClose"
          @closed="handleClosed"
        >
          <span>打开浏览器控制台查看事件日志</span>
        </cc-dialog>
        <cc-dialog v-model="dialogVisible9" title="提示" width="500px" destroy-on-close>
          <span>关闭时销毁内容：{{ Math.random() }}</span>
        </cc-dialog>
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
import CcDialog from '@/components/Dialog/index.vue'

const dialogVisible1 = ref(false)
const dialogVisible2 = ref(false)
const dialogVisible3 = ref(false)
const dialogVisible4 = ref(false)
const dialogVisible5 = ref(false)
const dialogVisible6 = ref(false)
const dialogVisible7 = ref(false)
const dialogVisible8 = ref(false)
const dialogVisible9 = ref(false)
const eventLog = ref<string[]>([])

const handleOpen = () => {
  eventLog.value.push('open: 对话框打开')
}

const handleOpened = () => {
  eventLog.value.push('opened: 对话框打开动画结束')
}

const handleClose = () => {
  eventLog.value.push('close: 对话框关闭')
}

const handleClosed = () => {
  eventLog.value.push('closed: 对话框关闭动画结束')
}
</script>

<style scoped>
.dialog-demo {
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

.dialog-footer {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
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
