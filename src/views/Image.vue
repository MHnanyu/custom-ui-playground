<template>
  <div class="image-page">
    <h1>Image 图片</h1>
    <el-card>
      <template #header>
        <span>基础用法</span>
      </template>
      <cc-image
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        :width="300"
        :height="300"
      />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>
        <span>适应容器</span>
      </template>
      <div class="image-fit">
        <div v-for="fit in fits" :key="fit" class="fit-item">
          <span>{{ fit }}</span>
          <cc-image :fit="fit" :src="url" :width="100" :height="100" />
        </div>
      </div>
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>
        <span>懒加载</span>
      </template>
      <cc-image
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        :width="300"
        :height="300"
        lazy
      />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>
        <span>图片预览</span>
      </template>
      <cc-image
        :src="url"
        :preview-src-list="[url, url2]"
        :initial-index="0"
        :width="300"
        :height="300"
      />
    </el-card>

    <el-card style="margin-top: 20px">
      <template #header>
        <span>加载失败</span>
      </template>
      <cc-image src="https://error-url.com/image.jpg" :width="300" :height="300">
        <template #error>
          <div class="error-slot">
            <el-icon><PictureFilled /></el-icon>
            <span>加载失败</span>
          </div>
        </template>
      </cc-image>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { PictureFilled } from '@element-plus/icons-vue'

const fits = ['fill', 'contain', 'cover', 'none', 'scale-down']
const url = 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
const url2 = 'https://cube.elemecdn.com/3/7c/3ea6beec44369c3ddb99c0ee4d6aejpeg.jpeg'
</script>

<style scoped>
.image-page {
  max-width: 1200px;
  margin: 0 auto;
}
.image-fit {
  display: flex;
  gap: 20px;
}
.fit-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}
.error-slot {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #909399;
  font-size: 14px;
}
.error-slot .el-icon {
  font-size: 30px;
  margin-bottom: 10px;
}
</style>
