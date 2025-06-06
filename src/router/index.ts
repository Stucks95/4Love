import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/about',
      name: 'about',
      // lazy-loading
      component: () => import('../components/About.vue'),
    },
    {
      path: '/gallery',
      name: 'gallery',
      // lazy-loading
      component: () => import('../components/Gallery.vue'),
    },
  ],
})

export default router
