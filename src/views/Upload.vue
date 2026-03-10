<template>
  <div class="upload-demo">
    <h2>Upload 上传</h2>
    <p>文件选择上传和拖拽上传。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <cc-upload
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        :limit="3"
        accept=".jpg,.png,.pdf"
        @change="handleChange"
      >
        <cc-button type="primary">点击上传</cc-button>
      </cc-upload>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>拖拽上传</span>
      </template>
      <cc-upload
        drag
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        multiple
        @change="handleChange"
      >
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        <div class="el-upload__text">
          将文件拖到此处，或<em>点击上传</em>
        </div>
        <template #tip>
          <div class="el-upload__tip">
            jpg/png 文件且不超过 500kb
          </div>
        </template>
      </cc-upload>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>照片墙</span>
      </template>
      <cc-upload
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        list-type="picture-card"
        :limit="5"
        v-model:file-list="fileList"
        @change="handleChange"
      >
        <el-icon><plus /></el-icon>
      </cc-upload>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>手动上传</span>
      </template>
      <cc-upload
        ref="uploadRef"
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        :auto-upload="false"
        :limit="3"
        @change="handleChange"
      >
        <cc-button type="primary">选择文件</cc-button>
        <template #tip>
          <div class="el-upload__tip" style="margin-top: 10px;">
            支持 jpg/png 格式，不超过 500kb
          </div>
        </template>
      </cc-upload>
      <div style="margin-top: 10px;">
        <cc-button type="primary" @click="submitUpload">开始上传</cc-button>
        <cc-button @click="clearFiles">清空文件</cc-button>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用状态</span>
      </template>
      <cc-upload
        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
        disabled
      >
        <cc-button disabled>点击上传</cc-button>
      </cc-upload>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="event-log">
        <p>事件日志:</p>
        <div v-if="eventLog.length === 0" class="empty-log">暂无事件</div>
        <ul v-else>
          <li v-for="(log, index) in eventLog" :key="index">{{ log }}</li>
        </ul>
        <cc-button @click="clearLog">清空日志</cc-button>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { UploadFilled, Plus } from '@element-plus/icons-vue'
import type { UploadUserFile, UploadFile } from 'element-plus'
import CcUpload from '@/components/Upload/index.vue'
import CcButton from '@/components/Button/index.vue'

const uploadRef = ref()
const fileList = ref<UploadUserFile[]>([
  {
    name: 'food.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e696f65c9854189c9e6f2c06dae7jpeg.jpeg?imageMogr2/thumbnail/360x360'
  },
  {
    name: 'food2.jpeg',
    url: 'https://fuss10.elemecdn.com/3/63/4e696f65c9854189c9e6f2c06dae7jpeg.jpeg?imageMogr2/thumbnail/360x360'
  }
])

const eventLog = ref<string[]>([])

const handleChange = (_uploadFile: UploadFile, uploadFiles: UploadFile[]) => {
  eventLog.value.unshift(`change: 文件数量变化, 当前文件数: ${uploadFiles.length}`)
}

const submitUpload = () => {
  uploadRef.value?.submit()
}

const clearFiles = () => {
  uploadRef.value?.clearFiles()
  eventLog.value.unshift('文件已清空')
}

const clearLog = () => {
  eventLog.value = []
}
</script>

<style scoped>
.upload-demo {
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  margin-bottom: 20px;
}

.el-icon--upload {
  font-size: 67px;
  color: #409eff;
  margin-bottom: 16px;
}

.el-upload__text {
  color: #606266;
  font-size: 14px;
}

.el-upload__text em {
  color: #409eff;
}

.el-upload__tip {
  color: #909399;
  font-size: 12px;
  margin-top: 7px;
}

.event-log {
  min-height: 100px;
}

.event-log ul {
  list-style: none;
  padding: 0;
  margin: 10px 0;
}

.event-log li {
  padding: 5px 0;
  color: #606266;
  font-size: 13px;
}

.empty-log {
  color: #909399;
  font-size: 14px;
  padding: 10px 0;
}
</style>
