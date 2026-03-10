<template>
  <div class="typography-demo">
    <h2>Typography 排版</h2>
    <p>用于文本的格式化展示。</p>

    <el-card class="section">
      <template #header>
        <span>标题组件</span>
      </template>
      <cc-typography-title>h1 标题</cc-typography-title>
      <cc-typography-title :level="2">h2 标题</cc-typography-title>
      <cc-typography-title :level="3">h3 标题</cc-typography-title>
      <cc-typography-title :level="4">h4 标题</cc-typography-title>
      <cc-typography-title :level="5">h5 标题</cc-typography-title>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>文本组件</span>
      </template>
      <cc-typography-text>默认文本</cc-typography-text>
      <br />
      <cc-typography-text type="primary">主要文本</cc-typography-text>
      <br />
      <cc-typography-text type="success">成功文本</cc-typography-text>
      <br />
      <cc-typography-text type="warning">警告文本</cc-typography-text>
      <br />
      <cc-typography-text type="danger">危险文本</cc-typography-text>
      <br />
      <cc-typography-text type="info">信息文本</cc-typography-text>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>段落组件</span>
      </template>
      <cc-typography-paragraph>
        这是一段普通的文本内容。Typography 组件用于展示标题、段落、文本内容。
      </cc-typography-paragraph>
      <cc-typography-paragraph type="success">
        这是一段成功提示的文本内容。
      </cc-typography-paragraph>
      <cc-typography-paragraph type="danger">
        这是一段危险警告的文本内容。
      </cc-typography-paragraph>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>链接组件</span>
      </template>
      <cc-typography-link href="https://element-plus.org" target="_blank">
        Element Plus 官网
      </cc-typography-link>
      <br />
      <cc-typography-link type="primary" href="https://vuejs.org" target="_blank">
        Vue.js 官网
      </cc-typography-link>
      <br />
      <cc-typography-link type="success">成功链接</cc-typography-link>
      <br />
      <cc-typography-link type="warning">警告链接</cc-typography-link>
      <br />
      <cc-typography-link type="danger">危险链接</cc-typography-link>
      <br />
      <cc-typography-link type="info">信息链接</cc-typography-link>
      <br />
      <cc-typography-link disabled>禁用链接</cc-typography-link>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>文本省略</span>
      </template>
      <cc-typography-text
        truncated
      >
        这是一段非常长的文本内容，用于测试文本省略功能。当文本内容超过容器宽度时，会自动显示省略号。这是一段非常长的文本内容，用于测试文本省略功能。当文本内容超过容器宽度时，会自动显示省略号。这是一段非常长的文本内容，用于测试文本省略功能。当文本内容超过容器宽度时，会自动显示省略号。
      </cc-typography-text>
      <br />
      <cc-typography-text
        :line-clamp="2"
        style="width: 500px;"
      >
        这是多行文本省略示例，限制显示 2 行。这是一段非常长的文本内容，用于测试文本省略功能。当文本内容超过指定的行数时，会自动显示省略号。这是一段非常长的文本内容，用于测试文本省略功能。当文本内容超过指定的行数时，会自动显示省略号。这是一段非常长的文本内容，用于测试文本省略功能。当文本内容超过指定的行数时，会自动显示省略号。
      </cc-typography-text>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>文本尺寸</span>
      </template>
      <cc-typography-text size="large">大号文本</cc-typography-text>
      <br />
      <cc-typography-text size="default">默认文本</cc-typography-text>
      <br />
      <cc-typography-text size="small">小号文本</cc-typography-text>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>组合使用</span>
      </template>
      <cc-typography-title :level="4">文章标题</cc-typography-title>
      <cc-typography-paragraph>
        这是一篇文章的段落内容。排版组件可以组合使用，构建丰富的文档页面。
      </cc-typography-paragraph>
      <cc-typography-paragraph>
        更多信息请访问
        <cc-typography-link type="primary" href="https://element-plus.org" target="_blank">
          Element Plus 文档
        </cc-typography-link>
      </cc-typography-paragraph>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import CcTypographyTitle from '@/components/Typography/Title.vue'
import CcTypographyText from '@/components/Typography/Text.vue'
import CcTypographyParagraph from '@/components/Typography/Paragraph.vue'
import CcTypographyLink from '@/components/Typography/Link.vue'
</script>

<style scoped>
.typography-demo {
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  margin-bottom: 20px;
}
</style>
