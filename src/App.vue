<script setup lang="ts">
import Navbar from './shared/Navbar.vue';

const emits = defineEmits(['catchevent']); // el nombre del evento no permite camelCase, PascalCase, kebab-case

const catchEmit = (emission: String) => {
  console.info(emission);
  // (DO STH WITH EMISSION)
}

</script>

<template>
  <Navbar />

  <router-view v-slot="{ Component, route }">
    <!-- <keep-alive> -->
      <component :is="Component" :key="route.name" @catchevent="catchEmit"/>
    <!-- </keep-alive> -->
  </router-view>
</template>

<style>
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
