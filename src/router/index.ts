import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import RoomView from "../views/RoomView.vue"
import GameView from "../views/GameView.vue"

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
        }
    ]
})

export default router
