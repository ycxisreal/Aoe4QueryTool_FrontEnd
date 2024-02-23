import { createRouter, createWebHistory } from 'vue-router'
import index from '../views/index.vue'
import personalInfo from '../components/personalInfo.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      components: {
        ycx: index
      },
      children:[
        {
          path: "personalInfo",
          components: {
            mainArea: personalInfo
          }
        }
      ]
    },

  ]
})

export default router
