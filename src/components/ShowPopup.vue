<script setup lang="ts">
import { defineProps } from "vue"

defineProps({
    show: {
        type: Boolean,
        required: true
    },
    close: {
        type: Function,
        required: true
    }
})
</script>

<template>
    <div class="popup" v-show="show">
        <div class="popup-black" @click="() => close()"></div>

        <!-- <div class="dialog-content" v-if="content === 'joinRoom'">
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
        </div> -->
        <div class="popup-content">
            <slot>
                <p>Default Content</p>
            </slot>
        </div>
    </div>
</template>

<style scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
}
.popup-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 95vw;
    max-width: 420px;
    text-align: center;
    z-index: 10;
}

.popup-black {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
}
</style>
