<template>
    <div class="popup" v-show="show">
        <!-- Vous pouvez mettre votre contenu ici -->
        <button @click="onClose">Fermer</button>
        <!-- Ajout d'un bouton de fermeture -->
    </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue"

const props = defineProps({
    show: Boolean
})

const emit = defineEmits(["close"]) // Ajout de 'close' à la liste d'événements que ce composant peut émettre

const onClose = () => {
    emit("close") // Evénement émis lorsque onClose est appelée
}
</script>

<style scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
}

.contains {
    background-color: black;
    padding: 8rem;
    border-radius: 4px;
    text-align: center;
}
</style>
