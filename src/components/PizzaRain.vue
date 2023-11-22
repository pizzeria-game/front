<script setup lang="ts">
import { ref } from "vue"

const pizzaContainer = ref<HTMLDivElement | null>(null)

const createPizza = () => {
    if (!pizzaContainer.value) return

    const pizzaCount = 3 // Adjust this to the number of pizzas you want to create at the same time
    for (let i = 0; i < pizzaCount; i++) {
        const pizza = document.createElement("div")
        pizza.classList.add("pizza")
        pizza.style.left = Math.random() * window.innerWidth + "px"
        pizza.style.animationDuration = Math.max(6, Math.random() * 8) + "s"
        // rotate rando 0 to 360
        pizza.style.transform = `rotate(${Math.random() * 360}deg)`
        pizzaContainer.value.appendChild(pizza)

        setTimeout(() => {
            if (!pizzaContainer.value) return

            pizzaContainer.value.removeChild(pizza)
        }, 6000)
    }
}

setInterval(createPizza, 200)
</script>

<template>
    <div id="pizzaRain" ref="pizzaContainer"></div>
</template>

<style>
#pizzaRain {
    position: fixed;
    top: -100px;
    left: 0;
    width: 100vw;
    height: 100vh;
}
.pizza {
    position: fixed;
    width: 50px;
    height: 50px;
    background-image: url("@/assets/img/pizzas/pizza.png");
    background-size: contain;
    background-repeat: no-repeat;
    animation: fall linear;
}

@keyframes fall {
    to {
        transform: translateY(120vh);
    }
}
</style>
