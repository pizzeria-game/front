import { createRouter, createWebHistory } from "vue-router"

import HomeView from "@/views/HomeView.vue"
import RoomView from "@/views/RoomView.vue"
import GameView from "@/views/GameView.vue"
import FinishView from "@/views/FinishView.vue"

import { useLoaderState } from "@/store/isLoading"

const router = createRouter({
    // history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: HomeView
        },
        {
            path: "/room/:id",
            name: "room",
            component: RoomView
        },
        {
            path: "/game/:id",
            name: "game",
            component: GameView
        },
        {
            path: "/finish/:id",
            name: "finish",
            component: FinishView
        }
    ]
})

router.beforeEach((to, from, next) => {
    const isLoading = useLoaderState()
    isLoading.updateLoaderState(true)

    setTimeout(() => {
        next()
    }, 500)
})

router.afterEach(() => {
    const isLoading = useLoaderState()
    isLoading.updateLoaderState(false)
})

export default router
