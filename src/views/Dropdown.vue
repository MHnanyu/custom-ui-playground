<template>
  <div class="dropdown-demo">
    <h2>Dropdown 下拉菜单</h2>
    <p>下拉菜单组件用于展示可切换的菜单列表。</p>

    <el-row :gutter="20">
      <el-col :span="24">
        <el-card class="section">
          <template #header>
            <span>基础用法</span>
          </template>
          <p>最基本的下拉菜单用法。</p>
          <cc-dropdown>
            <el-button>
              下拉菜单<el-icon class="el-icon--right"><ArrowDown /></el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>黄金糕</el-dropdown-item>
                <el-dropdown-item>狮子头</el-dropdown-item>
                <el-dropdown-item>螺蛳粉</el-dropdown-item>
                <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </cc-dropdown>
        </el-card>

        <el-card class="section">
          <template #header>
            <span>触发方式</span>
          </template>
          <p>可以配置点击或者悬停触发下拉菜单。</p>
          <div class="trigger-demo">
            <cc-dropdown trigger="click">
              <el-button>
                click 触发<el-icon class="el-icon--right"><ArrowDown /></el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </cc-dropdown>
            <cc-dropdown trigger="hover">
              <el-button>
                hover 触发<el-icon class="el-icon--right"><ArrowDown /></el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </cc-dropdown>
          </div>
        </el-card>

        <el-card class="section">
          <template #header>
            <span>按钮组合</span>
          </template>
          <p>可以结合按钮使用不同类型的下拉菜单。</p>
          <div class="button-group-demo">
            <el-dropdown split-button type="primary" @click="handleClick">
              默认菜单
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <el-dropdown split-button type="success" @click="handleClick">
              Success
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <el-dropdown split-button type="info" @click="handleClick">
              Info
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <el-dropdown split-button type="warning" @click="handleClick">
              Warning
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
            <el-dropdown split-button type="danger" @click="handleClick">
              Danger
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </el-card>

        <el-card class="section">
          <template #header>
            <span>禁用状态</span>
          </template>
          <p>可以禁用整个下拉菜单或者单个菜单项。</p>
          <div class="disabled-demo">
            <cc-dropdown disabled>
              <el-button>
                禁用状态<el-icon class="el-icon--right"><ArrowDown /></el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </cc-dropdown>
            <cc-dropdown>
              <el-button>
                菜单项禁用<el-icon class="el-icon--right"><ArrowDown /></el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item disabled>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </cc-dropdown>
          </div>
        </el-card>

        <el-card class="section">
          <template #header>
            <span>菜单位置</span>
          </template>
          <p>可以设置不同的菜单位置。</p>
          <div class="placement-demo">
            <cc-dropdown placement="top">
              <el-button>
                上方<el-icon class="el-icon--right"><ArrowUp /></el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </cc-dropdown>
            <cc-dropdown placement="bottom">
              <el-button>
                下方<el-icon class="el-icon--right"><ArrowDown /></el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </cc-dropdown>
            <cc-dropdown placement="top-start">
              <el-button>
                左上<el-icon class="el-icon--right"><ArrowUp /></el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </cc-dropdown>
            <cc-dropdown placement="top-end">
              <el-button>
                右上<el-icon class="el-icon--right"><ArrowUp /></el-icon>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>黄金糕</el-dropdown-item>
                  <el-dropdown-item>狮子头</el-dropdown-item>
                  <el-dropdown-item>螺蛳粉</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </cc-dropdown>
          </div>
        </el-card>

        <el-card class="section">
          <template #header>
            <span>事件监听</span>
          </template>
          <p>监听下拉菜单事件。</p>
          <p>触发事件: {{ eventLog }}</p>
          <cc-dropdown @command="handleCommand" @visible-change="handleVisibleChange">
            <el-button>
              事件触发<el-icon class="el-icon--right"><ArrowDown /></el-icon>
            </el-button>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="a">黄金糕</el-dropdown-item>
                <el-dropdown-item command="b">狮子头</el-dropdown-item>
                <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </cc-dropdown>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrowDown, ArrowUp } from '@element-plus/icons-vue'
import CcDropdown from '@/components/Dropdown/index.vue'

const eventLog = ref('')

const handleClick = () => {
  console.log('click')
}

const handleCommand = (command: string | number | object) => {
  eventLog.value = `command: ${command}`
  console.log('command:', command)
}

const handleVisibleChange = (visible: boolean) => {
  eventLog.value = `visible-change: ${visible}`
  console.log('visible-change:', visible)
}
</script>

<style scoped>
.dropdown-demo h2 {
  color: #409eff;
}

.dropdown-demo p {
  color: #606266;
  margin-bottom: 20px;
}

.section {
  margin-bottom: 20px;
}

.trigger-demo,
.button-group-demo,
.disabled-demo,
.placement-demo {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
</style>
