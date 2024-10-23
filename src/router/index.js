import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '../layouts/AuthLayout.vue'
import store from '../views/store'



const authMiddleware = (to, from, next) => {    
  if (to.meta.requireAuth) {
    if (store.getters.isLoggedIn) {
      if (to.meta.role && store.getters.getRole === to.meta.role) {
        next(); 
      } else if (!to.meta.role) {
        next({ name: 'LogIn' });
      } else {
        next({ name: 'LogIn' });
      }
    } else {
      next({ name: 'LogIn' });
    }
  } else {
    next();
  }
};


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
      meta: { requireAuth: true, role: 'admin' },
      component: () => import("../layouts/main-layout/MainLayout.vue"),
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          component: () => import('../views/Dashboard.vue'),
          meta: {
            pageTitle: "Dashboard",
            breadcrumbs: ['Dashboard'],
            role: 'admin',
          },
        },
        {
          path: '/stay',
          name: "Stay",
          component: () => import('../views/forms/Stay.vue'),
          meta: {
            pageTitle: "Stay",
            breadcrumbs: ['Stay', 'Registration'],
          },
        },
        {
          path: '/tour',
          name: 'Tour',
          component: () => import('../views/forms/Tour.vue'),
          meta: {
            pageTitle: "Tour",
            breadcrumbs: ['Tour', 'Registration'],
          },
        },
        {
          path: '/provider/tour-details',
          name: 'providerTourDetails',
          component: () => import('../views/tour/tourDetails.vue'),
          meta: {
            pageTitle: "Tour Details",
            breadcrumbs: ['Dashboard', 'Tour Details'],
          },
        },
        {
          path: '/bookings',
          name: 'Bookings',
          component: () => import('../views/pages/Bookings.vue'),
          meta: {
            pageTitle: "Bookings",
            breadcrumbs: ['Dashboard', 'Bookings'],
          },
        }
      ]
    },
  ]
})

// router.beforeEach(authMiddleware);
export default router
