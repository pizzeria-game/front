import { defineStore } from "pinia"
import { ref } from "vue"

export const useLoaderState = defineStore("isLoading", () => {
    const state = ref(false)

    const updateLoaderState = (value: boolean) => {
        state.value = value
    }

    return { state, updateLoaderState }
})
