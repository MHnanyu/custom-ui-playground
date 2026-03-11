<template>
  <div class="collapse-demo">
    <h2>Collapse 折叠面板</h2>
    <p>通过折叠面板收纳大量区域内容。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <cc-collapse>
        <cc-collapse-item title="一致性 Consistency" name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，或者有直接的关联。</div>
        </cc-collapse-item>
        <cc-collapse-item title="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化与用户进行持续对话。</div>
        </cc-collapse-item>
        <cc-collapse-item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确；</div>
          <div>帮助用户识别：界面简单直观的表达重要信息。</div>
        </cc-collapse-item>
        <cc-collapse-item title="可控 Controllability" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </cc-collapse-item>
      </cc-collapse>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>手风琴效果</span>
      </template>
      <cc-collapse accordion>
        <cc-collapse-item title="一致性 Consistency" name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        </cc-collapse-item>
        <cc-collapse-item title="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        </cc-collapse-item>
        <cc-collapse-item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
        </cc-collapse-item>
      </cc-collapse>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>面板标题插槽</span>
      </template>
      <cc-collapse>
        <cc-collapse-item name="1">
          <template #title>
            <span>一致性 Consistency</span>
            <el-icon class="header-icon"><InfoFilled /></el-icon>
          </template>
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        </cc-collapse-item>
        <cc-collapse-item title="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        </cc-collapse-item>
        <cc-collapse-item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
        </cc-collapse-item>
      </cc-collapse>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>折叠面板嵌套</span>
      </template>
      <cc-collapse accordion>
        <cc-collapse-item title="一级 1" name="1">
          <cc-collapse>
            <cc-collapse-item title="二级 1-1" name="1-1">
              <div>这是二级 1-1 的内容</div>
            </cc-collapse-item>
            <cc-collapse-item title="二级 1-2" name="1-2">
              <div>这是二级 1-2 的内容</div>
            </cc-collapse-item>
          </cc-collapse>
        </cc-collapse-item>
        <cc-collapse-item title="一级 2" name="2">
          <div>这是一级 2 的内容</div>
        </cc-collapse-item>
        <cc-collapse-item title="一级 3" name="3">
          <div>这是一级 3 的内容</div>
        </cc-collapse-item>
      </cc-collapse>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义面板标题内容</span>
      </template>
      <cc-collapse>
        <cc-collapse-item name="1">
          <template #title>
            <span>一致性 Consistency</span>
            <el-tag size="small" type="primary">推荐</el-tag>
          </template>
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        </cc-collapse-item>
        <cc-collapse-item title="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        </cc-collapse-item>
        <cc-collapse-item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
        </cc-collapse-item>
      </cc-collapse>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用状态</span>
      </template>
      <cc-collapse>
        <cc-collapse-item title="一致性 Consistency" name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        </cc-collapse-item>
        <cc-collapse-item title="反馈 Feedback" name="2" disabled>
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        </cc-collapse-item>
        <cc-collapse-item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
        </cc-collapse-item>
      </cc-collapse>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>v-model 双向绑定</span>
      </template>
      <div class="v-model-demo">
        <cc-collapse v-model="activeNames">
          <cc-collapse-item title="一致性 Consistency" name="1">
            <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          </cc-collapse-item>
          <cc-collapse-item title="反馈 Feedback" name="2">
            <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          </cc-collapse-item>
          <cc-collapse-item title="效率 Efficiency" name="3">
            <div>简化流程：设计简洁直观的操作流程；</div>
          </cc-collapse-item>
        </cc-collapse>
        <div class="current-active">当前展开: {{ activeNames.join(', ') || '无' }}</div>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <cc-collapse @change="handleChange">
        <cc-collapse-item title="一致性 Consistency" name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
        </cc-collapse-item>
        <cc-collapse-item title="反馈 Feedback" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        </cc-collapse-item>
        <cc-collapse-item title="效率 Efficiency" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
        </cc-collapse-item>
      </cc-collapse>
      <div class="event-log">事件日志: {{ eventLog.join(' -> ') || '无' }}</div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CcCollapse from '@/components/Collapse/index.vue'
import CcCollapseItem from '@/components/CollapseItem/index.vue'
import { InfoFilled } from '@element-plus/icons-vue'

const activeNames = ref<string[]>(['1'])
const eventLog = ref<string[]>([])

const handleChange = (val: string[]) => {
  eventLog.value.push(`切换为: [${val.join(', ')}]`)
}
</script>

<style scoped>
.collapse-demo {
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  margin-bottom: 20px;
}

.header-icon {
  margin-left: 8px;
}

.v-model-demo {
  margin-bottom: 10px;
}

.current-active {
  margin-top: 10px;
  color: #409eff;
  font-weight: bold;
}

.event-log {
  margin-top: 10px;
  color: #67c23a;
  font-weight: bold;
}
</style>
