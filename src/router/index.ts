import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/form'
    },
    {
        path: '/form',
        name: 'form',
        component: () => import('../views/CreateFormPage.vue')
    },
    {
        path: '/preview',
        name: 'preview',
        component: () => import('../views/PreviewPage.vue')
    },
    {path: '/:pathMatch(.*)*', redirect: '/form'}
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
