<script setup lang="ts"></script>

<template>
    <img src="@/assets/img/pizzas/giant-pizza.png" alt="pizza" id="giant-pizza" />
</template>

<style>
#giant-pizza {
    position: fixed;
    bottom: -15px;
    left: 0;
    width: 30vw;
    aspect-ratio: 1;
    animation: 15s move linear infinite;
    transform: translateX(-130vw);
}

@keyframes move {
    to {
        transform: translateX(200vw) rotate(1000deg);
    }
}
</style>
