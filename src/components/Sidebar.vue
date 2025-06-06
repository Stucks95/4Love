<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="sidebar-container">
    <!-- Button + Logo -->
    <div class="logo flex items-center p-4">
      <button @click="toggleMenu" class="md:hidden z-50 relative w-10 h-10 focus:outline-none mr-4">
        <span
          :class="[
            'block absolute h-0.5 w-8 bg-black transform transition duration-500 ease-in-out',
            isOpen ? 'rotate-45 top-4' : 'top-2'
          ]"
        ></span>
        <span
          :class="[
            'block absolute h-0.5 w-8 bg-black transition duration-500 ease-in-out',
            isOpen ? 'opacity-0' : 'top-4'
          ]"
        ></span>
        <span
          :class="[
            'block absolute h-0.5 w-8 bg-black transform transition duration-500 ease-in-out',
            isOpen ? '-rotate-45 top-4' : 'top-6'
          ]"
        ></span>
      </button>
      <RouterLink to="/">
        <h1 class="text-3xl font-bold text-sky-700 hover:text-sky-500">4Love</h1>
      </RouterLink>

      <!-- Laptop Menu -->
      <div class="laptop-menu hidden md:flex space-x-4 absolute top-0 right-0 mr-6 pt-6">
        <RouterLink to="/">
          <motion.div class="option-menu text-xl font-bold flex place-items-center text-gray-600 hover:text-blue-600"
          :whileHover="{ scale: 0.95, transition: { duration: 0.5 } }">
            HOME
          </motion.div>
        </RouterLink>
        <RouterLink to="/gallery">
          <motion.div class="option-menu font-bold text-xl place-items-center text-gray-600 hover:text-blue-600"
          :whileHover="{ scale: 0.95, transition: { duration: 0.5 } }">
            GALLERIA
          </motion.div>
        </RouterLink>
        <RouterLink to="/about">
          <motion.div class="option-menu font-bold text-xl place-items-center text-gray-600 hover:text-blue-600"
          :whileHover="{ scale: 0.95, transition: { duration: 0.5 } }">
            CONTATTACI
          </motion.div>
        </RouterLink>
      </div>
    </div>

    <!-- Overlay + Mobile Sidebar -->
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black/50 z-40"
        @click="closeMenu"
      ></div>
    </Transition>

    <Transition name="slide">
      <aside v-if="isOpen" class="mobile-menu md:hidden fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-50 p-6">
        <h2 class="text-xl font-bold mb-4">Menu</h2>
        <ul class="space-y-2">
          <li>
            <RouterLink @click="closeMenu" to="/">
              <motion.div class="inline-flex pb-2 font-bold text-xl place-items-center text-gray-600 hover:text-blue-600"
              :whileHover="{ scale: 0.98, transition: { duration: 0.5 } }">
                <span class="icon-placeholder material-symbols-outlined">home</span>
                <p class="option-menu">HOME</p>
              </motion.div>
            </RouterLink>
          </li>
          <li>
            <RouterLink @click="closeMenu" to="/gallery">
              <motion.div class="inline-flex pb-2 font-bold text-xl place-items-center text-gray-600 hover:text-blue-600"
              :whileHover="{ scale: 0.98, transition: { duration: 0.5 } }">
                <span class="icon-placeholder material-symbols-outlined">image</span>
                <p class="option-menu">GALLERIA</p>
              </motion.div>
            </RouterLink>
          </li>
          <li>
            <RouterLink @click="closeMenu" to="/about">
              <motion.div class="inline-flex pb-2 font-bold text-xl place-items-center text-gray-600 hover:text-blue-600"
              :whileHover="{ scale: 0.98, transition: { duration: 0.5 } }">
                <span class="icon-placeholder material-symbols-outlined">info</span>
                <p class="option-menu">CONTATTACI</p>
              </motion.div>
            </RouterLink>
          </li>
        </ul>
      </aside>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { motion } from 'motion-v'

const isOpen = ref(false)

function toggleMenu() {
  isOpen.value = !isOpen.value
}
function closeMenu() {
  isOpen.value = false
}
</script>

<style scoped>
a.router-link-exact-active .option-menu {
  color: var(--color-sky-700);
  text-decoration: underline;
  text-decoration-thickness: 3px;
}

.active-tab {
  text-decoration: underline;
  text-decoration-color: var(--color-sky-700);
  text-decoration-thickness: 3px;
}

.toggle-container {
  outline: none;
  border: none;
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s ease;
}
.slide-enter-from {
  transform: translateX(-100%);
}
.slide-leave-to {
  transform: translateX(-100%);
}
</style>
