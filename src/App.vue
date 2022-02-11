<script setup lang="ts">
import Navbar from './shared/wrapper/Navbar.vue';
import Sidebar from './shared/wrapper/Sidebar.vue';

const emits = defineEmits(['catchevent']); // el nombre del evento no permite camelCase, PascalCase, kebab-case

const catchEmit = (emission: string) => {
  console.info(emission);
  // (DO STH WITH EMISSION)
}

</script>

<template>
  <Navbar />
  <Sidebar />

  <router-view v-slot="{ Component, route }">
    <!-- <keep-alive> -->
    <component :is="Component" :key="route.name" @catchevent="catchEmit" />
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
}
</style>
