<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { motion } from 'motion-v'
import infoJson from '../assets/db/info.json'
import { onMounted } from 'vue'
import VLazyImage from 'v-lazy-image';

interface Info {
  id: number
  nome: string
  cognome: string
  professione: string
  photo_names: string[]
}

const infoPeople: Info[] = []

function getImage(nome: string) {
  return new URL(`../assets/photo/${nome}`, import.meta.url).href
}

function getInfoPeople() {
  infoJson.forEach((info: Info) => {
    infoPeople.push({
      id: info.id,
      nome: info.nome,
      cognome: info.cognome,
      professione: info.professione,
      photo_names: info.photo_names,
    })
  })
}

getInfoPeople()

onMounted(() => {
  console.log('infoPeople', infoPeople)
})
</script>

<template>
  <motion.div
    class=""
    :initial="{ opacity: 0 }"
    :animate="{ opacity: 1 }"
    :transition="{
      duration: 2,
      scale: { scale: 1.05, transition: { duration: 0.5 } },
    }"
  >

    <!-- PHOTOs -->
    <div class="gallery-container px-4 py-6 rounded-lg bg-slate-100" >
      <h1 class="pb-6 text-2xl font-bold text-dark-600 justify-self-center">GALLERIA</h1>

        <div class="pb-6" v-for="info in infoPeople" :key="info.id">
          <div class="pb-4 img grid grid-cols-3 gap-4 justify-self-center"
          v-motion :initial="{ opacity: 0, y: 20 }" :visible="{ opacity: 1, y: 0 }" :variants="{ custom: { scale: 1.1 } }" :delay="200" :duration="1000">
            <v-lazy-image
              class="w-full max-w-50 rounded-lg shadow-lg hover:scale-95 transition-transform duration-300"
              :key="info.id"
              :src="getImage(info.photo_names[0])"
              alt="immagine dinamica"
            />
            <v-lazy-image
              class="w-full max-w-50 rounded-lg shadow-lg hover:scale-95 transition-transform duration-300"
              :key="info.id"
              :src="getImage(info.photo_names[1])"
              alt="immagine dinamica"
            />
            <v-lazy-image
              class="w-full max-w-50 rounded-lg shadow-lg hover:scale-95 transition-transform duration-300"
              :key="info.id"
              :src="getImage(info.photo_names[2])"
              alt="immagine dinamica"
            />
          </div>
          <div class="info contents bg-amber-500">
            <strong class="text-xl flex justify-center">{{ info.nome }} {{ info.cognome }}</strong>
            <span class="text-xl flex justify-center">{{ info.professione }}</span>
          </div>
      </div>
    </div>

  </motion.div>
</template>
