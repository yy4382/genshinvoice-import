<script setup lang="ts">
import CopyIRead from "./CopyIRead.vue";
import OneClickIRead from "./OneClickIRead.vue";
import { ref } from "vue";
const showCard = ref(false);
</script>
<template>
    <button @click="showCard = !showCard" class="show-btn v-button">听书导入</button>
    <Transition name="slide">
        <div v-if="showCard" class="btn-card">
            <CopyIRead />
            <OneClickIRead />
        </div>
    </Transition>
</template>
<style scoped>
.show-btn {
    position: fixed;
    bottom: 1rem;
    right: 1rem;
    border-radius: 9999px;
}
.btn-card {
    position: fixed;
    bottom: 4rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
    background-color: #fff;
    border-radius: 1rem;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
@media (prefers-color-scheme: dark) {
    .btn-card {
        background-color: #222;
    }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.15s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
