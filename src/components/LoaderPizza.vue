<script setup lang="ts">
import { defineProps } from "vue"

const props = defineProps({
    active: {
        type: Boolean,
        required: true
    }
})
</script>

<template>
    <div class="loader" :class="{ active: props.active }">
        <img src="@/assets/img/pizzas/loader-pizza.jpeg" alt="Loading" />
    </div>
</template>

<style scoped>
.loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 0%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: height 0.5s;
    overflow: hidden;
}

.loader.active {
    height: 100%;
}
</style>
