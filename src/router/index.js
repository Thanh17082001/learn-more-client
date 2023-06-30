import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import loginPage from '../components/loginAcount.vue'
import loginSuccess from '../components/LoginSuccess.vue'

const routes = [
  {
    path: '/login-success',
    component: loginSuccess,
    
  },
  {
    path: '/home',
    component: Home,
    props: true, // cho phép truyền props từ route
    name:'Home'
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
