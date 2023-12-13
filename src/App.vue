<script setup lang="ts">
import { RouterView } from "vue-router"

// @ts-ignore
import { useLoaderState } from "@/store/isLoading"
import { useMessageBox } from "@/store/messageBox"

import Loader from "@/components/LoaderPizza.vue"
import MessageBox from "@/components/MessageBox.vue"

const isLoading = useLoaderState()
const messageBox = useMessageBox()
</script>

<template>
    <RouterView />
    <Loader :active="isLoading.state" />
    <div class="message-box-container">
        <MessageBox
            v-for="message in messageBox.messages"
            :key="message.id"
            :message="message.message + message.id"
            :type="message.type"
        />
    </div>
</template>

<style scoped>
.message-box-container {
    position: fixed;
    top: 15%;
    left: 1rem;
    z-index: 1000;
}
.message-box-container > * {
    margin-bottom: 1rem;
}
</style>
