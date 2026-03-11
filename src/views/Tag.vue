<template>
  <div class="tag-demo">
    <h2>Tag 标签</h2>
    <p>用于标记和选择。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="tag-group">
        <cc-tag>标签</cc-tag>
        <cc-tag type="primary">主要标签</cc-tag>
        <cc-tag type="success">成功标签</cc-tag>
        <cc-tag type="warning">警告标签</cc-tag>
        <cc-tag type="danger">危险标签</cc-tag>
        <cc-tag type="info">信息标签</cc-tag>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>可移除标签</span>
      </template>
      <div class="tag-group">
        <cc-tag closable>标签一</cc-tag>
        <cc-tag type="primary" closable>标签二</cc-tag>
        <cc-tag type="success" closable>标签三</cc-tag>
        <cc-tag type="warning" closable>标签四</cc-tag>
        <cc-tag type="danger" closable>标签五</cc-tag>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>动态编辑标签</span>
      </template>
      <div class="tag-group">
        <cc-tag
          v-for="tag in dynamicTags"
          :key="tag"
          closable
          :type="tagTypes[tag % tagTypes.length]"
          @close="handleCloseTag(tag)"
        >
          {{ tag }}
        </cc-tag>
        <el-input
          v-if="inputVisible"
          ref="InputRef"
          v-model="inputValue"
          class="input-new-tag"
          size="small"
          @keyup.enter="handleInputConfirm"
          @blur="handleInputConfirm"
        />
        <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>标签尺寸</span>
      </template>
      <div class="tag-group">
        <cc-tag size="large">大型标签</cc-tag>
        <cc-tag>默认标签</cc-tag>
        <cc-tag size="small">小型标签</cc-tag>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>标签主题 - Light</span>
      </template>
      <div class="tag-group">
        <cc-tag effect="light">标签</cc-tag>
        <cc-tag effect="light" type="primary">主要标签</cc-tag>
        <cc-tag effect="light" type="success">成功标签</cc-tag>
        <cc-tag effect="light" type="warning">警告标签</cc-tag>
        <cc-tag effect="light" type="danger">危险标签</cc-tag>
        <cc-tag effect="light" type="info">信息标签</cc-tag>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>标签主题 - Dark</span>
      </template>
      <div class="tag-group">
        <cc-tag effect="dark">标签</cc-tag>
        <cc-tag effect="dark" type="primary">主要标签</cc-tag>
        <cc-tag effect="dark" type="success">成功标签</cc-tag>
        <cc-tag effect="dark" type="warning">警告标签</cc-tag>
        <cc-tag effect="dark" type="danger">危险标签</cc-tag>
        <cc-tag effect="dark" type="info">信息标签</cc-tag>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>标签主题 - Plain</span>
      </template>
      <div class="tag-group">
        <cc-tag effect="plain">标签</cc-tag>
        <cc-tag effect="plain" type="primary">主要标签</cc-tag>
        <cc-tag effect="plain" type="success">成功标签</cc-tag>
        <cc-tag effect="plain" type="warning">警告标签</cc-tag>
        <cc-tag effect="plain" type="danger">危险标签</cc-tag>
        <cc-tag effect="plain" type="info">信息标签</cc-tag>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>圆角标签</span>
      </template>
      <div class="tag-group">
        <cc-tag round>标签</cc-tag>
        <cc-tag type="primary" round>主要标签</cc-tag>
        <cc-tag type="success" round>成功标签</cc-tag>
        <cc-tag type="warning" round>警告标签</cc-tag>
        <cc-tag type="danger" round>危险标签</cc-tag>
        <cc-tag type="info" round>信息标签</cc-tag>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>边框标签</span>
      </template>
      <div class="tag-group">
        <cc-tag hit>标签</cc-tag>
        <cc-tag type="primary" hit>主要标签</cc-tag>
        <cc-tag type="success" hit>成功标签</cc-tag>
        <cc-tag type="warning" hit>警告标签</cc-tag>
        <cc-tag type="danger" hit>危险标签</cc-tag>
        <cc-tag type="info" hit>信息标签</cc-tag>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义颜色</span>
      </template>
      <div class="tag-group">
        <cc-tag color="#626aef">标签</cc-tag>
        <cc-tag color="#67c23a">成功标签</cc-tag>
        <cc-tag color="#e6a23c">警告标签</cc-tag>
        <cc-tag color="#f56c6c">危险标签</cc-tag>
        <cc-tag color="#909399">信息标签</cc-tag>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="tag-group">
        <cc-tag closable @close="handleClose">可关闭标签</cc-tag>
        <span v-if="closeCount > 0" class="close-count">关闭次数: {{ closeCount }}</span>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, nextTick } from 'vue'
import CcTag from '@/components/Tag/index.vue'

const dynamicTags = ref(['标签一', '标签二', '标签三'])
const tagTypes = ref<('primary' | 'success' | 'warning' | 'danger' | 'info')[]>(['primary', 'success', 'warning', 'danger', 'info'])
const inputVisible = ref(false)
const inputValue = ref('')
const InputRef = ref<HTMLInputElement | null>(null)
const closeCount = ref(0)

const handleCloseTag = (tag: string) => {
  const index = dynamicTags.value.indexOf(tag)
  if (index > -1) {
    dynamicTags.value.splice(index, 1)
  }
}

const showInput = () => {
  inputVisible.value = true
  nextTick(() => {
    InputRef.value?.focus()
  })
}

const handleInputConfirm = () => {
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value)
  }
  inputVisible.value = false
  inputValue.value = ''
}

const handleClose = () => {
  closeCount.value++
}
</script>

<style scoped>
.tag-demo {
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  margin-bottom: 20px;
}

.tag-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}

.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}

.close-count {
  margin-left: 10px;
  color: #409eff;
  font-weight: bold;
}
</style>
