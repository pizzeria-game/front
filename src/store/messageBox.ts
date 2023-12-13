import { defineStore } from "pinia"
import { ref } from "vue"

type message = {
    id: number
    type: string
    message: string
}

export const useMessageBox = defineStore("messageBox", () => {
    const messages = ref<message[]>([])

    const addMessage = (message: { type: string; message: string }) => {
        // generate a random id
        const id = Math.floor(Math.random() * 100000)
        messages.value.push({ ...message, id })

        // remove it after 5 seconds
        setTimeout(() => {
            removeMessage(id)
        }, 5000)
    }

    const removeMessage = (message_id: number) => {
        messages.value = messages.value.filter((message) => message.id !== message_id)
    }

    return { messages, addMessage, removeMessage }
})
