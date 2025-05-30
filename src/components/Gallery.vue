<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { motion } from 'motion-v'

const nomiFile: string[] = [`1.jpg`, `2.jpg`, `3.jpg`]

/* function getNomiFile() => { nomiFile.push(`1.jpg`) } */

function getImage(nome: string) {
  return new URL(`../assets/photo/${nome}`, import.meta.url).href
}
</script>

<template>
  <motion.div
    class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    :initial="{ opacity: 0 }"
    :animate="{ opacity: 1 }"
    :transition="{
      duration: 2,
      scale: { scale: 1.05, transition: { duration: 0.5 } },
    }"
  >
    <h1 class="text-xl font-bold text-dark-600">GALLERY PAGE</h1>

    <!-- PHOTOs -->

    <div class="grid grid-cols-3 gap-4 pt-6">
      <img
        class="mx-auto block h-48 rounded-full sm:mx-0 sm:shrink-0"
        v-for="(nome, index) in nomiFile"
        :key="index"
        :src="getImage(nome)"
        alt="immagine dinamica"
      />
    </div>
  </motion.div>
</template>
