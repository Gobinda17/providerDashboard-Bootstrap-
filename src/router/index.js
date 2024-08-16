import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '../layouts/AuthLayout.vue'
import store from '../views/store'



const authMiddleware = (to, from, next) => {
  if (to.meta.requireAuth) {
    // Check if the user is logged in
    if (store.getters.isLoggedIn) {
      // If the route has a required role, check if the user has that role
      if (to.meta.role && store.getters.getRole === to.meta.role) {
        next(); // User is authenticated and has the required role
      } else if (!to.meta.role) {
        next({ name: 'home' }); // Redirect to home or another route
      } else {
        // User does not have the required role
        next({ name: 'home' }); // Redirect to home or another route
      }
    } else {
      // User is not logged in, redirect to the login page
      next({ name: 'LogIn' });
    }
  } else {
    // If the route does not require authentication, proceed to the route
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
        }
      ]
    },
  ]
})

export default router
