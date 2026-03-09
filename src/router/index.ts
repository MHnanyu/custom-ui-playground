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
    }
  ]
})

export default router
