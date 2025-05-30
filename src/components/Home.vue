<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { motion } from 'motion-v'
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
    <h1 class="text-xl font-bold text-dark-600">HOME PAGE</h1>
  </motion.div>
</template>
