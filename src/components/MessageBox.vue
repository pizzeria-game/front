<script setup lang="ts">
import { defineProps } from "vue"

const props = defineProps({
    message: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
})

const getPictoFromType = (type: string) => {
    switch (type) {
        case "error":
            return "fas fa-exclamation-triangle"
        case "success":
            return "fas fa-check-circle"
        case "info":
            return "fas fa-info-circle"
        default:
            return "fas fa-exclamation-triangle"
    }
}
</script>

<template>
    <div class="message-box" :class="props.type">
        <i class="picto" :class="getPictoFromType(props.type)" />
        <p>{{ props.message }}</p>
    </div>
</template>

<style scoped>
.message-box {
    display: flex;
    align-items: center;
    padding: 1rem;
    border-radius: 0.5rem;
    background-color: #fff;
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.2);
    transform: translateX(0);
    animation-name: slideOut;
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
    animation-delay: 4.5s;
}

@keyframes slideOut {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-100%);
    }
}

.message-box .picto {
    font-size: 1.5rem;
    margin-right: 1rem;
}

.message-box.error {
    border-left: 0.5rem solid #f44336;
}

.message-box.success {
    border-left: 0.5rem solid #4caf50;
}

.message-box.info {
    border-left: 0.5rem solid #2196f3;
}

.message-box.warning {
    border-left: 0.5rem solid #ff9800;
}
</style>
