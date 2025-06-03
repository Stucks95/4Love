<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="border-b shadow-sm fixed top-0 w-full z-50 bg-slate-200 rounded-xl">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <h1 class="text-3xl font-bold text-sky-700 hover:text-sky-500">4Love</h1>
        </div>

        <!-- Laptop Menu -->
        <div class="hidden md:flex space-x-4 items-center">
          <RouterLink to="/">
            <motion.div class="flex text-2xl place-items-center text-gray-600 hover:text-blue-600" :whileHover="{ scale: 0.98, transition: { duration: 0.5 } }">
              <span class="material-symbols-outlined">home</span>
              <p>HOME</p>
            </motion.div>
          </RouterLink>
          <RouterLink to="/about">
            <motion.div class="flex text-2xl place-items-center text-gray-600 hover:text-blue-600" :whileHover="{ scale: 0.98, transition: { duration: 0.5 } }">
              <span class="material-symbols-outlined">info</span>
              <p>CONTATTACI</p>
            </motion.div>
          </RouterLink>
          <RouterLink to="/gallery">
            <motion.div class="flex text-2xl place-items-center text-gray-600 hover:text-blue-600" :whileHover="{ scale: 0.98, transition: { duration: 0.5 } }">
              <span class="material-symbols-outlined">image</span>
              <p>GALLERIA</p>
            </motion.div>
          </RouterLink>
        </div>

        <div class="md:hidden flex items-center">
          <button @click="toggleMenu" class="text-sky-700 hover:text-sky-500 focus:outline-none">
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

      <!-- Mobile Menu -->
      <div v-if="isOpen" class="md:hidden bg-slate-200 pb-4">
        <RouterLink @click="toggleMenu" to="/" class="text-2xl text-gray-600 hover:text-blue-600">
          <motion.div class="flex place-items-center pb-2" :whileHover="{ scale: 0.98, transition: { duration: 0.5 } }">
            <span class="material-symbols-outlined">home</span>
            <p>HOME</p>
          </motion.div>
        </RouterLink>
        <RouterLink
          @click="toggleMenu"
          to="/about"
          class="text-2xl text-gray-600 hover:text-blue-600"
        >
          <motion.div class="flex place-items-center pb-2"  :whileHover="{ scale: 0.98, transition: { duration: 0.5 } }">
            <span class="material-symbols-outlined">info</span>
            <p>CONTATTACI</p>
          </motion.div>
        </RouterLink>
        <RouterLink
          @click="toggleMenu"
          to="/gallery"
          class="text-2xl text-gray-600 hover:text-blue-600"
        >
          <motion.div class="flex place-items-center pb-2"  :whileHover="{ scale: 0.98, transition: { duration: 0.5 } }">
            <span class="material-symbols-outlined">image</span>
            <p>GALLERIA</p>
          </motion.div>
        </RouterLink>
      </div>
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
.material-symbols-outlined {
  font-size: xx-large;
  font-variation-settings:
  'FILL' 0,
  'wght' 800,
  'GRAD' 0,
  'opsz' 24
}

</style>
