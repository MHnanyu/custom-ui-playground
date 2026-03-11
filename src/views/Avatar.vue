<template>
  <div class="avatar-demo">
    <h2>Avatar 头像</h2>
    <p>用于展示用户头像或占位符。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <cc-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></cc-avatar>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>不同尺寸</span>
      </template>
      <div class="size-demo">
        <cc-avatar :size="100" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></cc-avatar>
        <cc-avatar :size="60" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></cc-avatar>
        <cc-avatar :size="40" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></cc-avatar>
        <cc-avatar :size="20" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></cc-avatar>
      </div>
      <div class="size-demo">
        <cc-avatar size="large" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></cc-avatar>
        <cc-avatar size="medium" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></cc-avatar>
        <cc-avatar size="small" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></cc-avatar>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>不同形状</span>
      </template>
      <div class="shape-demo">
        <cc-avatar shape="circle" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></cc-avatar>
        <cc-avatar shape="square" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></cc-avatar>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>头像占位符</span>
      </template>
      <div class="placeholder-demo">
        <cc-avatar>User</cc-avatar>
        <cc-avatar src="">User</cc-avatar>
        <cc-avatar>
          <el-icon><User /></el-icon>
        </cc-avatar>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>图片适配方式</span>
      </template>
      <div class="fit-demo">
        <cc-avatar :size="100" fit="fill" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          <span>fill</span>
        </cc-avatar>
        <cc-avatar :size="100" fit="contain" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          <span>contain</span>
        </cc-avatar>
        <cc-avatar :size="100" fit="cover" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          <span>cover</span>
        </cc-avatar>
        <cc-avatar :size="100" fit="none" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          <span>none</span>
        </cc-avatar>
        <cc-avatar :size="100" fit="scale-down" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png">
          <span>scale-down</span>
        </cc-avatar>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>头像组</span>
      </template>
      <el-avatar-group :size="50">
        <cc-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></cc-avatar>
        <cc-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec44369c3ddb99c0ee4d6aejpeg.jpeg"></cc-avatar>
        <cc-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></cc-avatar>
        <cc-avatar src="https://cube.elemecdn.com/3/7c/3ea6beec44369c3ddb99c0ee4d6aejpeg.jpeg"></cc-avatar>
      </el-avatar-group>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="event-demo">
        <cc-avatar
          src="https://example.com/avatar.png"
          @error="handleError"
        >
          加载失败
        </cc-avatar>
        <p v-if="errorOccurred" class="error-info">图片加载失败事件已触发</p>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { User } from '@element-plus/icons-vue'
import CcAvatar from '@/components/Avatar/index.vue'

const errorOccurred = ref(false)

const handleError = () => {
  errorOccurred.value = true
}
</script>

<style scoped>
.avatar-demo {
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  margin-bottom: 20px;
}

.size-demo,
.shape-demo,
.placeholder-demo,
.fit-demo,
.event-demo {
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
}

.error-info {
  margin-top: 10px;
  color: #f56c6c;
  font-weight: bold;
}
</style>
