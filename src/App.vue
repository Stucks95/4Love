<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <h1>4 Love</h1>

    <div class="wrapper">
      <nav>
        <RouterLink to="/"> Home </RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/gallery">Gallery</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style></style>
