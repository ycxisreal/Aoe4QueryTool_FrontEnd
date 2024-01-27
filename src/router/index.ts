import { createRouter, createWebHistory } from 'vue-router'
import test from '../components/test.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      components: {
        ycx: test
      }
    }
  ]
})

export default router
