<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <motion.nav :animate="isOpen ? 'open' : 'closed'" class="border-b shadow-sm fixed top-0 w-full z-50 bg-slate-200 rounded-xl">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex items-center">
          <RouterLink to="/">
            <h1 class="text-3xl font-bold text-sky-700 hover:text-sky-500">4Love</h1>
          </RouterLink>
        </div>

        <!-- Laptop Menu -->
        <div class="hidden md:flex space-x-4 items-center">
          <RouterLink to="/">
            <motion.div class="flex text-xl place-items-center text-gray-600 hover:text-blue-600"
            :whileHover="{ scale: 0.95, transition: { duration: 0.5 } }">
              <p>HOME</p>
            </motion.div>
          </RouterLink>
          <RouterLink to="/about">
            <motion.div class="flex text-xl place-items-center text-gray-600 hover:text-blue-600"
            :whileHover="{ scale: 0.95, transition: { duration: 0.5 } }">
              <p>CONTATTACI</p>
            </motion.div>
          </RouterLink>
          <RouterLink to="/gallery">
            <motion.div class="flex text-xl place-items-center text-gray-600 hover:text-blue-600"
            :whileHover="{ scale: 0.95, transition: { duration: 0.5 } }">
              <p>GALLERIA</p>
            </motion.div>
          </RouterLink>
        </div>

        <!-- Toogle Button -->
        <div class="md:hidden flex items-center">
          <button class="toggle-container bg-slate-400 p-2.5 justify-center flex" @click="toggle">
            <svg width="23" height="23" viewBox="0 0 23 23">
              <motion.path
                fill="transparent"
                stroke-width="3"
                stroke="hsl(0, 0%, 18%)"
                stroke-linecap="round"
                :variants="{
                  closed: { d: 'M 2 2.5 L 20 2.5' },
                  open: { d: 'M 3 16.5 L 17 2.5' }
                }"
              />
              <motion.path
                fill="transparent"
                stroke-width="3"
                stroke="hsl(0, 0%, 18%)"
                stroke-linecap="round"
                d="M 2 9.423 L 20 9.423"
                :variants="{
                  closed: { opacity: 1 },
                  open: { opacity: 0 }
                }"
                :transition="{ duration: 0.1 }"
              />
              <motion.path
                fill="transparent"
                stroke-width="3"
                stroke="hsl(0, 0%, 18%)"
                stroke-linecap="round"
                :variants="{
                  closed: { d: 'M 2 16.346 L 20 16.346' },
                  open: { d: 'M 3 2.5 L 17 16.346' }
                }"
              />
            </svg>
          </button>
        </div>
      </div>

      <motion.div class="background" :variants="sidebarVariants" />
      <!-- Mobile Menu -->
      <motion.div :variants="navVariants" v-if="isOpen" class="md:hidden bg-slate-200 pb-4">
        <RouterLink @click="toggle" to="/" class="text-2xl text-gray-600 hover:text-blue-600">
          <motion.div class="flex place-items-center pb-2" :whileHover="{ scale: 0.98, transition: { duration: 0.5 } }">
            <span class="icon-placeholder material-symbols-outlined">home</span>
            <p class="text-placeholder">HOME</p>
          </motion.div>
        </RouterLink>
        <RouterLink
          @click="toggle"
          to="/about"
          class="text-2xl text-gray-600 hover:text-blue-600"
        >
          <motion.div class="flex place-items-center pb-2"  :whileHover="{ scale: 0.98, transition: { duration: 0.5 } }">
            <span class="icon-placeholder material-symbols-outlined">info</span>
            <p class="text-placeholder">CONTATTACI</p>
          </motion.div>
        </RouterLink>
        <RouterLink
          @click="toggle"
          to="/gallery"
          class="text-2xl text-gray-600 hover:text-blue-600"
        >
          <motion.div class="flex place-items-center pb-2"  :whileHover="{ scale: 0.98, transition: { duration: 0.5 } }">
            <span class="icon-placeholder material-symbols-outlined">image</span>
            <p class="text-placeholder">GALLERIA</p>
          </motion.div>
        </RouterLink>
      </motion.div>
    </div>

  </motion.nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { motion } from 'motion-v'

const isOpen = ref(false)

const toggle = () => {
  isOpen.value = !isOpen.value
}

const navVariants: MotionProps['variants'] = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

const sidebarVariants: MotionProps['variants'] = {
  open: (height: unknown = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
}
</script>

<style scoped>
.toggle-container {
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  cursor: pointer;
  border-radius: 50%;
}

.icon-placeholder {
  font-size: xx-large;
  border-radius: 50%;
  flex: 40px 0;
  margin-right: 20px;
}

.text-placeholder {
  border-radius: 5px;
  flex: 1;
}
</style>
