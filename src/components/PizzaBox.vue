<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue"

const props = defineProps({
    onTouchItem: {
        type: Function,
        required: true
    }
})

const pizzaPosition = ref(0)

// Fonction pour déplacer la pizza
const movePizza = (direction: number) => {
    // max : 100, min : 0
    if (pizzaPosition.value + direction > 70 || pizzaPosition.value + direction < 0) {
        return
    }

    pizzaPosition.value += direction
}

// Gestionnaire d'événement clavier
const handleKeyPress = (event: KeyboardEvent) => {
    const marge = 10
    if (event.key === "ArrowLeft") {
        movePizza(-marge) // Déplacer vers la gauche
    } else if (event.key === "ArrowRight") {
        movePizza(marge) // Déplacer vers la droite
    }
}

const checkCollision = (item: Element, pizzaBox: Element) => {
    const pizzaBoxRect = pizzaBox.getBoundingClientRect()
    const itemRect = item.getBoundingClientRect()

    return (
        pizzaBoxRect.top < itemRect.bottom &&
        pizzaBoxRect.bottom > itemRect.bottom &&
        pizzaBoxRect.right > itemRect.left &&
        pizzaBoxRect.left < itemRect.right
    )
}

const handleCollision = () => {
    const items = document.querySelectorAll(".item")
    const pizzaBox = document.querySelector(".pizzabox")

    if (!pizzaBox) return

    for (const item of items) {
        if (checkCollision(item, pizzaBox)) {
            console.log("Collision détectée")
            const itemId = item.getAttribute("data-id")
            props.onTouchItem(Number(itemId))
        }
    }
}

// Ajouter les gestionnaires d'événements lorsque le composant est monté
onMounted(() => {
    window.addEventListener("keydown", handleKeyPress)

    setInterval(() => {
        handleCollision()
    }, 100)
})

// Retirer les gestionnaires d'événements lorsque le composant est démonté
onUnmounted(() => {
    window.removeEventListener("keydown", handleKeyPress)
})
</script>

<template>
    <div class="pizzabox" :style="{ left: `${pizzaPosition}%` }"></div>
</template>

<style>
.pizzabox {
    width: 30vw;
    bottom: 35px;
    height: 50px;
    background-color: tomato;
    position: absolute;
    transition-duration: 0.2s;
    z-index: 2;
}
</style>
