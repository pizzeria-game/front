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
    <div class="message-box">
        <i class="picto" :class="getPictoFromType(props.type)" />
        <p>{{ props.message }}</p>
    </div>
</template>

<style scoped></style>
