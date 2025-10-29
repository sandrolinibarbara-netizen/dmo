import { createWebHistory, createRouter } from 'vue-router'

import HomeView from './views/HomeView.vue'
import DiscoverView from "./views/DiscoverView.vue";

const routes = [
    { path: '/', component: HomeView },
    { path: '/discover', component: DiscoverView },
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})