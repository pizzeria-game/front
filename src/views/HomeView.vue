<script setup lang="ts">
import { ref } from "vue"

import PizzaRain from "@/components/PizzaRain.vue"
import GiantPizzaVue from "@/components/GiantPizza.vue"

const username = ref("")
</script>

<template>
    <main class="home-container">
        <PizzaRain />
        <GiantPizzaVue />
        <div class="box">
            <h1>Welcome to PizzaGame</h1>
            <input type="text" v-model="username" placeholder="Enter your username" />
            <button>Join a Room</button>
            <button>Create a Room</button>
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

input {
    display: block;
    margin: 1rem auto;
    padding: 0.5rem;
}

button {
    margin: 0.5rem auto;
    padding: 0.5rem 1rem;
}
</style>
