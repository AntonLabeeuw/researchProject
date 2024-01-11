import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../components/wrappers/AppWrapper.vue'),
      meta: { shouldBeAuthenticated: true, role: 100 },
      children: [
        {
          path: '',
          component: () => import('../views/Home.vue'),
          meta: { shouldBeAuthenticated: true, role: 100 },
        },
      ],
    },
    {
      path: '/auth',
      component: () => import('../components/wrappers/AuthWrapper.vue'),
      meta: { preventLoggedIn: true, role: 0 },
      children: [
        {
          path: '',
          component: () => import('../views/auth/Login.vue'),
          meta: { preventLoggedIn: true, role: 0 },
        },
        {
          path: 'login',
          component: () => import('../views/auth/Login.vue'),
          meta: { preventLoggedIn: true, role: 0 },
        },
        {
          path: 'register',
          component: () => import('../views/auth/Register.vue'),
          meta: { preventLoggedIn: true, role: 0 },
        },
        {
          path: 'forgot-password',
          component: () => import('../views/auth/ForgotPassword.vue'),
          meta: { preventLoggedIn: true, role: 0 },
        },
      ],
    },
  ],
})

export default router
