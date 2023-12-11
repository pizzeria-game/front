<script setup lang="ts">
import { ref } from "vue"
import { useRoute } from "vue-router"

import router from "@/router"

import PizzaRain from "@/components/PizzaRain.vue"
import GiantPizzaVue from "@/components/GiantPizza.vue"

const route = useRoute()
const ID = route.params.id

const participants = ref(["DevButant", "RMZ", "Edofo"])

const startGame = () => {
    console.log("Game started")
    router.push(`/game/${ID}`)
}
</script>

<template>
    <main class="home-container">
        <PizzaRain />
        <GiantPizzaVue />
        <div class="box">
            <h1>Room {{ ID }}</h1>
            <h2>Participants</h2>
            <ul class="list">
                <li v-for="participant in participants" :key="participant">
                    {{ participant }}
                </li>
            </ul>
            <button @click="startGame">Start Game</button>
        </div>
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

.list {
    list-style: none;
    padding: 0;
    text-align: left;
    margin: 15px 0;
}

input {
    display: block;
    margin: 1rem auto;
    padding: 0.5rem;
}
</style>
