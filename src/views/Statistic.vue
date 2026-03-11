<template>
  <div class="statistic-demo">
    <h2>Statistic 统计数值</h2>
    <p>用于展示统计数值信息。</p>

    <el-card class="section">
      <template #header>
        <span>基础用法</span>
      </template>
      <div class="demo-row">
        <cc-statistic title="用户总数" :value="1000" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>带前后缀</span>
      </template>
      <div class="demo-row">
        <cc-statistic title="销售额" :value="10000" prefix="$" />
        <cc-statistic title="转化率" :value="0.75" suffix="%" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>格式化数值</span>
      </template>
      <div class="demo-row">
        <cc-statistic title="用户总数" :value="10000" :formatter="(value) => value.toLocaleString()" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>数值动画</span>
      </template>
      <div class="demo-row">
        <cc-statistic title="活跃用户" :value="5000" :animation="true" />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>自定义动画时长</span>
      </template>
      <div class="demo-row">
        <cc-statistic 
          title="累计访问量" 
          :value="100000" 
          :animation="true" 
          :animation-duration="2000" 
        />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>精细控制动画</span>
      </template>
      <div class="demo-row">
        <cc-statistic 
          title="从零开始计数" 
          :value="2024" 
          :animation="true" 
          :value-from="0"
        />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>使用插槽</span>
      </template>
      <div class="demo-row">
        <cc-statistic title="自定义内容">
          <template #prefix>$</template>
          1,234.56
          <template #suffix>USD</template>
        </cc-statistic>
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>不同样式</span>
      </template>
      <div class="demo-row">
        <cc-statistic 
          title="收入" 
          :value="50000" 
          prefix="$" 
          :value-style="{ color: '#67c23a' }" 
        />
        <cc-statistic 
          title="支出" 
          :value="30000" 
          prefix="$" 
          :value-style="{ color: '#f56c6c' }" 
        />
      </div>
    </el-card>

    <el-card class="section">
      <template #header>
        <span>千分位分隔符</span>
      </template>
      <div class="demo-row">
        <cc-statistic title="默认" :value="1234567.89" />
        <cc-statistic title="无分隔符" :value="1234567.89" :group-separator="''" />
        <cc-statistic title="空格分隔" :value="1234567.89" group-separator=" " />
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import CcStatistic from '@/components/Statistic/index.vue'
</script>

<style scoped>
.statistic-demo {
  max-width: 1200px;
  margin: 0 auto;
}

h2 {
  color: #409eff;
}

.section {
  margin-bottom: 20px;
}

.demo-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
}

.demo-column {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
