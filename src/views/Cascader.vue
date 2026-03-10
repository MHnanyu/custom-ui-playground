<template>
  <div class="cascader-demo">
    <h2>Cascader 级联选择器</h2>
    <p>当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="demo-row">
        <cc-cascader v-model="value1" :options="options" @change="handleChange" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用状态</span>
      </template>
      <div class="demo-row">
        <cc-cascader v-model="value2" :options="optionsWithDisabled" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>可清空</span>
      </template>
      <div class="demo-row">
        <cc-cascader v-model="value3" :options="options" clearable />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>仅显示最后一级</span>
      </template>
      <div class="demo-row">
        <cc-cascader v-model="value4" :options="options" :show-all-levels="false" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>多选</span>
      </template>
      <div class="demo-row">
        <cc-cascader v-model="value5" :options="options" :props="props" clearable />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>选择任意一级</span>
      </template>
      <div class="demo-row">
        <cc-cascader v-model="value6" :options="options" :props="checkStrictlyProps" clearable />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>动态加载</span>
      </template>
      <div class="demo-row">
        <cc-cascader v-model="value7" :props="lazyProps" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>可搜索</span>
      </template>
      <div class="demo-row">
        <cc-cascader v-model="value8" :options="options" filterable placeholder="试试搜索：指南" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义节点内容</span>
      </template>
      <div class="demo-row">
        <cc-cascader v-model="value9" :options="options">
          <template #default="{ node, data }">
            <span>{{ data.label }}</span>
            <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
          </template>
        </cc-cascader>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="demo-row">
        <cc-cascader
          v-model="value10"
          :options="options"
          @change="handleChangeEvent"
          @expand-change="handleExpandChange"
          @focus="handleFocus"
          @blur="handleBlur"
        />
        <div class="event-log">
          <p>选中值: {{ selectedValue || '无' }}</p>
          <p>展开节点: {{ expandedValue || '无' }}</p>
          <p>事件日志: {{ eventLog || '无' }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CcCascader from '@/components/Cascader/index.vue'

const value1 = ref([])
const value2 = ref([])
const value3 = ref(['guide', 'disciplines', 'consistency'])
const value4 = ref([])
const value5 = ref([])
const value6 = ref([])
const value7 = ref([])
const value8 = ref([])
const value9 = ref([])
const value10 = ref([])

const selectedValue = ref('')
const expandedValue = ref('')
const eventLog = ref('')

const options = [
  {
    value: 'guide',
    label: 'Guide',
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
        children: [
          {
            value: 'consistency',
            label: 'Consistency'
          },
          {
            value: 'feedback',
            label: 'Feedback'
          },
          {
            value: 'efficiency',
            label: 'Efficiency'
          },
          {
            value: 'controllability',
            label: 'Controllability'
          }
        ]
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'side nav',
            label: 'Side Navigation'
          },
          {
            value: 'top nav',
            label: 'Top Navigation'
          }
        ]
      }
    ]
  },
  {
    value: 'component',
    label: 'Component',
    children: [
      {
        value: 'basic',
        label: 'Basic',
        children: [
          {
            value: 'layout',
            label: 'Layout'
          },
          {
            value: 'color',
            label: 'Color'
          },
          {
            value: 'typography',
            label: 'Typography'
          },
          {
            value: 'icon',
            label: 'Icon'
          },
          {
            value: 'button',
            label: 'Button'
          }
        ]
      },
      {
        value: 'form',
        label: 'Form',
        children: [
          {
            value: 'radio',
            label: 'Radio'
          },
          {
            value: 'checkbox',
            label: 'Checkbox'
          },
          {
            value: 'input',
            label: 'Input'
          },
          {
            value: 'input-number',
            label: 'InputNumber'
          },
          {
            value: 'select',
            label: 'Select'
          },
          {
            value: 'cascader',
            label: 'Cascader'
          },
          {
            value: 'switch',
            label: 'Switch'
          },
          {
            value: 'slider',
            label: 'Slider'
          },
          {
            value: 'time-picker',
            label: 'TimePicker'
          },
          {
            value: 'date-picker',
            label: 'DatePicker'
          },
          {
            value: 'datetime-picker',
            label: 'DateTimePicker'
          },
          {
            value: 'upload',
            label: 'Upload'
          },
          {
            value: 'rate',
            label: 'Rate'
          },
          {
            value: 'color-picker',
            label: 'ColorPicker'
          },
          {
            value: 'transfer',
            label: 'Transfer'
          }
        ]
      },
      {
        value: 'data',
        label: 'Data',
        children: [
          {
            value: 'table',
            label: 'Table'
          },
          {
            value: 'tag',
            label: 'Tag'
          },
          {
            value: 'progress',
            label: 'Progress'
          },
          {
            value: 'tree',
            label: 'Tree'
          },
          {
            value: 'pagination',
            label: 'Pagination'
          },
          {
            value: 'badge',
            label: 'Badge'
          }
        ]
      },
      {
        value: 'notice',
        label: 'Notice',
        children: [
          {
            value: 'alert',
            label: 'Alert'
          },
          {
            value: 'loading',
            label: 'Loading'
          },
          {
            value: 'message',
            label: 'Message'
          },
          {
            value: 'message-box',
            label: 'MessageBox'
          },
          {
            value: 'notification',
            label: 'Notification'
          }
        ]
      },
      {
        value: 'navigation',
        label: 'Navigation',
        children: [
          {
            value: 'menu',
            label: 'Menu'
          },
          {
            value: 'tabs',
            label: 'Tabs'
          },
          {
            value: 'breadcrumb',
            label: 'Breadcrumb'
          },
          {
            value: 'dropdown',
            label: 'Dropdown'
          },
          {
            value: 'steps',
            label: 'Steps'
          }
        ]
      },
      {
        value: 'others',
        label: 'Others',
        children: [
          {
            value: 'dialog',
            label: 'Dialog'
          },
          {
            value: 'tooltip',
            label: 'Tooltip'
          },
          {
            value: 'popover',
            label: 'Popover'
          },
          {
            value: 'card',
            label: 'Card'
          },
          {
            value: 'carousel',
            label: 'Carousel'
          },
          {
            value: 'collapse',
            label: 'Collapse'
          }
        ]
      }
    ]
  },
  {
    value: 'resource',
    label: 'Resource',
    children: [
      {
        value: 'axure',
        label: 'Axure Components'
      },
      {
        value: 'sketch',
        label: 'Sketch Templates'
      },
      {
        value: 'docs',
        label: 'Design Documentation'
      }
    ]
  }
]

