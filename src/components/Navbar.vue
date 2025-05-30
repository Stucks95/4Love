<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="bg-white border-b shadow-sm fixed top-0 w-full z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <h1 class="text-xl font-bold text-blue-800">4Love</h1>
        </div>

        <!-- Laptop Menu -->
        <div class="hidden md:flex space-x-4 items-center">
          <RouterLink to="/" class="text-lg text-gray-600 hover:text-blue-600">
            <motion.div :whileHover="{ scale: 0.98, transition: { duration: 0.5 } }">
              Home
            </motion.div>
          </RouterLink>
          <RouterLink to="/about" class="text-lg text-gray-600 hover:text-blue-600">
            <motion.div :whileHover="{ scale: 0.98, transition: { duration: 0.5 } }">
              About
            </motion.div>
          </RouterLink>
          <RouterLink to="/gallery" class="text-lg text-gray-600 hover:text-blue-600">
            <motion.div :whileHover="{ scale: 0.98, transition: { duration: 0.5 } }">
              Gallery
            </motion.div>
          </RouterLink>
        </div>

        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" class="text-gray-600 hover:text-blue-600 focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isOpen" class="md:hidden bg-white px-4 pt-2 pb-3 space-y-1">
      <RouterLink to="/" class="text-gray-600 hover:text-blue-600">
        <motion.div :whileHover="{ scale: 0.98, transition: { duration: 0.5 } }"> Home </motion.div>
      </RouterLink>
      <RouterLink to="/about" class="text-gray-600 hover:text-blue-600">
        <motion.div :whileHover="{ scale: 0.98, transition: { duration: 0.5 } }">
          About
        </motion.div>
      </RouterLink>
      <RouterLink to="/gallery" class="text-gray-600 hover:text-blue-600">
        <motion.div :whileHover="{ scale: 0.98, transition: { duration: 0.5 } }">
          Gallery
        </motion.div>
      </RouterLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { motion } from 'motion-v'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
/* Per evitare che il contenuto venga nascosto dalla navbar */
body {
  padding-top: 4rem;
}
</style>
