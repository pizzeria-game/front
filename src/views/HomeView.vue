<script setup lang="ts">
import { ref } from "vue"

import PizzaRain from "@/components/PizzaRain.vue"
import GiantPizzaVue from "@/components/GiantPizza.vue"
import Popup from "@/components/BlackPopup.vue"

const username = ref("")
const showPopup = ref(false)
const dialogContent = ref("")
</script>

<template>
    <main class="home-container">
        <PizzaRain />
        <GiantPizzaVue />
        <div class="box">
            <h1>Welcome to PizzaGame</h1>
            <input type="text" v-model="username" placeholder="Enter your username" />

            <button
                @click="
                    () => {
                        showPopup = true
                        dialogContent = 'joinRoom'
                    }
                "
            >
                Join a Room
            </button>
            <button
                @click="
                    () => {
                        showPopup = true
                        dialogContent = 'createRoom'
                    }
                "
            >
                Create a Room
            </button>
        </div>

        <Popup :show="showPopup" :content="dialogContent" @close="showPopup = false" />
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
