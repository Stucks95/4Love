<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <motion.nav :animate="isOpen ? 'open' : 'closed'" class="border-b shadow-sm fixed top-0 w-full z-50 bg-slate-200 rounded-xl">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="logo flex items-center">
          <RouterLink to="/">
            <h1 class="text-3xl font-bold text-sky-700 hover:text-sky-500">4Love</h1>
          </RouterLink>
        </div>

        <!-- Laptop Menu -->
        <div class="hidden md:flex space-x-4 items-center">
          <RouterLink to="/">
            <motion.div class="flex place-items-center text-gray-600 hover:text-blue-600"
            :whileHover="{ scale: 0.95, transition: { duration: 0.5 } }">
              <p class="text-xl font-bold">HOME</p>
            </motion.div>
          </RouterLink>
          <RouterLink to="/gallery">
            <motion.div class="flex text-xl place-items-center text-gray-600 hover:text-blue-600"
            :whileHover="{ scale: 0.95, transition: { duration: 0.5 } }">
              <p class="text-xl font-bold">GALLERIA</p>
            </motion.div>
          </RouterLink>
          <RouterLink to="/about">
            <motion.div class="flex text-xl place-items-center text-gray-600 hover:text-blue-600"
            :whileHover="{ scale: 0.95, transition: { duration: 0.5 } }">
              <p class="text-xl font-bold">CONTATTACI</p>
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

      <Transition name="fade">
        <div class="fade-fx" v-if="isOpen">
          <!-- Mobile Menu -->
          <Transition name="slide">
            <motion.div :variants="navVariants" v-if="isOpen" class="md:hidden bg-slate-200 pb-4 h-full shadow-lg">
              <RouterLink @click="toggle" to="/" class="text-2xl text-gray-600 hover:text-blue-600">
                <motion.div class="flex place-items-center pb-2" :whileHover="{ scale: 0.98, transition: { duration: 0.5 } }">
                  <span class="icon-placeholder material-symbols-outlined">home</span>
                  <p class="text-placeholder text-xl font-bold active-tab">HOME</p>
                </motion.div>
              </RouterLink>
              <RouterLink
                @click="toggle"
                to="/gallery"
                class="text-2xl text-gray-600 hover:text-blue-600">
                <motion.div class="flex place-items-center pb-2"  :whileHover="{ scale: 0.98, transition: { duration: 0.5 } }">
                  <span class="icon-placeholder material-symbols-outlined">image</span>
                  <p class="text-placeholder text-xl font-bold">GALLERIA</p>
                </motion.div>
              </RouterLink>
              <RouterLink
                @click="toggle"
                to="/about"
                class="text-2xl text-gray-600 hover:text-blue-600">
                <motion.div class="flex place-items-center pb-2"  :whileHover="{ scale: 0.98, transition: { duration: 0.5 } }">
                  <span class="icon-placeholder material-symbols-outlined">info</span>
                  <p class="text-placeholder text-xl font-bold">CONTATTACI</p>
                </motion.div>
              </RouterLink>
            </motion.div>
          </Transition>

        </div>
      </Transition>
    </div>

  </motion.nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { motion } from 'motion-v'
import type { MotionProps } from 'motion-v'

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
</script>

<style scoped>
.active-tab {
  text-decoration: underline;
  text-decoration-color: var(--color-sky-700);
  text-decoration-thickness: 3px;
}

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

/* Transizione fade overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Transizione slide sidebar */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.8s ease;
}
.slide-enter-from {
  transform: translateX(-50%);
}
.slide-leave-to {
  transform: translateX(-50%);
}
</style>
