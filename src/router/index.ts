import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/button',
      name: 'Button',
      component: () => import('@/views/Button.vue')
    },
    {
      path: '/border',
      name: 'Border',
      component: () => import('@/views/Border.vue')
    },
    {
      path: '/color',
      name: 'Color',
      component: () => import('@/views/Color.vue')
    },
    {
      path: '/container',
      name: 'Container',
      component: () => import('@/views/Container.vue')
    },
    {
      path: '/icon',
      name: 'Icon',
      component: () => import('@/views/Icon.vue')
    },
    {
      path: '/layout',
      name: 'Layout',
      component: () => import('@/views/Layout.vue')
    },
    {
      path: '/link',
      name: 'Link',
      component: () => import('@/views/Link.vue')
    },
    {
      path: '/scrollbar',
      name: 'Scrollbar',
      component: () => import('@/views/Scrollbar.vue')
    },
    {
      path: '/space',
      name: 'Space',
      component: () => import('@/views/Space.vue')
    },
    {
      path: '/typography',
      name: 'Typography',
      component: () => import('@/views/Typography.vue')
    },
    {
      path: '/divider',
      name: 'Divider',
      component: () => import('@/views/Divider.vue')
    },
    {
      path: '/ellipsis',
      name: 'Ellipsis',
      component: () => import('@/views/Ellipsis.vue')
    },
    {
      path: '/autocomplete',
      name: 'Autocomplete',
      component: () => import('@/views/Autocomplete.vue')
    },
    {
      path: '/cascader',
      name: 'Cascader',
      component: () => import('@/views/Cascader.vue')
    },
    {
      path: '/checkbox',
      name: 'Checkbox',
      component: () => import('@/views/Checkbox.vue')
    },
    {
      path: '/color-picker',
      name: 'ColorPicker',
      component: () => import('@/views/ColorPicker.vue')
    },
    {
      path: '/date-picker',
      name: 'DatePicker',
      component: () => import('@/views/DatePicker.vue')
    },
    {
      path: '/date-time-picker',
      name: 'DateTimePicker',
      component: () => import('@/views/DateTimePicker.vue')
    },
    {
      path: '/descriptions',
      name: 'Descriptions',
      component: () => import('@/views/Descriptions.vue')
    },
    {
      path: '/table',
      name: 'Table',
      component: () => import('@/views/Table.vue')
    },
    {
      path: '/form',
      name: 'Form',
      component: () => import('@/views/Form.vue')
    },
    {
      path: '/input',
      name: 'Input',
      component: () => import('@/views/Input.vue')
    },
    {
      path: '/input-number',
      name: 'InputNumber',
      component: () => import('@/views/InputNumber.vue')
    },
    {
      path: '/input-tag',
      name: 'InputTag',
      component: () => import('@/views/InputTag.vue')
    },
    {
      path: '/mention',
      name: 'Mention',
      component: () => import('@/views/Mention.vue')
    },
    {
      path: '/radio',
      name: 'Radio',
      component: () => import('@/views/Radio.vue')
    },
    {
      path: '/rate',
      name: 'Rate',
      component: () => import('@/views/Rate.vue')
    },
    {
      path: '/result',
      name: 'Result',
      component: () => import('@/views/Result.vue')
    },
    {
      path: '/statistic',
      name: 'Statistic',
      component: () => import('@/views/Statistic.vue')
    },
    {
      path: '/card',
      name: 'Card',
      component: () => import('@/views/Card.vue')
    },
    {
      path: '/select',
      name: 'Select',
      component: () => import('@/views/Select.vue')
    },
    {
      path: '/virtualized-select',
      name: 'VirtualizedSelect',
      component: () => import('@/views/VirtualizedSelect.vue')
    },
    {
      path: '/slider',
      name: 'Slider',
      component: () => import('@/views/Slider.vue')
    },
    {
      path: '/switch',
      name: 'Switch',
      component: () => import('@/views/Switch.vue')
    },
    {
      path: '/time-picker',
      name: 'TimePicker',
      component: () => import('@/views/TimePicker.vue')
    },
    {
      path: '/time-select',
      name: 'TimeSelect',
      component: () => import('@/views/TimeSelect.vue')
    },
    {
      path: '/transfer',
      name: 'Transfer',
      component: () => import('@/views/Transfer.vue')
    },
    {
      path: '/tree-select',
      name: 'TreeSelect',
      component: () => import('@/views/TreeSelect.vue')
    },
    {
      path: '/tree',
      name: 'Tree',
      component: () => import('@/views/Tree.vue')
    },
    {
      path: '/upload',
      name: 'Upload',
      component: () => import('@/views/Upload.vue')
    },
    {
      path: '/affix',
      name: 'Affix',
      component: () => import('@/views/Affix.vue')
    },
    {
      path: '/anchor',
      name: 'Anchor',
      component: () => import('@/views/Anchor.vue')
    },
    {
      path: '/menu',
      name: 'Menu',
      component: () => import('@/views/Menu.vue')
    },
    {
      path: '/breadcrumb',
      name: 'Breadcrumb',
      component: () => import('@/views/Breadcrumb.vue')
    },
    {
      path: '/dropdown',
      name: 'Dropdown',
      component: () => import('@/views/Dropdown.vue')
    },
    {
      path: '/page-header',
      name: 'PageHeader',
      component: () => import('@/views/PageHeader.vue')
    },
    {
      path: '/steps',
      name: 'Steps',
      component: () => import('@/views/Steps.vue')
    },
    {
      path: '/tabs',
      name: 'Tabs',
      component: () => import('@/views/Tabs.vue')
    },
    {
      path: '/backtop',
      name: 'Backtop',
      component: () => import('@/views/Backtop.vue')
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: () => import('@/views/Dialog.vue')
    },
    {
      path: '/drawer',
      name: 'Drawer',
      component: () => import('@/views/Drawer.vue')
    },
    {
      path: '/collapse',
      name: 'Collapse',
      component: () => import('@/views/Collapse.vue')
    },
    {
      path: '/tag',
      name: 'Tag',
      component: () => import('@/views/Tag.vue')
    },
    {
      path: '/segmented',
      name: 'Segmented',
      component: () => import('@/views/Segmented.vue')
    },
    {
      path: '/avatar',
      name: 'Avatar',
      component: () => import('@/views/Avatar.vue')
    },
    {
      path: '/image',
      name: 'Image',
      component: () => import('@/views/Image.vue')
    },
    {
      path: '/popover',
      name: 'Popover',
      component: () => import('@/views/Popover.vue')
    },
    {
      path: '/popconfirm',
      name: 'Popconfirm',
      component: () => import('@/views/Popconfirm.vue')
    },
    {
      path: '/tooltip',
      name: 'Tooltip',
      component: () => import('@/views/Tooltip.vue')
    },
    {
      path: '/message-box',
      name: 'MessageBox',
      component: () => import('@/views/MessageBox.vue')
    },
    {
      path: '/message',
      name: 'Message',
      component: () => import('@/views/Message.vue')
    },
    {
      path: '/pagination',
      name: 'Pagination',
      component: () => import('@/views/Pagination.vue')
    }
  ]
})

export default router
