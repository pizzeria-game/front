<script setup lang="ts">
import { RouterView } from "vue-router"

// @ts-ignore
import { useLoaderState } from "@/store/isLoading"

import Loader from "@/components/LoaderPizza.vue"

const isLoading = useLoaderState()
</script>

<template>
    <RouterView />
    <!-- <Loader :active="loading" /> -->
    <Loader :active="isLoading.state" />
</template>

<style scoped></style>
