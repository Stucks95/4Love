<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { motion } from 'motion-v'
import { ref, onMounted } from 'vue'

function getImage(nome: string) {
  return new URL(`../assets/photo/${nome}`, import.meta.url).href
}

const isClicked = ref(false)
/* const overlayFx = () => {
  isClicked.value = !isClicked.value
  console.log('isClicked.value', isClicked.value)
} */

onMounted(() => {
  isClicked.value = false
})
</script>

<template>
  <motion.div
    :initial="{ opacity: 0 }"
    :animate="{ opacity: 1 }"
    :transition="{
      duration: 2,
      scale: { scale: 1.05, transition: { duration: 0.5 } },
    }"
  >
  <div class="home-container p-6 rounded-lg bg-slate-200" :class="{'bg-slate-500 hover: scale-110': isClicked}">
    <div class="home-card">
      <h1 class="pb-6 text-2xl font-bold text-dark-600 justify-self-center">HOME</h1>
      <img
        class="w-full max-w-90 rounded-lg shadow-lg justify-self-center hover:scale-95 transition duration-800 ease-in-out"
        :key="1"
        v-lazy="getImage('smcf1.jpg')"
        alt="immagine dinamica"
      />
    </div>
  </div>
  </motion.div>
</template>
