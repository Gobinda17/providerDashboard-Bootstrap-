import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '../layouts/AuthLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LogIn',
      component: AuthLayout,
    },
    {
      path: '/home',
      redirect: '/dashboard',
      component: () => import("../layouts/main-layout/MainLayout.vue"),
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: () => import('../views/Dashboard.vue'),
        }
      ]
    },
    {
      path: '/stay',
      component: () => import("../layouts/main-layout/MainLayout.vue"),
      children: [
        {
          path: '/stay',
          name: 'Stay',
          component: () => import('../components/forms/Stay.vue'),
        }
      ]
    },
    {
      path: '/tour',
      component: () => import("../layouts/main-layout/MainLayout.vue"),
      children: [
        {
          path: '/tour',
          name: 'Tour',
          component: () => import('../components/forms/Tour.vue'),
        }
      ]
    }
  ]
})

export default router
