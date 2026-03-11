<template>
  <div class="home">
    <h1>CC UI 组件库</h1>
    <p>基于 Element Plus 的自定义组件库</p>
    <el-card>
      <template #header>
        <span>组件列表</span>
      </template>
      <div class="component-list">
        <h3>Basic 基础组件</h3>
        <router-link to="/button">
          <el-button type="primary">Button 按钮</el-button>
        </router-link>
        <router-link to="/border">
          <el-button type="primary">Border 边框</el-button>
        </router-link>
        <router-link to="/color">
          <el-button type="primary">Color 色彩</el-button>
        </router-link>
        <router-link to="/container">
          <el-button type="primary">Container 布局容器</el-button>
        </router-link>
        <router-link to="/icon">
          <el-button type="primary">Icon 图标</el-button>
        </router-link>
        <router-link to="/layout">
          <el-button type="primary">Layout 布局</el-button>
        </router-link>
        <router-link to="/link">
          <el-button type="primary">Link 链接</el-button>
        </router-link>
        <router-link to="/scrollbar">
          <el-button type="primary">Scrollbar 滚动条</el-button>
        </router-link>
        <router-link to="/space">
          <el-button type="primary">Space 间距</el-button>
        </router-link>
        <router-link to="/typography">
          <el-button type="primary">Typography 排版</el-button>
        </router-link>
        <router-link to="/divider">
          <el-button type="primary">Divider 分割线</el-button>
        </router-link>
        <router-link to="/ellipsis">
          <el-button type="primary">Ellipsis 文本省略</el-button>
        </router-link>

        <h3>Form 表单组件</h3>
        <router-link to="/autocomplete">
          <el-button type="success">Autocomplete 自动补全</el-button>
        </router-link>
        <router-link to="/cascader">
          <el-button type="success">Cascader 级联选择器</el-button>
        </router-link>
        <router-link to="/checkbox">
          <el-button type="success">Checkbox 多选框</el-button>
        </router-link>
        <router-link to="/color-picker">
          <el-button type="success">ColorPicker 颜色选择器</el-button>
        </router-link>
        <router-link to="/date-picker">
          <el-button type="success">DatePicker 日期选择器</el-button>
        </router-link>
        <router-link to="/date-time-picker">
          <el-button type="success">DateTimePicker 日期时间选择器</el-button>
        </router-link>
        <router-link to="/form">
          <el-button type="success">Form 表单</el-button>
        </router-link>
        <router-link to="/input">
          <el-button type="success">Input 输入框</el-button>
        </router-link>
        <router-link to="/input-number">
          <el-button type="success">InputNumber 数字输入框</el-button>
        </router-link>
        <router-link to="/input-tag">
          <el-button type="success">InputTag 输入框标签</el-button>
        </router-link>
        <router-link to="/mention">
          <el-button type="success">Mention 提及</el-button>
        </router-link>
        <router-link to="/radio">
          <el-button type="success">Radio 单选框</el-button>
        </router-link>
        <router-link to="/rate">
          <el-button type="success">Rate 评分</el-button>
        </router-link>
        <router-link to="/select">
          <el-button type="success">Select 选择器</el-button>
        </router-link>
        <router-link to="/virtualized-select">
          <el-button type="success">VirtualizedSelect 虚拟化选择器</el-button>
        </router-link>
        <router-link to="/slider">
          <el-button type="success">Slider 滑块</el-button>
        </router-link>
        <router-link to="/switch">
          <el-button type="success">Switch 开关</el-button>
        </router-link>
        <router-link to="/time-picker">
          <el-button type="success">TimePicker 时间选择器</el-button>
        </router-link>
        <router-link to="/time-select">
          <el-button type="success">TimeSelect 时间选择</el-button>
        </router-link>
        <router-link to="/transfer">
          <el-button type="success">Transfer 穿梭框</el-button>
        </router-link>
        <router-link to="/tree-select">
          <el-button type="success">TreeSelect 树选择</el-button>
        </router-link>
        <router-link to="/upload">
          <el-button type="success">Upload 上传</el-button>
        </router-link>

        <h3>Data 数据展示</h3>
        <router-link to="/avatar">
          <el-button type="warning">Avatar 头像</el-button>
        </router-link>
        <router-link to="/collapse">
          <el-button type="warning">Collapse 折叠面板</el-button>
        </router-link>
        <router-link to="/tag">
          <el-button type="warning">Tag 标签</el-button>
        </router-link>
        <router-link to="/descriptions">
          <el-button type="warning">Descriptions 描述列表</el-button>
        </router-link>
        <router-link to="/result">
          <el-button type="warning">Result 结果</el-button>
        </router-link>
        <router-link to="/statistic">
          <el-button type="warning">Statistic 统计数值</el-button>
        </router-link>
        <router-link to="/card">
          <el-button type="warning">Card 卡片</el-button>
        </router-link>
        <router-link to="/table">
          <el-button type="warning">Table 表格</el-button>
        </router-link>
        <router-link to="/tree">
          <el-button type="warning">Tree 树形控件</el-button>
        </router-link>
        <router-link to="/segmented">
          <el-button type="warning">Segmented 分段控制器</el-button>
        </router-link>
        <router-link to="/image">
          <el-button type="warning">Image 图片</el-button>
        </router-link>
        <router-link to="/pagination">
          <el-button type="warning">Pagination 分页</el-button>
        </router-link>

        <h3>Navigation 导航</h3>
        <router-link to="/affix">
          <el-button type="info">Affix 固钉</el-button>
        </router-link>
        <router-link to="/anchor">
          <el-button type="info">Anchor 锚点</el-button>
        </router-link>
        <router-link to="/menu">
          <el-button type="info">Menu 菜单</el-button>
        </router-link>
        <router-link to="/breadcrumb">
          <el-button type="info">Breadcrumb 面包屑</el-button>
        </router-link>
        <router-link to="/dropdown">
          <el-button type="info">Dropdown 下拉菜单</el-button>
        </router-link>
        <router-link to="/page-header">
          <el-button type="info">PageHeader 页头</el-button>
        </router-link>
        <router-link to="/steps">
          <el-button type="info">Steps 步骤条</el-button>
        </router-link>
        <router-link to="/tabs">
          <el-button type="info">Tabs 标签页</el-button>
        </router-link>
        <router-link to="/backtop">
          <el-button type="info">Backtop 回到顶部</el-button>
        </router-link>

        <h3>Feedback 反馈</h3>
        <router-link to="/dialog">
          <el-button type="danger">Dialog 对话框</el-button>
        </router-link>
        <router-link to="/drawer">
          <el-button type="danger">Drawer 抽屉</el-button>
        </router-link>
        <router-link to="/message-box">
          <el-button type="danger">MessageBox 消息弹框</el-button>
        </router-link>
        <router-link to="/message">
          <el-button type="danger">Message 消息提示</el-button>
        </router-link>
        <router-link to="/popover">
          <el-button type="danger">Popover 气泡卡片</el-button>
        </router-link>
        <router-link to="/popconfirm">
          <el-button type="danger">Popconfirm 气泡确认框</el-button>
        </router-link>
        <router-link to="/tooltip">
          <el-button type="danger">Tooltip 文字提示</el-button>
        </router-link>
        </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
}
h1 {
  color: #409eff;
}
.component-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
h3 {
  margin-bottom: 10px;
  color: #606266;
}
</style>
