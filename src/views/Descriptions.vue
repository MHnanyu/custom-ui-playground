<template>
  <div class="descriptions-demo">
    <h2>Descriptions 描述列表</h2>
    <p>列表形式展示多个字段。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <cc-descriptions title="User Info">
        <cc-descriptions-item label="Username">kooriookami</cc-descriptions-item>
        <cc-descriptions-item label="Telephone">18100000000</cc-descriptions-item>
        <cc-descriptions-item label="Place">Suzhou</cc-descriptions-item>
        <cc-descriptions-item label="Remarks">
          <el-tag size="small">School</el-tag>
        </cc-descriptions-item>
        <cc-descriptions-item label="Address">
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </cc-descriptions-item>
      </cc-descriptions>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>不同尺寸</span>
      </template>
      <el-radio-group v-model="size">
        <el-radio value="large">Large</el-radio>
        <el-radio value="default">Default</el-radio>
        <el-radio value="small">Small</el-radio>
      </el-radio-group>
      <cc-descriptions
        class="margin-top"
        title="With border"
        :column="3"
        :size="size"
        border
      >
        <template #extra>
          <el-button type="primary">Operation</el-button>
        </template>
        <cc-descriptions-item label="Username">kooriookami</cc-descriptions-item>
        <cc-descriptions-item label="Telephone">18100000000</cc-descriptions-item>
        <cc-descriptions-item label="Place">Suzhou</cc-descriptions-item>
        <cc-descriptions-item label="Remarks">
          <el-tag size="small">School</el-tag>
        </cc-descriptions-item>
        <cc-descriptions-item label="Address">
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </cc-descriptions-item>
      </cc-descriptions>
      <cc-descriptions
        class="margin-top"
        title="Without border"
        :column="3"
        :size="size"
      >
        <template #extra>
          <el-button type="primary">Operation</el-button>
        </template>
        <cc-descriptions-item label="Username">kooriookami</cc-descriptions-item>
        <cc-descriptions-item label="Telephone">18100000000</cc-descriptions-item>
        <cc-descriptions-item label="Place">Suzhou</cc-descriptions-item>
        <cc-descriptions-item label="Remarks">
          <el-tag size="small">School</el-tag>
        </cc-descriptions-item>
        <cc-descriptions-item label="Address">
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </cc-descriptions-item>
      </cc-descriptions>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>垂直列表 - 水平方向 vs 垂直方向</span>
      </template>
      <div class="demo-label">水平方向 (direction="horizontal") - 标签和内容在同一列：</div>
      <cc-descriptions title="Horizontal List" border :column="3">
        <cc-descriptions-item label="Username">kooriookami</cc-descriptions-item>
        <cc-descriptions-item label="Telephone">18100000000</cc-descriptions-item>
        <cc-descriptions-item label="Place">Suzhou</cc-descriptions-item>
        <cc-descriptions-item label="Remarks">
          <el-tag size="small">School</el-tag>
        </cc-descriptions-item>
        <cc-descriptions-item label="Address">
          No.1188, Wuzhong Avenue
        </cc-descriptions-item>
      </cc-descriptions>

      <div class="demo-label margin-top">垂直方向 (direction="vertical") - 标签和内容分两行显示：</div>
      <cc-descriptions title="Vertical List" direction="vertical" border :column="3">
        <cc-descriptions-item label="Username">kooriookami</cc-descriptions-item>
        <cc-descriptions-item label="Telephone">18100000000</cc-descriptions-item>
        <cc-descriptions-item label="Place">Suzhou</cc-descriptions-item>
        <cc-descriptions-item label="Remarks">
          <el-tag size="small">School</el-tag>
        </cc-descriptions-item>
        <cc-descriptions-item label="Address">
          No.1188, Wuzhong Avenue
        </cc-descriptions-item>
      </cc-descriptions>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>单元格跨行 (rowspan)</span>
      </template>
      <div class="demo-label">Photo 单元格跨 2 行 (rowspan=2)，与右侧两行数据对齐：</div>
      <cc-descriptions title="Rowspan Demo 1" border :column="3">
        <cc-descriptions-item
          :rowspan="2"
          label="Photo"
          align="center"
          class-name="photo-cell"
        >
          <div class="photo-placeholder" style="background: #e6f7ff;">
            <el-avatar :size="60" style="background: #409eff;">跨2行</el-avatar>
          </div>
        </cc-descriptions-item>
        <cc-descriptions-item label="Username">kooriookami</cc-descriptions-item>
        <cc-descriptions-item label="Telephone">18100000000</cc-descriptions-item>
        <cc-descriptions-item label="Place">Suzhou</cc-descriptions-item>
        <cc-descriptions-item label="Remarks">
          <el-tag size="small">School</el-tag>
        </cc-descriptions-item>
      </cc-descriptions>

      <div class="demo-label margin-top">另一个例子 - Avatar 跨 3 行 (rowspan=3)：</div>
      <cc-descriptions title="Rowspan Demo 2" border :column="4">
        <cc-descriptions-item
          :rowspan="3"
          label="Avatar"
          align="center"
          class-name="avatar-cell"
        >
          <div class="photo-placeholder" style="background: #f0f9eb; padding: 15px; border-radius: 8px;">
            <el-avatar :size="50" style="background: #67c23a" />
            <div style="margin-top: 8px; color: #67c23a; font-size: 12px; font-weight: bold;">跨3行</div>
          </div>
        </cc-descriptions-item>
        <cc-descriptions-item label="Name">Zhang San</cc-descriptions-item>
        <cc-descriptions-item label="Age">28</cc-descriptions-item>
        <cc-descriptions-item label="Gender">Male</cc-descriptions-item>
        <cc-descriptions-item label="Email">zhangsan@example.com</cc-descriptions-item>
        <cc-descriptions-item label="Phone">13800138000</cc-descriptions-item>
        <cc-descriptions-item label="Department">Development</cc-descriptions-item>
        <cc-descriptions-item label="Position">Engineer</cc-descriptions-item>
        <cc-descriptions-item label="Join Date">2023-01-15</cc-descriptions-item>
      </cc-descriptions>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义样式 - 通过 class-name 和 label-class-name 自定义</span>
      </template>
      <div class="demo-label">Username 行使用了自定义的标签背景色(绿色)和内容背景色(红色)：</div>
      <cc-descriptions title="Custom Style Demo" :column="3" border>
        <cc-descriptions-item
          label="Username"
          label-class-name="custom-label-green"
          class-name="custom-content-red"
        >
          kooriookami
        </cc-descriptions-item>
        <cc-descriptions-item label="Telephone">18100000000</cc-descriptions-item>
        <cc-descriptions-item label="Place">Suzhou</cc-descriptions-item>
        <cc-descriptions-item
          label="Remarks"
          label-class-name="custom-label-blue"
          class-name="custom-content-yellow"
        >
          <el-tag size="small">School</el-tag>
        </cc-descriptions-item>
        <cc-descriptions-item label="Address" :span="2">
          No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </cc-descriptions-item>
      </cc-descriptions>

      <div class="demo-label margin-top">更明显的样式对比：</div>
      <cc-descriptions title="High Contrast Style" border>
        <cc-descriptions-item
          label="ID"
          label-class-name="label-primary"
          class-name="content-primary"
        >
          1001
        </cc-descriptions-item>
        <cc-descriptions-item
          label="Status"
          label-class-name="label-success"
          class-name="content-success"
        >
          Active
        </cc-descriptions-item>
        <cc-descriptions-item
          label="Type"
          label-class-name="label-warning"
          class-name="content-warning"
        >
          VIP
        </cc-descriptions-item>
        <cc-descriptions-item
          label="Risk"
          label-class-name="label-danger"
          class-name="content-danger"
        >
          High
        </cc-descriptions-item>
      </cc-descriptions>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义标题插槽 (title / extra)</span>
      </template>
      <cc-descriptions border>
        <template #title>
          <div style="display: flex; align-items: center; gap: 8px;">
            <el-icon color="#409eff" :size="20"><User /></el-icon>
            <span style="color: #409eff; font-weight: bold; font-size: 16px;">Custom Title with Icon</span>
          </div>
        </template>
        <template #extra>
          <el-button type="primary" size="small">Edit</el-button>
          <el-button type="danger" size="small" style="margin-left: 8px;">Delete</el-button>
        </template>
        <cc-descriptions-item label="Username">kooriookami</cc-descriptions-item>
        <cc-descriptions-item label="Telephone">18100000000</cc-descriptions-item>
        <cc-descriptions-item label="Place">Suzhou</cc-descriptions-item>
      </cc-descriptions>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义标签插槽 (label slot)</span>
      </template>
      <div class="demo-label">标签中使用图标自定义：</div>
      <cc-descriptions border :column="3">
        <cc-descriptions-item>
          <template #label>
            <div class="custom-label-slot">
              <el-icon color="#409eff"><User /></el-icon>
              <span>Username</span>
            </div>
          </template>
          kooriookami
        </cc-descriptions-item>
        <cc-descriptions-item>
          <template #label>
            <div class="custom-label-slot">
              <el-icon color="#67c23a"><Iphone /></el-icon>
              <span>Telephone</span>
            </div>
          </template>
          18100000000
        </cc-descriptions-item>
        <cc-descriptions-item>
          <template #label>
            <div class="custom-label-slot">
              <el-icon color="#e6a23c"><Location /></el-icon>
              <span>Place</span>
            </div>
          </template>
          Suzhou
        </cc-descriptions-item>
        <cc-descriptions-item>
          <template #label>
            <div class="custom-label-slot">
              <el-icon color="#f56c6c"><Calendar /></el-icon>
              <span>Birthday</span>
            </div>
          </template>
          2000-01-01
        </cc-descriptions-item>
        <cc-descriptions-item>
          <template #label>
            <div class="custom-label-slot">
              <el-icon color="#909399"><Message /></el-icon>
              <span>Email</span>
            </div>
          </template>
          test@example.com
        </cc-descriptions-item>
        <cc-descriptions-item>
          <template #label>
            <div class="custom-label-slot">
              <el-icon color="#b37feb"><OfficeBuilding /></el-icon>
              <span>Company</span>
            </div>
          </template>
          Element Plus
        </cc-descriptions-item>
      </cc-descriptions>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CcDescriptions from '@/components/Descriptions/index.vue'
