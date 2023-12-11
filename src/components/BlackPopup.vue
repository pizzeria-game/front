<template>
    <div class="popup" v-show="show">
        <div class="dialog-content" v-if="content === 'joinRoom'">
            <h2>Join a Room</h2>
            <input type="text" placeholder="Enter room name" />
            <div class="dialog-actions">
                <button @click="onClose">Fermer</button>
                <button>Confirmer</button>
            </div>
        </div>
        <div class="dialog-content" v-else-if="content === 'createRoom'">
            <h2>Create a Room</h2>
            <input type="text" placeholder="Enter new room name" />
            <div class="dialog-actions">
                <button @click="onClose">Fermer</button>
                <button>Confirmer</button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits } from "vue"

defineProps({
    show: Boolean,
    content: String
})

const emit = defineEmits(["close"])

const onClose = () => {
    emit("close")
}
</script>

<style scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
}

.dialog-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 300px;
    text-align: center;
}

.dialog-actions {
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
}

.dialog-actions button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
}

.dialog-actions button:hover {
    background-color: #0056b3;
}
</style>
