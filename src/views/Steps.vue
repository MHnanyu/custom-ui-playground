<template>
  <div class="steps-demo">
    <h2>Steps 步骤条</h2>
    <p>引导用户按照流程完成任务的分步导航条。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <p>使用 cc-steps 和 cc-step 组件来创建步骤条。</p>
      <cc-steps :active="active" @click="handleClick">
        <cc-step title="步骤1" />
        <cc-step title="步骤2" />
        <cc-step title="步骤3" />
      </cc-steps>
      <el-button style="margin-top: 20px" @click="next">下一步</el-button>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>含有描述信息</span>
      </template>
      <p>每个步骤条可以包含描述信息。</p>
      <cc-steps :active="1">
        <cc-step title="步骤1" description="这是步骤1的描述信息" />
        <cc-step title="步骤2" description="这是步骤2的描述信息" />
        <cc-step title="步骤3" description="这是步骤3的描述信息" />
      </cc-steps>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>简洁风格</span>
      </template>
      <p>设置 simple 属性可以展示简洁风格的步骤条。</p>
      <cc-steps :active="2" simple>
        <cc-step title="步骤1" />
        <cc-step title="步骤2" />
        <cc-step title="步骤3" />
      </cc-steps>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义图标</span>
      </template>
      <p>可以在步骤条中使用自定义图标。</p>
      <cc-steps :active="2">
        <cc-step title="步骤1">
          <template #icon>
            <el-icon><Edit /></el-icon>
          </template>
        </cc-step>
        <cc-step title="步骤2">
          <template #icon>
            <el-icon><Upload /></el-icon>
          </template>
        </cc-step>
        <cc-step title="步骤3">
          <template #icon>
            <el-icon><Check /></el-icon>
          </template>
        </cc-step>
      </cc-steps>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>垂直方向</span>
      </template>
      <p>设置 direction 属性为 vertical 可以展示垂直方向的步骤条。</p>
      <cc-steps direction="vertical" :active="1">
        <cc-step title="步骤1" description="这是步骤1的描述信息" />
        <cc-step title="步骤2" description="这是步骤2的描述信息" />
        <cc-step title="步骤3" description="这是步骤3的描述信息" />
      </cc-steps>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>居中对齐</span>
      </template>
      <p>设置 align-center 属性可以让步骤条居中对齐。</p>
      <cc-steps :active="1" align-center>
        <cc-step title="步骤1" description="这是一段很长很长很长的描述信息" />
        <cc-step title="步骤2" description="这是步骤2的描述信息" />
        <cc-step title="步骤3" description="这是步骤3的描述信息" />
      </cc-steps>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>步骤条状态</span>
      </template>
      <p>可以设置步骤条的完成状态。</p>
      <cc-steps :active="2" finish-status="success">
        <cc-step title="已完成" />
        <cc-step title="进行中" />
        <cc-step title="待开始" />
      </cc-steps>
      <cc-steps :active="2" finish-status="error" style="margin-top: 20px">
        <cc-step title="已完成" />
        <cc-step title="进行中" />
        <cc-step title="待开始" />
      </cc-steps>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义颜色</span>
      </template>
      <p>可以自定义激活步骤的颜色。</p>
      <cc-steps :active="2" active-color="#f56c6c" finish-status="success">
        <cc-step title="步骤1" />
        <cc-step title="步骤2" />
        <cc-step title="步骤3" />
      </cc-steps>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>设置步骤状态</span>
      </template>
      <p>可以单独设置每个步骤的状态。</p>
      <cc-steps :active="1">
        <cc-step title="已完成" status="success" />
        <cc-step title="进行中" status="process" />
        <cc-step title="待开始" status="wait" />
        <cc-step title="错误" status="error" />
      </cc-steps>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Edit, Upload, Check } from '@element-plus/icons-vue'
import CcSteps from '@/components/Steps/index.vue'
import CcStep from '@/components/Step/index.vue'

const active = ref(0)

const next = () => {
  if (active.value++ > 2) active.value = 0
}

const handleClick = (index: number) => {
  active.value = index
}
</script>

<style scoped>
.steps-demo {
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 100px;
}

.section {
  margin-bottom: 20px;
}

cc-steps {
  margin-top: 10px;
}
</style>
