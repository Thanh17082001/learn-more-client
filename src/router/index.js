import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import loginPage from '../components/loginAcount.vue'

const routes = [
  {
    path: '/home',
    component: Home,
    props: true // cho phép truyền props từ route
  },

  {
    path: "/login",
    component:loginPage,
    meta: { title: "Đăng nhập" },
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
