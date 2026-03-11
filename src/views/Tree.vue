<template>
  <div class="tree-demo">
    <h2>Tree 树形控件</h2>
    <p>用清晰的层级结构展示信息。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="demo-row">
        <cc-tree :data="data" :props="defaultProps" @node-click="handleNodeClick" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>可选择</span>
      </template>
      <div class="demo-row">
        <cc-tree :data="data" :props="defaultProps" show-checkbox @check="handleCheck" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>懒加载</span>
      </template>
      <div class="demo-row">
        <cc-tree :props="props" :load="loadNode" lazy show-checkbox />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>默认展开和选中</span>
      </template>
      <div class="demo-row">
        <cc-tree
          :data="data"
          :props="defaultProps"
          :default-expand-all="true"
          :default-checked-keys="[9]"
          :default-expanded-keys="[2, 3]"
          show-checkbox
        />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>禁用状态</span>
      </template>
      <div class="demo-row">
        <cc-tree :data="dataWithDisabled" :props="defaultProps" show-checkbox node-key="id" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>树节点的选择</span>
      </template>
      <div class="demo-row">
        <el-radio-group v-model="checkStrictly" size="small" style="margin-bottom: 12px;">
          <el-radio-button :label="true">父子不互选</el-radio-button>
          <el-radio-button :label="false">父子互选</el-radio-button>
        </el-radio-group>
        <cc-tree
          :data="data"
          :props="defaultProps"
          :check-strictly="checkStrictly"
          show-checkbox
          default-expand-all
        />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义节点内容</span>
      </template>
      <div class="demo-row">
        <cc-tree :data="data" :props="defaultProps" show-checkbox default-expand-all>
          <template #default="{ node, data }">
            <span class="custom-tree-node">
              <span>{{ node.label }}</span>
              <span>
                <a @click="append(data)">添加</a>
                <a @click="remove(node, data)" style="margin-left: 8px">删除</a>
              </span>
            </span>
          </template>
        </cc-tree>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>事件测试</span>
      </template>
      <div class="demo-row">
        <cc-tree
          :data="data"
          :props="defaultProps"
          show-checkbox
          @node-click="handleNodeClickEvent"
          @check="handleCheckEvent"
          @current-change="handleCurrentChange"
        />
        <div class="event-log">
          <p>事件日志: {{ eventLog || '无' }}</p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import CcTree from '@/components/Tree/index.vue'

interface TreeNode {
  id: number
  label: string
  isLeaf?: boolean
  disabled?: boolean
  children?: TreeNode[]
}

const defaultProps = {
  children: 'children',
  label: 'label'
}

const props = {
  label: 'label',
  children: 'children',
  isLeaf: 'isLeaf'
}

const checkStrictly = ref(false)
const eventLog = ref('')
let id = 100

const data: TreeNode[] = [
  {
    id: 1,
    label: '一级 1',
    children: [
      {
        id: 4,
        label: '二级 1-1',
        children: [
          {
            id: 9,
            label: '三级 1-1-1'
          },
          {
            id: 10,
            label: '三级 1-1-2'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    label: '一级 2',
    children: [
      {
        id: 5,
        label: '二级 2-1'
      },
      {
        id: 6,
        label: '二级 2-2'
      }
    ]
  },
  {
    id: 3,
    label: '一级 3',
    children: [
      {
        id: 7,
        label: '二级 3-1'
      },
      {
        id: 8,
        label: '二级 3-2'
      }
    ]
  }
]

const dataWithDisabled = [
  {
    id: 1,
    label: '一级 1',
    children: [
      {
        id: 4,
        label: '二级 1-1',
        disabled: true,
        children: [
          {
            id: 9,
            label: '三级 1-1-1'
          },
          {
            id: 10,
            label: '三级 1-1-2'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    label: '一级 2',
    children: [
      {
        id: 5,
        label: '二级 2-1'
      },
      {
        id: 6,
        label: '二级 2-2'
      }
    ]
  }
]

const handleNodeClick = (data: TreeNode) => {
  console.log('Node click:', data)
}

const handleCheck = (checkedNodes: any, checkedKeys: any) => {
  console.log('checkedNodes:', checkedNodes)
  console.log('checkedKeys:', checkedKeys)
}

const loadNode = (node: any, resolve: (data: TreeNode[]) => void) => {
  if (node.level === 0) {
    return resolve([{ id: 1, label: 'region' }])
  }
  if (node.level > 1) return resolve([])

  setTimeout(() => {
    const data: TreeNode[] = [
      { id: 2, label: 'leaf', isLeaf: true },
      { id: 3, label: 'zone' }
    ]
    resolve(data)
  }, 500)
}

const append = (data: any) => {
  if (!data.children) {
    data.children = []
  }
  data.children.push({
    id: id++,
    label: '新增节点'
  })
  ElMessage.success('添加成功')
}

const remove = (node: any, data: any) => {
  const parent = node.parent
  const children = parent.data.children || parent.data
  const index = children.findIndex((d: any) => d.id === data.id)
  children.splice(index, 1)
  ElMessage.success('删除成功')
}

const handleNodeClickEvent = (data: TreeNode) => {
  eventLog.value = `node-click: ${data.label}`
}

const handleCheckEvent = () => {
  eventLog.value = 'check: 复选框状态变化'
}

const handleCurrentChange = (data: TreeNode) => {
  eventLog.value = `current-change: ${data.label}`
}
</script>

<style scoped>
.tree-demo {
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

.custom-tree-node {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-right: 8px;
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
