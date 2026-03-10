# Dropdown 下拉菜单

## 基础用法

下拉菜单组件用于展示可切换的菜单列表。

```vue
<template>
  <cc-dropdown>
    <el-button>
      下拉菜单<el-icon class="el-icon--right"><arrow-down /></el-icon>
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
</template>
```

## 触发方式

可以配置点击或者悬停触发下拉菜单。

```vue
<template>
  <cc-dropdown trigger="click">
    <el-button>
      click 触发<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </cc-dropdown>
  <cc-dropdown trigger="hover">
    <el-button>
      hover 触发<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </cc-dropdown>
</template>
```

## 按钮组合

可以结合按钮使用不同类型的下拉菜单。

```vue
<template>
  <el-dropdown split-button type="primary" @click="handleClick">
    默认菜单
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <el-dropdown split-button type="success">
    success
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <el-dropdown split-button type="info">
    info
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <el-dropdown split-button type="warning">
    warning
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <el-dropdown split-button type="danger">
    danger
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup>
const handleClick = () => {
  console.log('click')
}
</script>
```

## 禁用状态

可以禁用整个下拉菜单或者单个菜单项。

```vue
<template>
  <cc-dropdown disabled>
    <el-button>
      禁用状态<el-icon class="el-icon--right"><arrow-down /></el-icon>
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
      菜单项禁用<el-icon class="el-icon--right"><arrow-down /></el-icon>
    </el-button>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item disabled>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </cc-dropdown>
</template>
```

## Dropdown Props

| 属性名 | 说明 | 类型 | 默认值 |
|--------|------|------|--------|
| type | 菜单按钮类型，同 Button 的 type | `primary` \| `success` \| `warning` \| `danger` \| `info` \| `text` | - |
| size | 菜单按钮尺寸 | `large` \| `default` \| `small` | - |
| split-button | 是否显示为按钮组 | `boolean` | false |
| trigger | 触发方式 | `hover` \| `click` | hover |
| disabled | 是否禁用 | `boolean` | false |
| placement | 菜单位置 | `top` \| `top-start` \| `top-end` \| `bottom` \| `bottom-start` \| `bottom-end` | bottom |
| hide-timeout | 隐藏延迟 | `number` | 150 |
| show-timeout | 显示延迟 | `number` | 150 |
| popper-class | 弹出菜单的类名 | `string` | - |
| popper-options | 弹出菜单元配置 | `object` | - |
| max-height | 菜单最大高度 | `string` \| `number` | - |
| max-content | 菜单最大内容宽度 | `string` \| `number` | - |

## Dropdown Events

| 事件名 | 说明 | 回调参数 |
|--------|------|----------|
| click | 点击左侧按钮的回调 | (event: Event) => void |
| command | 点击菜单项触发 | (command: string \| number \| object) => void |
| visible-change | 下拉框显示/隐藏时触发 | (visible: boolean) => void |

## Dropdown Slots

| 插槽名 | 说明 |
|--------|------|
| default | 触发下拉菜单显示的元素 |
| dropdown | 下拉菜单内容 |
