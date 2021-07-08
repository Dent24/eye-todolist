import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Create from '../views/Create.vue'
import Modify from '../views/Modify.vue'
import Login from '../views/Login.vue'

const routes = [
    // 主頁
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    // 新增
    {
        path: '/create',
        name: 'Create',
        component: Create
    },
    // 修改
    {
        path: '/modify',
        name: 'Modify',
        component: Modify
    },
    // 登入
    {
        path: '/',
        alias: '/login',
        name: 'Login',
        component: Login
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
