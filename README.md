# CC UI - 基于 Element Plus 的自定义组件库

## 简介

CC UI 是一个基于 [Element Plus](https://element-plus.org/zh-CN/component/overview.html) 封装的自定义组件库。通过对 Element Plus 组件的二次封装，提供统一的命名规范（`cc-` 前缀），便于项目维护和扩展。

## 命名规范

| Element Plus | CC UI |
|--------------|-------|
| el-button | cc-button |
| el-input | cc-input |
| el-select | cc-select |
| ... | ... |

## 项目结构

```
cc-ui/
├── component/
│   ├── button.md          # 组件文档
│   └── ...   
├── src/
│   ├── components/        # 组件实现
│   │   ├── Button/
│   │   │   └── index.vue
│   │   └── ...
│   ├── views/             # 组件验证页面
│   ├── App.vue
│   └── main.ts
├── package.json
├── vite.config.ts
└── README.md
```

## 开发指南

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

## 组件开发流程

1. **组件实现**：在 `src/components/` 目录下创建组件
2. **组件文档**：在 `components/` 目录下编写组件的 `.md` 文档，包含 Props、Events、Slots 和使用示例
3. **组件验证**：在 `src/views/` 目录下创建验证页面
4. **添加路由**：在 `src/router/index.ts` 中添加验证页面的路由
5. **首页导航**：在 `src/views/Home.vue` 中添加组件的导航链接
6. **更新进度**：在 README 中更新组件开发状态（⏳ 待开发 → 🚧 开发中 → ✅ 已完成）

## 组件列表

### Basic 基础组件 (12)

| 组件名 | 说明 | 状态 |
|--------|------|:----:|
| cc-button | 按钮 Button | ✅ 已完成 |
| cc-border | 边框 Border | ✅ 已完成 |
| cc-color | 色彩 Color | ✅ 已完成 |
| cc-container | 布局容器 Container | ✅ 已完成 |
| cc-icon | 图标 Icon | ✅ 已完成 |
| cc-layout | 布局 Layout | ✅ 已完成 |
| cc-link | 链接 Link | ✅ 已完成 |
| cc-scrollbar | 滚动条 Scrollbar | ✅ 已完成 |
| cc-space | 间距 Space | ✅ 已完成 |
| cc-typography | 排版 Typography | ✅ 已完成 |
| cc-divider | 分割线 Divider | ✅ 已完成 |
| cc-ellipsis | 文本省略 Ellipsis | ✅ 已完成 |

### Form 表单组件 (23)

| 组件名 | 说明 | 状态 |
|--------|------|:----:|
| cc-autocomplete | 自动补全输入框 Autocomplete | ✅ 已完成 |
| cc-cascader | 级联选择器 Cascader | ✅ 已完成 |
| cc-checkbox | 多选框 Checkbox | ✅ 已完成 |
| cc-color-picker | 颜色选择器 ColorPicker | ✅ 已完成 |
| cc-date-picker | 日期选择器 DatePicker | ✅ 已完成 |
| cc-date-time-picker | 日期时间选择器 DateTimePicker | ✅ 已完成 |
| cc-form | 表单 Form | ✅ 已完成 |
| cc-input | 输入框 Input | ✅ 已完成 |
| cc-input-number | 数字输入框 InputNumber | ✅ 已完成 |
| cc-input-tag | 输入框标签 InputTag | ✅ 已完成 |
| cc-mention | 提及 Mention | ✅ 已完成 |
| cc-radio | 单选框 Radio | ✅ 已完成 |
| cc-rate | 评分 Rate | ✅ 已完成 |
| cc-result | 结果 Result | ✅ 已完成 |
| cc-select | 选择器 Select | ✅ 已完成 |
| cc-virtualized-select | 虚拟化选择器 VirtualizedSelect | ✅ 已完成 |
| cc-slider | 滑块 Slider | ✅ 已完成 |
| cc-switch | 开关 Switch | ✅ 已完成 |
| cc-time-picker | 时间选择器 TimePicker | ✅ 已完成 |
| cc-time-select | 时间选择 TimeSelect | ✅ 已完成 |
| cc-transfer | 穿梭框 Transfer | ✅ 已完成 |
| cc-tree-select | 树选择 TreeSelect | ✅ 已完成 |
| cc-upload | 上传 Upload | ✅ 已完成 |

### Data 数据展示 (23)

| 组件名 | 说明 | 状态 |
|--------|------|:----:|
| cc-avatar | 头像 Avatar | ✅ 已完成 |
| cc-badge | 徽章 Badge | ⏳ 待开发 |
| cc-calendar | 日历 Calendar | ⏳ 待开发 |
| cc-card | 卡片 Card | ✅ 已完成 |
| cc-carousel | 走马灯 Carousel | ⏳ 待开发 |
| cc-collapse | 折叠面板 Collapse | ✅ 已完成 |
| cc-descriptions | 描述列表 Descriptions | ✅ 已完成 |
| cc-empty | 空状态 Empty | ⏳ 待开发 |
| cc-image | 图片 Image | ✅ 已完成 |
| cc-pagination | 分页 Pagination | ✅ 已完成 |
| cc-progress | 进度条 Progress | ⏳ 待开发 |
| cc-result | 结果 Result | ✅ 已完成 |
| cc-skeleton | 骨架屏 Skeleton | ⏳ 待开发 |
| cc-table | 表格 Table | ✅ 已完成 |
| cc-table-v2 | 虚拟化表格 TableV2 | ⏳ 待开发 |
| cc-tag | 标签 Tag | ✅ 已完成 |
| cc-timeline | 时间线 Timeline | ⏳ 待开发 |
| cc-tree | 树形控件 Tree | ✅ 已完成 |
| cc-tree-v2 | 虚拟化树 TreeV2 | ⏳ 待开发 |
| cc-statistic | 统计数值 Statistic | ✅ 已完成 |
| cc-segmented | 分段控制器 Segmented | ✅ 已完成 |
| cc-skeleton-item | 骨架屏项 SkeletonItem | ⏳ 待开发 |
| cc-countdown | 倒计时 Countdown | ⏳ 待开发 |

### Navigation 导航 (9)

| 组件名 | 说明 | 状态 |
|--------|------|:----:|
| cc-affix | 固钉 Affix | ✅ 已完成 |
| cc-anchor | 锚点 Anchor | ✅ 已完成 |
| cc-breadcrumb | 面包屑 Breadcrumb | ✅ 已完成 |
| cc-dropdown | 下拉菜单 Dropdown | ✅ 已完成 |
| cc-menu | 菜单 Menu | ✅ 已完成 |
| cc-page-header | 页头 PageHeader | ✅ 已完成 |
| cc-steps | 步骤条 Steps | ✅ 已完成 |
| cc-tabs | 标签页 Tabs | ✅ 已完成 |
| cc-backtop | 回到顶部 Backtop | ✅ 已完成 |

### Feedback 反馈 (10)

| 组件名 | 说明 | 状态 |
|--------|------|:----:|
| cc-alert | 警告 Alert | ⏳ 待开发 |
| cc-dialog | 对话框 Dialog | ✅ 已完成 |
| cc-drawer | 抽屉 Drawer | ✅ 已完成 |
| cc-loading | 加载 Loading | ⏳ 待开发 |
| cc-message | 消息提示 Message | ✅ 已完成 |
| cc-message-box | 消息弹框 MessageBox | ✅ 已完成 |
| cc-notification | 通知 Notification | ⏳ 待开发 |
| cc-popconfirm | 气泡确认框 Popconfirm | ✅ 已完成 |
| cc-popover | 气泡卡片 Popover | ✅ 已完成 |
| cc-tooltip | 文字提示 Tooltip | ✅ 已完成 |

## 开发进度统计

| 分类 | 总数 | 已完成 | 进度 |
|------|:----:|:------:|:----:|
| Basic 基础组件 | 12 | 12 | 100% |
| Form 表单组件 | 23 | 23 | 100% |
| Data 数据展示 | 23 | 12 | 52% |
| Navigation 导航 | 9 | 9 | 100% |
| Feedback 反馈 | 10 | 7 | 70% |
| **总计** | **77** | **63** | **82%** |

## 技术栈

- Vue 3
- Element Plus
- Vite
- TypeScript
