<template>
  <div class="result-demo">
    <h2>Result 结果</h2>
    <p>用于展示操作结果信息。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="demo-row">
        <cc-result
          icon="success"
          title="操作成功"
          sub-title="请根据提示进行操作"
        />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>不同图标</span>
      </template>
      <div class="demo-column">
        <div class="demo-row">
          <cc-result
            icon="info"
            title="提示"
            sub-title="这是一条提示信息"
          />
        </div>
        <div class="demo-row">
          <cc-result
            icon="warning"
            title="警告"
            sub-title="请注意以下警告信息"
          />
        </div>
        <div class="demo-row">
          <cc-result
            icon="error"
            title="错误"
            sub-title="操作失败，请重试"
          />
        </div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义图标</span>
      </template>
      <div class="demo-row">
        <cc-result title="自定义图标">
          <template #icon>
            <el-icon :size="60" color="#409eff"><Star /></el-icon>
          </template>
        </cc-result>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义标题和副标题</span>
      </template>
      <div class="demo-row">
        <cc-result>
          <template #title>自定义标题</template>
          <template #sub-title>自定义副标题内容</template>
        </cc-result>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>添加操作按钮</span>
      </template>
      <div class="demo-row">
        <cc-result
          icon="success"
          title="操作成功"
          sub-title="请根据提示进行操作"
        >
          <template #default>
            <el-button type="primary">返回首页</el-button>
            <el-button>查看详情</el-button>
          </template>
        </cc-result>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { Star } from '@element-plus/icons-vue'
import CcResult from '@/components/Result/index.vue'
</script>

<style scoped>
.result-demo {
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  color: #409eff;
}

.section {
  margin-bottom: 20px;
}

.demo-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}

.demo-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
