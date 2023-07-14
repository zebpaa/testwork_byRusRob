import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Card from '../pages/Card.vue'
import CardHoriz from '../pages/CardHoriz.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('../pages/Card.vue')
    },
    {
      path: '/horiz',
      name: 'cardHoriz',
      component: () => import('../pages/CardHoriz.vue')
    }
  ]
})

export default router