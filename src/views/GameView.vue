<script setup lang="ts">
import { onMounted, ref } from "vue"
import PizzaBox from "@/components/PizzaBox.vue"

type itemsType = {
    id: number
    item: string
    positionX: number
    size: number
    delay: number
}

const items = ref<itemsType[]>([])
const score = ref(0)
const isScoreChanged = ref("none")

const generateRandomItem = () => {
    const items = ["🍅", "🧅", "🍄", "🍍", "🍟", "🍗", "🥓", "🥩", "🍖", "🥪", "🥫", "🥚", "🍳"]
    const numbersOfItems = Math.floor(Math.random() * 20) + 10
    const randomItems = []
    let cumulativeDelay = 0.5
    for (let i = 0; i < numbersOfItems; i++) {
        const randomIndex = Math.floor(Math.random() * items.length)
        randomItems.push({
            id: i,
            item: items[randomIndex],
            positionX: Math.floor(Math.random() * 95) + 1,
            size: Math.floor(Math.random() * 50) + 20,
            delay: cumulativeDelay
        })
        cumulativeDelay += Math.random() * 1.5 + 1.5
    }
    return randomItems
}

onMounted(() => {
    items.value = generateRandomItem()
})

const onTouchItem = (item_id: number) => {
    const item = items.value.find((item) => item.id === item_id)
    if (!item) return

    items.value = items.value.filter((item) => item.id !== item_id)
    changeScore(1)
}

const onMissItem = (item_id: number) => {
    const item = items.value.find((item) => item.id === item_id)
    if (!item) return

    items.value = items.value.filter((item) => item.id !== item_id)
    changeScore(-1)
}

const changeScore = (value: number) => {
    score.value += value
    // check if value is positive or negative
    isScoreChanged.value = value > 0 ? "positive" : "negative"

    setTimeout(() => {
        isScoreChanged.value = "none"
    }, 500)
}
</script>

<template>
    <PizzaBox :onTouchItem="onTouchItem" :onMissItem="onMissItem" />
    <div class="items">
        <div
            v-for="item in items"
            :key="item.id"
            class="item"
            :style="{
                fontSize: `${item.size}px`,
                left: `${item.positionX}%`,
                animationDelay: `${item.delay}s`,
                animationDuration: `${10 - score / 5}s`
            }"
            :data-id="item.id"
        >
            {{ item.item }}
        </div>
    </div>
    <p
        class="score"
        :class="{
            'score-positive': isScoreChanged === 'positive',
            'score-negative': isScoreChanged === 'negative'
        }"
        :style="{ fontSize: `${14 + Math.floor(score / 5) * 2}px` }"
    >
        Score: {{ score }}
    </p>
    <div class="ranking">
        <h2>Ranking</h2>
        <ol>
            <li>
                <p class="ranking-user">
                    <span>DevButant</span>
                    <span>10</span>
                </p>
            </li>
        </ol>
    </div>
</template>

<style scoped>
.items {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: block;
}
.item {
    position: absolute;
    animation: fall 10s ease-in-out;
    transform: translateY(-150px);
}

.score {
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);
    padding: 5px;
}

.score-positive {
    color: green;
}

.score-negative {
    color: red;
}

.ranking {
    position: absolute;
    top: 40%;
    left: 0;
    transform: translateY(-50%);
    padding: 10px;
    text-align: left;
    width: 50vw;
    max-width: 200px;
}

.ranking-user {
    display: flex;
    justify-content: space-between;
}

.ranking-user span:first-child {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 75%;
}

@keyframes fall {
    to {
        transform: translateY(110vh) rotate(360deg);
    }
}
</style>
