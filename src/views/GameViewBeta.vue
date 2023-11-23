<script setup lang="ts">
// import PizzaBox from "@/components/PizzaBox.vue"
import * as THREE from "three"
import TWEEN from "@tweenjs/tween.js"

import { onMounted, ref, computed, watch } from "vue"
import { useWindowSize } from "@vueuse/core"

const sceneContainer = ref<HTMLCanvasElement | null>(null)
const scene = new THREE.Scene()

let renderer: THREE.WebGLRenderer
let camera: THREE.PerspectiveCamera
let pizzaBase: THREE.Mesh

const { width, height } = useWindowSize()

const aspectRatio = computed(() => width.value / height.value)

const updateCamera = () => {
    camera.aspect = aspectRatio.value
    camera.updateProjectionMatrix()
}

const updateRenderer = () => {
    renderer.setSize(width.value, height.value)
    renderer.setPixelRatio(window.devicePixelRatio)
}

watch(aspectRatio, updateCamera)
watch(aspectRatio, updateRenderer)

camera = new THREE.PerspectiveCamera(45, aspectRatio.value, 0.1, 1000)
camera.position.z = 5

const createPizzaBase = () => {
    pizzaBase = new THREE.Mesh(
        new THREE.BoxGeometry(1.5, 0.2, 1), // Ajustez la taille de la barre selon vos besoins
        new THREE.MeshBasicMaterial({ color: 0xffd700 })
    )
    scene.add(pizzaBase)
    pizzaBase.position.set(0, -2, 0) // Position initiale de la barre
}

onMounted(() => {
    renderer = new THREE.WebGLRenderer({
        canvas: sceneContainer.value as unknown as HTMLCanvasElement,
        alpha: true,
        antialias: true
    })

    updateRenderer()
    updateCamera()

    createPizzaBase()

    const animate = () => {
        requestAnimationFrame(animate)
        TWEEN.update()
        checkCollision()
        renderer.render(scene, camera)
    }

    animate()
})

// check the collision between the pizza base and the ingredients
const checkCollision = () => {
    if (pizzaBase) {
        // get all the ingredients without the pizza base
        scene.children
            .filter((ingredient) => ingredient !== pizzaBase)
            .forEach((ingredient) => {
                if (ingredient instanceof THREE.Mesh) {
                    if (ingredient.position.y < -1.8 && ingredient.position.y > -2.2) {
                        if (
                            ingredient.position.x < pizzaBase.position.x + 0.7 &&
                            ingredient.position.x > pizzaBase.position.x - 0.7
                        ) {
                            scene.remove(ingredient)
                        }
                    }
                }
            })
    }
}
// Ajouter un ingrédient à chaque clic qui tombe du ciel
window.addEventListener("click", () => {
    const tomato = new THREE.Mesh(
        new THREE.SphereGeometry(0.5, 32, 32),
        new THREE.MeshBasicMaterial({ color: 0x008080 })
    )
    scene.add(tomato)

    // fall from the sky
    tomato.position.set(0, 2, 0)

    // Animation de la position de l'ingrédient
    new TWEEN.Tween(tomato.position)
        .to({ x: 0, y: -5, z: 0 }, 10000) // Déplace l'ingrédient à la position (0, -2, 0) en 1 seconde
        .easing(TWEEN.Easing.Quadratic.InOut) // Fonction d'interpolation pour un mouvement fluide
        .start() // Démarre l'animation

    // Fonction de mise à jour pour Tween.js (appelée dans la boucle de rendu)
    const animate = () => {
        requestAnimationFrame(animate)
        TWEEN.update()
        renderer.render(scene, camera)
    }

    animate()

    // renderer.render(scene, camera)
})

window.addEventListener("keydown", (event) => {
    const speed = 0.2
    if (pizzaBase) {
        switch (event.key) {
            case "ArrowLeft":
                pizzaBase.position.x = Math.max(pizzaBase.position.x - speed, -2.5) // Limite à gauche
                break
            case "ArrowRight":
                pizzaBase.position.x = Math.min(pizzaBase.position.x + speed, 2.5) // Limite à droite
                break
        }
    }
})
</script>

<template>
    <!-- <PizzaBox /> -->
    <canvas ref="sceneContainer" id="sceneContainer"></canvas>
</template>

<style scoped>
#sceneContainer {
    background-color: black;
}
</style>
