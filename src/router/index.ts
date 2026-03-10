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
    }
  ]
})

export default router