const optionsWithDisabled = [
  {
    value: 'guide',
    label: 'Guide',
    disabled: true,
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
        children: [
          {
            value: 'consistency',
            label: 'Consistency'
          }
        ]
      }
    ]
  },
  {
    value: 'component',
    label: 'Component',
    children: [
      {
        value: 'basic',
        label: 'Basic'
      }
    ]
  }
]

const props = {
  multiple: true
}

const checkStrictlyProps = {
  checkStrictly: true
}

let id = 0
const lazyProps = {
  lazy: true,
  lazyLoad(node: any, resolve: any) {
    const { level } = node
    setTimeout(() => {
      const nodes = Array.from({ length: level + 1 }).map(() => ({
        value: ++id,
        label: `Option${id}`,
        leaf: level >= 2
      }))
      resolve(nodes)
    }, 1000)
  }
}

const handleChange = (value: any) => {
  console.log('Change:', value)
}

const handleChangeEvent = (value: any) => {
  selectedValue.value = JSON.stringify(value)
  eventLog.value = 'change 事件触发'
}

const handleExpandChange = (value: any) => {
  expandedValue.value = JSON.stringify(value)
  eventLog.value = 'expand-change 事件触发'
}

const handleFocus = () => {
  eventLog.value = 'focus 事件触发'
}

const handleBlur = () => {
  eventLog.value = 'blur 事件触发'
}
</script>

<style scoped>
.cascader-demo {
  max-width: 1200px;
  margin: 0 auto;
}

.section {
  margin-bottom: 20px;
}

.demo-row {
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: flex-start;
}

.demo-row > :first-child {
  width: 400px;
}

.event-log {
  padding: 10px;
  background-color: #f5f7fa;
  border-radius: 4px;
  width: 400px;
}

.event-log p {
  margin: 4px 0;
  font-size: 14px;
  color: #606266;
  word-break: break-all;
}
</style>
