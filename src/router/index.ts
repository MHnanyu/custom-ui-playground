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
      path: '/input',
      name: 'Input',
      component: () => import('@/views/Input.vue')
    }
  ]
})

export default router
