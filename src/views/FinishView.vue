<script setup lang="ts">
import PizzaRain from "@/components/PizzaRain.vue"
import GiantPizzaVue from "@/components/GiantPizza.vue"

import stringToColor from "@/utils/stringToColor"

import { onMounted, ref, type Ref } from "vue"
import { useRoute } from "vue-router"

const participants = [
    "Edofo",
    "Devbutant",
    "Romain",
    "Nezaezaeza",
    "eezaezanvjdfvnfverg",
    "afvdef,;v df lktrhkothgnk",
    "zedzadjkbvdsfhvkezfr",
    "efedouhvierznvlks",
    "renvkjzsv",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p"
]

const winners1 = ref<string>("")
const winners2 = ref<string>("")
const winners3 = ref<string>("")

const route = useRoute()
const ID = route.params.id

const generateRandomWinners = (winnerRef: Ref<String>, timeMax: number, timeStartDecrease: number) => {
    let speed = 100
    let time = 0

    // set random winners
    const changeWinners = () => {
        if (time > timeMax) {
            // set winner
            return (winnerRef.value = participants[Math.floor(Math.random() * participants.length)])
        }

        // set random winner
        winnerRef.value = participants[Math.floor(Math.random() * participants.length)]

        setTimeout(changeWinners, speed)

        if (time > timeStartDecrease) speed += 20

        time += speed
    }

    changeWinners()
}

onMounted(() => {
    generateRandomWinners(winners3, 3000, 0)
    generateRandomWinners(winners2, 5000, 3000)
    generateRandomWinners(winners1, 8000, 5000)
})
</script>

<template>
    <main class="finish-container">
        <PizzaRain />
        <GiantPizzaVue />

        <div class="box">
            <h1>Game Finish</h1>

            <div class="winners">
                <div class="winner2">
                    <div class="winner-card card-argent" v-bind:style="{ backgroundColor: stringToColor(winners2) }">
                        <p>{{ winners2 }}</p>
                    </div>
                    <h2>Winner 2</h2>
                    <h3>Score: 100</h3>
                </div>
                <div class="winner1">
                    <div class="winner-card card-gold" v-bind:style="{ backgroundColor: stringToColor(winners1) }">
                        <p>{{ winners1 }}</p>
                    </div>
                    <h2>Winner 1</h2>
                    <h3>Score: 100</h3>
                </div>
                <div class="winner3">
                    <div class="winner-card card-bronze" v-bind:style="{ backgroundColor: stringToColor(winners3) }">
                        <p>{{ winners3 }}</p>
                    </div>
                    <h2>Winner 3</h2>
                    <h3>Score: 100</h3>
                </div>
            </div>
            <div class="btn">
                <button @click="() => $router.push('/')">Retour au menu</button>
                <button @click="() => $router.push(`/room/${ID}`)">Rejouer</button>
            </div>
        </div>
    </main>
</template>

<style scoped>
.finish-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
}
.box {
    text-align: center;
    width: 95vw;
    max-width: 750px;
    z-index: 2;
}
.winners {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 50px;
    width: 100%;
}

.winners > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
}

.winner-card {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    aspect-ratio: 1;
    border-width: 5px;
    border-style: solid;
    border-radius: 5px;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
    align-self: center;
}

.card-gold {
    width: 100%;
    border-color: gold;
}

.card-argent {
    width: 95%;
    border-color: silver;
}

.card-bronze {
    width: 90%;
    border-color: #cd7f32;
}

.btn {
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 20px;
}
</style>
