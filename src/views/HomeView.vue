<script setup lang="ts">
import { ref } from "vue"

import PizzaRain from "@/components/PizzaRain.vue"
import GiantPizzaVue from "@/components/GiantPizza.vue"
import Popup from "@/components/ShowPopup.vue"
import router from "@/router"

const username = ref("")
const showPopup = ref(false)

const handleClosePopup = () => {
    showPopup.value = false
}

const handleJoinRoom = (e: Event) => {
    e.preventDefault()

    const { room } = e.target as typeof e.target & {
        room: { value: string }
    }

    if (!room.value) return

    router.push(`/room/${room.value}`)
}

const handleCreateRoom = () => {
    router.push(`/room/1`)
}
</script>

<template>
    <main class="home-container">
        <PizzaRain />
        <GiantPizzaVue />
        <div class="box">
            <h1>Welcome to PizzaGame</h1>

            <div class="menu-btn">
                <button @click="() => (showPopup = true)">Join a Room</button>
                <button @click="handleCreateRoom">Create a Room</button>
            </div>
        </div>

        <Popup :show="showPopup" :close="() => (showPopup = false)">
            <h2>Join a Room</h2>
            <form @submit="handleJoinRoom">
                <input name="room" type="text" placeholder="Enter room name" required />
                <div class="join-actions">
                    <button @click="() => handleClosePopup()" type="button">Fermer</button>
                    <button type="submit">Confirmer</button>
                </div>
            </form>
        </Popup>
    </main>
</template>

<style scoped>
.home-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    widows: 100vw;
    background-color: #f5f5f5;
}

.box {
    text-align: center;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: white;
    z-index: 2;
}

.menu-btn,
.join-actions {
    display: flex;
    justify-content: center;
    gap: 20px;
}
</style>
