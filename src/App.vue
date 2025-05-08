<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { motion } from 'motion-v'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <nav class="navbar">
      <div class="logo">
        <motion.h1 :whileHover="{ scale: 1.05, transition: { duration: 0.5 } }">4 Love</motion.h1>
      </div>

      <div class="pages">
        <RouterLink to="/">
          <motion.div :whileHover="{ scale: 1.05, transition: { duration: 0.5 } }">
            Home
          </motion.div>
        </RouterLink>
        <RouterLink to="/about">
          <motion.div :whileHover="{ scale: 1.05, transition: { duration: 0.5 } }">
            About
          </motion.div>
        </RouterLink>
        <RouterLink to="/gallery">
          <motion.div :whileHover="{ scale: 1.05, transition: { duration: 0.5 } }">
            Gallery
          </motion.div>
        </RouterLink>
      </div>
    </nav>
  </header>

  <RouterView />
</template>

<style></style>
