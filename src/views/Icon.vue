<template>
  <div class="icon-demo">
    <h2>Icon 图标</h2>
    <p>语义化的矢量图标。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="icon-group">
        <cc-icon :icon="Search" />
        <cc-icon :icon="Edit" />
        <cc-icon :icon="Check" />
        <cc-icon :icon="Message" />
        <cc-icon :icon="Star" />
        <cc-icon :icon="Delete" />
        <cc-icon :icon="Setting" />
        <cc-icon :icon="User" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>图标尺寸</span>
      </template>
      <div class="icon-group">
        <cc-icon :icon="Search" :size="16" />
        <cc-icon :icon="Search" :size="24" />
        <cc-icon :icon="Search" :size="32" />
        <cc-icon :icon="Search" :size="48" />
        <cc-icon :icon="Search" :size="64" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>图标颜色</span>
      </template>
      <div class="icon-group">
        <cc-icon :icon="Search" :size="32" color="#409EFC" />
        <cc-icon :icon="Search" :size="32" color="#67C23A" />
        <cc-icon :icon="Search" :size="32" color="#E6A23C" />
        <cc-icon :icon="Search" :size="32" color="#F56C6C" />
        <cc-icon :icon="Search" :size="32" color="#909399" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>常用图标集合</span>
      </template>
      <div class="icon-grid">
        <div v-for="icon in icons" :key="icon.name" class="icon-item">
          <cc-icon :icon="icon.component" :size="24" />
          <span>{{ icon.name }}</span>
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>结合按钮使用</span>
      </template>
      <div class="icon-group">
        <cc-button type="primary">
          <cc-icon :icon="Search" />
          <span>搜索</span>
        </cc-button>
        <cc-button type="success">
          <cc-icon :icon="Check" />
          <span>确认</span>
        </cc-button>
        <cc-button type="danger">
          <cc-icon :icon="Delete" />
          <span>删除</span>
        </cc-button>
        <cc-button type="warning">
          <cc-icon :icon="Edit" />
          <span>编辑</span>
        </cc-button>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import {
  Search,
  Edit,
  Check,
  Message,
  Star,
  Delete,
  Setting,
  User,
  HomeFilled,
  Document,
  Folder,
  PictureFilled,
  VideoCamera,
  Phone,
  Location,
  Calendar,
  Clock,
  Bell,
  ChatDotRound,
  ShoppingCart,
  Goods,
  Wallet,
  Key,
  Lock,
  Unlock,
  View,
  Hide,
  Link,
  Share,
  Download,
  Upload,
  Refresh,
  Close,
  Plus,
  Minus,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown
} from '@element-plus/icons-vue'
import CcIcon from '@/components/Icon/index.vue'
import CcButton from '@/components/Button/index.vue'

const icons = [
  { name: 'Search', component: Search },
  { name: 'Edit', component: Edit },
  { name: 'Check', component: Check },
  { name: 'Message', component: Message },
  { name: 'Star', component: Star },
  { name: 'Delete', component: Delete },
  { name: 'Setting', component: Setting },
  { name: 'User', component: User },
  { name: 'HomeFilled', component: HomeFilled },
  { name: 'Document', component: Document },
  { name: 'Folder', component: Folder },
  { name: 'PictureFilled', component: PictureFilled },
  { name: 'VideoCamera', component: VideoCamera },
  { name: 'Phone', component: Phone },
  { name: 'Location', component: Location },
  { name: 'Calendar', component: Calendar },
  { name: 'Clock', component: Clock },
  { name: 'Bell', component: Bell },
  { name: 'ChatDotRound', component: ChatDotRound },
  { name: 'ShoppingCart', component: ShoppingCart },
  { name: 'Goods', component: Goods },
  { name: 'Wallet', component: Wallet },
  { name: 'Key', component: Key },
  { name: 'Lock', component: Lock },
  { name: 'Unlock', component: Unlock },
  { name: 'View', component: View },
  { name: 'Hide', component: Hide },
  { name: 'Link', component: Link },
  { name: 'Share', component: Share },
  { name: 'Download', component: Download },
  { name: 'Upload', component: Upload },
  { name: 'Refresh', component: Refresh },
  { name: 'Close', component: Close },
  { name: 'Plus', component: Plus },
  { name: 'Minus', component: Minus },
  { name: 'ArrowLeft', component: ArrowLeft },
  { name: 'ArrowRight', component: ArrowRight },
  { name: 'ArrowUp', component: ArrowUp },
  { name: 'ArrowDown', component: ArrowDown }
]
</script>

<style scoped>
.icon-demo {
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  margin-bottom: 20px;
}

.icon-group {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 16px;
}

.icon-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  transition: all 0.3s;
}

.icon-item:hover {
  border-color: #409eff;
  color: #409eff;
}

.icon-item span {
  font-size: 12px;
  color: #909399;
}
</style>
