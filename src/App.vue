<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import { motion } from 'motion-v'
</script>

<template>
  <div class="font-primary">
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

    <div class="pt-14">
      <RouterView />
    </div>
  </div>
</template>

<style></style>
