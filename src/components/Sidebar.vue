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
        <div v-for="page in pages" :key="page.id">
          <RouterLink :to="page.name" class="text-xl font-bold flex place-items-center text-gray-600 hover:text-blue-600 hover:scale-95">
              {{ page.itUppercase }}
          </RouterLink>
        </div>
      </div>
    </div>

    <!-- Overlay -->
    <Transition name="fade">
      <div
        v-if="isOpen"
        class="fixed inset-0 bg-black/50 z-40"
        @click="closeMenu"
      ></div>
    </Transition>

    <!-- Mobile Sidebar -->
    <Transition name="slide">
      <aside v-if="isOpen" class="mobile-menu md:hidden fixed left-0 top-0 h-full w-72 bg-white shadow-lg z-50 p-6">
        <h2 class="text-xl font-bold mb-4">Menu</h2>
        <ul class="space-y-2">
          <li v-for="page in pages" :key="page.id">
            <RouterLink :to="page.name" @click="closeMenu"
            class="text-xl font-bold flex py-2 text-gray-600 hover:text-blue-600 hover:scale-95 hover:bg-sky-100 hover:opacity-90 rounded">
                <span class="icon-placeholder material-symbols-outlined">{{ page.iconName }}</span>
                <p style="font-size: 1.8rem">{{ page.itUppercase }}</p>
            </RouterLink>
          </li>
        </ul>
      </aside>
    </Transition>

  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import router from '@/router'

interface Pages {
  id: number,
  name: string,
  itName: string,
  itUppercase: string,
  iconName: string
}

const isOpen = ref(false)
const pages: Pages[] = [
  { id: 0, name: 'home', itName: 'home', itUppercase: 'HOME', iconName: 'home' },
  { id: 1, name: "gallery", itName: 'galleria', itUppercase: 'GALLERIA', iconName: 'image' },
  { id: 2, name: 'about', itName: 'contatti', itUppercase: 'CONTATTI', iconName: 'info' },
]

function toggleMenu() {
  isOpen.value = !isOpen.value
}
function closeMenu() {
  isOpen.value = false
}

onMounted(() => {
  console.log(router.options.routes)
})
</script>

<style scoped>
a.router-link-exact-active {
  color: var(--color-sky-700);
  text-decoration: underline;
  text-decoration-thickness: 3px;
}

.toggle-container {
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 50%;
}

.icon-placeholder {
  text-decoration: none;
  font-size: xx-large;
  border-radius: 50%;
  flex: 40px 0;
  margin-right: 1rem;
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
