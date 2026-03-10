<template>
  <div class="color-demo">
    <h2>Color 色彩</h2>
    <p>Element Plus 为了避免视觉传达差异，使用一套特定的调色板来规定颜色。</p>

    <el-card class="section">
      <template #header>
        <span>主色</span>
      </template>
      <p class="section-desc">Element Plus 主要品牌色是安全、充满活力的蓝色。</p>
      <div class="demo-row">
        <cc-color color="#409eff" name="Primary" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>辅助色</span>
      </template>
      <p class="section-desc">辅助色除了主色外的场景色，需要在不同的场景中使用。</p>
      <div class="demo-row">
        <cc-color color="#67c23a" name="Success" />
        <cc-color color="#e6a23c" name="Warning" />
        <cc-color color="#f56c6c" name="Danger" />
        <cc-color color="#909399" name="Info" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>中性色</span>
      </template>
      <p class="section-desc">中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。</p>
      <div class="demo-row">
        <cc-color color="#303133" name="主要文字" />
        <cc-color color="#606266" name="常规文字" />
        <cc-color color="#909399" name="次要文字" />
        <cc-color color="#c0c4cc" name="占位文字" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>主色渐变</span>
      </template>
      <div class="demo-row">
        <cc-color color="#ecf5ff" name="Light-9" size="default" />
        <cc-color color="#d9ecff" name="Light-8" size="default" />
        <cc-color color="#b3d8ff" name="Light-7" size="default" />
        <cc-color color="#84c5ff" name="Light-6" size="default" />
        <cc-color color="#53a8ff" name="Light-5" size="default" />
        <cc-color color="#409eff" name="Base" size="default" />
        <cc-color color="#337ecc" name="Dark-2" size="default" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>成功色渐变</span>
      </template>
      <div class="demo-row">
        <cc-color color="#f0f9eb" name="Light-9" size="default" />
        <cc-color color="#e1f3d8" name="Light-8" size="default" />
        <cc-color color="#c2e7b0" name="Light-7" size="default" />
        <cc-color color="#95d475" name="Light-6" size="default" />
        <cc-color color="#6db464" name="Light-5" size="default" />
        <cc-color color="#67c23a" name="Base" size="default" />
        <cc-color color="#529b2e" name="Dark-2" size="default" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>警告色渐变</span>
      </template>
      <div class="demo-row">
        <cc-color color="#fdf6ec" name="Light-9" size="default" />
        <cc-color color="#faecd8" name="Light-8" size="default" />
        <cc-color color="#f5dab1" name="Light-7" size="default" />
        <cc-color color="#eebe77" name="Light-6" size="default" />
        <cc-color color="#e6a45e" name="Light-5" size="default" />
        <cc-color color="#e6a23c" name="Base" size="default" />
        <cc-color color="#c27c30" name="Dark-2" size="default" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>危险色渐变</span>
      </template>
      <div class="demo-row">
        <cc-color color="#fef0f0" name="Light-9" size="default" />
        <cc-color color="#fde2e2" name="Light-8" size="default" />
        <cc-color color="#f9c7c7" name="Light-7" size="default" />
        <cc-color color="#f3a2a2" name="Light-6" size="default" />
        <cc-color color="#ec8282" name="Light-5" size="default" />
        <cc-color color="#f56c6c" name="Base" size="default" />
        <cc-color color="#c45656" name="Dark-2" size="default" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>信息色渐变</span>
      </template>
      <div class="demo-row">
        <cc-color color="#f4f4f5" name="Light-9" size="default" />
        <cc-color color="#e9e9eb" name="Light-8" size="default" />
        <cc-color color="#d3d4d6" name="Light-7" size="default" />
        <cc-color color="#b1b3b8" name="Light-6" size="default" />
        <cc-color color="#9d9fa3" name="Light-5" size="default" />
        <cc-color color="#909399" name="Base" size="default" />
        <cc-color color="#73767a" name="Dark-2" size="default" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>不同尺寸</span>
      </template>
      <div class="demo-row">
        <cc-color color="#409eff" name="Small" size="small" />
        <cc-color color="#409eff" name="Default" size="default" />
        <cc-color color="#409eff" name="Large" size="large" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>隐藏信息</span>
      </template>
      <div class="demo-row">
        <cc-color color="#409eff" :show-info="false" />
        <cc-color color="#67c23a" :show-info="false" />
        <cc-color color="#e6a23c" :show-info="false" />
        <cc-color color="#f56c6c" :show-info="false" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义尺寸</span>
      </template>
      <div class="demo-row">
        <cc-color color="#409eff" name="自定义尺寸" width="250px" height="100px" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义圆角</span>
      </template>
      <div class="demo-row">
        <cc-color color="#409eff" name="无圆角" border-radius="0" />
        <cc-color color="#409eff" name="大圆角" border-radius="12px" />
        <cc-color color="#409eff" name="圆形" border-radius="50%" width="100px" height="100px" />
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import CcColor from '@/components/Color/index.vue'
</script>

<style scoped>
.color-demo {
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  margin-bottom: 20px;
}

.section-desc {
  color: #909399;
  margin-bottom: 16px;
}

.demo-row {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: flex-start;
}
</style>
