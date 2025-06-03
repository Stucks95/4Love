<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { motion } from 'motion-v'
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
  <div class="about-container px-4 py-6 rounded-lg bg-slate-100">
    <h1 class="text-2xl font-bold text-dark-600 justify-self-center">CONTATTACI</h1>
    <div class="info contents">
        <strong class="text-xl flex justify-center">siamo 4 ragazzi</strong>
        <span class="text-xl flex justify-center">molto bravi</span>
      </div>
  </div>

  </motion.div>
</template>
