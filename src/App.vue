<script setup lang="ts">
/* import { RouterLink, RouterView } from 'vue-router'
import { motion } from 'motion-v' */
import Navbar from './components/Navbar.vue'
import { motion } from 'motion-v'
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
    <Navbar />
  </motion.div>

  <div class="pt-18 flex">
    <RouterView />
  </div>
</template>

<style></style>