import CcDescriptionsItem from '@/components/DescriptionsItem/index.vue'
import { User, Iphone, Location, Calendar, Message, OfficeBuilding } from '@element-plus/icons-vue'

import type { ComponentSize } from 'element-plus'

const size = ref<ComponentSize>('default')
</script>

<style scoped>
.descriptions-demo {
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  margin-bottom: 20px;
}

.margin-top {
  margin-top: 20px;
}

.demo-label {
  margin-bottom: 10px;
  color: #606266;
  font-size: 14px;
  font-weight: 500;
}

.custom-label-slot {
  display: flex;
  align-items: center;
  gap: 6px;
}

.photo-cell,
.avatar-cell {
  background-color: #f5f7fa !important;
}

.photo-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
}

:deep(.custom-label-green) {
  background-color: #e1f3d8 !important;
  color: #67c23a !important;
  font-weight: bold;
}

:deep(.custom-content-red) {
  background-color: #fde2e2 !important;
  color: #f56c6c !important;
  font-weight: bold;
}

:deep(.custom-label-blue) {
  background-color: #d9ecff !important;
  color: #409eff !important;
  font-weight: bold;
}

:deep(.custom-content-yellow) {
  background-color: #fdf6ec !important;
  color: #e6a23c !important;
  font-weight: bold;
}

:deep(.label-primary) {
  background-color: #409eff !important;
  color: #fff !important;
  font-weight: bold;
}

:deep(.content-primary) {
  background-color: #d9ecff !important;
  color: #409eff !important;
  font-weight: bold;
}

:deep(.label-success) {
  background-color: #67c23a !important;
  color: #fff !important;
  font-weight: bold;
}

:deep(.content-success) {
  background-color: #e1f3d8 !important;
  color: #67c23a !important;
  font-weight: bold;
}

:deep(.label-warning) {
  background-color: #e6a23c !important;
  color: #fff !important;
  font-weight: bold;
}

:deep(.content-warning) {
  background-color: #fdf6ec !important;
  color: #e6a23c !important;
  font-weight: bold;
}

:deep(.label-danger) {
  background-color: #f56c6c !important;
  color: #fff !important;
  font-weight: bold;
}

:deep(.content-danger) {
  background-color: #fde2e2 !important;
  color: #f56c6c !important;
  font-weight: bold;
}
</style>
