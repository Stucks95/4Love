<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { motion } from 'motion-v'

function getImage(nome: string) {
  return new URL(`../assets/photo/${nome}`, import.meta.url).href
}
</script>

<template>
  <motion.div
    class=""
    :initial="{ opacity: 0 }"
    :animate="{ opacity: 1 }"
    :transition="{
      duration: 2,
      scale: { scale: 1.05, transition: { duration: 0.5 } },
    }"
  >
  <div class="home-container">
    <div class="home-card py-6 rounded-lg bg-slate-100">
      <h1 class="pb-6 text-2xl font-bold text-dark-600 justify-self-center">HOME</h1>
      <img
            class="w-full max-w-200 rounded-lg shadow-lg hover:scale-95 transition-transform duration-300 justify-self-center"
            :key="1"
            :src="getImage('smcf1.jpg')"
            alt="immagine dinamica"
          />
    </div>
  </div>
  </motion.div>
</template>
