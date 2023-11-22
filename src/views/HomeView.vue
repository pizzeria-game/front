<template>
    <main class="home-container">
        <div class="box">
            <h1>Welcome to PizzaGame</h1>
            <input type="text" v-model="username" placeholder="Enter your username" />
            <button @click="join">Join a Room</button>
            <button @click="create">Create a Room</button>
        </div>
    </main>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"

export default defineComponent({
    setup() {
        const username = ref("")

        const someAPI = {
            async joinRoom(roomCode: string, username: string) {
                console.log(`Joining room ${roomCode} with username ${username}`)
                // Here you can implement the real call to the API
            },
            async createRoom(username: string) {
                console.log(`Creating room with username ${username}`)
                // Here you can implement the real call to the API
            }
        }

        async function join() {
            await someAPI.joinRoom("roomCode", username.value) // Replace "roomCode" with actual roomCode value
        }

        async function create() {
            await someAPI.createRoom(username.value)
        }

        return { username, join, create }
    }
})
</script>

<style scoped>
.home-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f5f5f5;
}

.box {
    text-align: center;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: white;
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
