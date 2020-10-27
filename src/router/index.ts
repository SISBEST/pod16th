import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/listen',
    name: 'Listen',
    component: () => import('../views/ListenStart.vue')
  },
  {
    path: '/listen/question/:qn',
    name: 'Question',
    component: () => import('../views/Question.vue')
  },
  {
    path: '/listen/cutscene/:qn',
    name: 'Cutscene',
    component: () => import('../views/Cutscene.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
