<template>
  <div class="drawer-demo">
    <h2>Drawer 抽屉</h2>
    <p>有些时候，Dialog 组件并不满足你的需求，Drawer 拥有和 Dialog 类似的 API，但是样式不同。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="drawerVisible1 = true">打开抽屉</cc-button>
        <cc-drawer v-model="drawerVisible1" title="提示" size="500px">
          <span>这是一段内容</span>
        </cc-drawer>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>方向 - 从右打开</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="drawerVisible2 = true">从右打开</cc-button>
        <cc-drawer v-model="drawerVisible2" title="提示" direction="rtl" size="500px">
          <span>从右侧打开的抽屉</span>
        </cc-drawer>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>方向 - 从左打开</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="drawerVisible3 = true">从左打开</cc-button>
        <cc-drawer v-model="drawerVisible3" title="提示" direction="ltr" size="500px">
          <span>从左侧打开的抽屉</span>
        </cc-drawer>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>方向 - 从上打开</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="drawerVisible4 = true">从上打开</cc-button>
        <cc-drawer v-model="drawerVisible4" title="提示" direction="ttb" size="50%">
          <span>从顶部打开的抽屉</span>
        </cc-drawer>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>方向 - 从下打开</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="drawerVisible5 = true">从下打开</cc-button>
        <cc-drawer v-model="drawerVisible5" title="提示" direction="btt" size="50%">
          <span>从底部打开的抽屉</span>
        </cc-drawer>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>不显示标题</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="drawerVisible6 = true">打开抽屉</cc-button>
        <cc-drawer v-model="drawerVisible6" :show-title="false" size="500px">
          <span>不显示标题的抽屉</span>
        </cc-drawer>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义尺寸</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="drawerVisible7 = true">30% 宽度</cc-button>
        <cc-button type="primary" @click="drawerVisible8 = true">800px 宽度</cc-button>
        <cc-drawer v-model="drawerVisible7" title="提示" size="30%">
          <span>30% 宽度的抽屉</span>
        </cc-drawer>
        <cc-drawer v-model="drawerVisible8" title="提示" :size="800">
          <span>800px 宽度的抽屉</span>
        </cc-drawer>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用关闭</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="drawerVisible9 = true">禁用关闭</cc-button>
        <cc-drawer
          v-model="drawerVisible9"
          title="提示"
          size="500px"
          :close-on-click-modal="false"
          :show-close="false"
        >
          <span>禁用点击遮罩关闭和显示关闭按钮</span>
        </cc-drawer>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="button-group">
        <cc-button type="primary" @click="drawerVisible10 = true">查看事件</cc-button>
        <cc-button @click="drawerVisible11 = true">销毁内容</cc-button>
        <cc-drawer
          v-model="drawerVisible10"
          title="提示"
          size="500px"
          @open="handleOpen"
          @opened="handleOpened"
          @close="handleClose"
          @closed="handleClosed"
        >
          <span>打开浏览器控制台查看事件日志</span>
        </cc-drawer>
        <cc-drawer v-model="drawerVisible11" title="提示" size="500px" destroy-on-close>
          <span>关闭时销毁内容：{{ Math.random() }}</span>
        </cc-drawer>
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
import CcDrawer from '@/components/Drawer/index.vue'

const drawerVisible1 = ref(false)
const drawerVisible2 = ref(false)
const drawerVisible3 = ref(false)
const drawerVisible4 = ref(false)
const drawerVisible5 = ref(false)
const drawerVisible6 = ref(false)
const drawerVisible7 = ref(false)
const drawerVisible8 = ref(false)
const drawerVisible9 = ref(false)
const drawerVisible10 = ref(false)
const drawerVisible11 = ref(false)
const eventLog = ref<string[]>([])

const handleOpen = () => {
  eventLog.value.push('open: 抽屉打开')
}

const handleOpened = () => {
  eventLog.value.push('opened: 抽屉打开动画结束')
}

const handleClose = () => {
  eventLog.value.push('close: 抽屉关闭')
}

const handleClosed = () => {
  eventLog.value.push('closed: 抽屉关闭动画结束')
}
</script>

<style scoped>
.drawer-demo {
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
