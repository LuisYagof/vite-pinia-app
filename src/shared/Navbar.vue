<script setup lang="ts">
// import router from '../router/router';
// SE PUEDE IMPORTAR ESTO EN LUGAR DE useRouter aparentemente

import { computed, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router'

const router = useRouter();

const navigateTo = () => {
  router.push({name: 'counter', query: {id: 2} })
}

const getClassActive = (param: any) => {
  return param ? 'is-active' : 'is-inactive'
}

// const getClassActive = computed((param: any) => {
//   return param ? 'is-active' : 'is-inactive'
// });

// onMounted(getClassActive());

// return {
//   getClassActive
// }

</script>

<template>
  
  <!-- <a @click="navigateTo">Counter</a> | -->
  <!-- <router-link to="/counter">Counter</router-link> |
  <router-link to="about">About</router-link> |
  <router-link to="/about/team">Team</router-link> -->

  <!-- <router-link :to="{name: 'counter'}">Counter</router-link> |
  <router-link :to="{name: 'about'}">About</router-link> |
  <router-link :to="{name: 'team'}">Team</router-link> -->

  <router-link :to="{name: 'counter', query: {id: 3}}" v-slot="{isActive, isExactActive}">
    <a :class="getClassActive(isExactActive)">Counter</a>
  </router-link> |
  <router-link :to="{name: 'about'}" v-slot="{isActive, isExactActive}">
    <a :class="isExactActive ? 'is-active' : 'is-inactive' ">About</a>
  </router-link> |
  <router-link :to="{name: 'team'}" v-slot="{isActive, isExactActive}">
    <a :class="isExactActive ? 'is-active' : 'is-inactive' ">Team</a>
  </router-link>

</template>

<style scoped>

  /* a, router-link {
    color: #2c5038;
    text-decoration: none;
    cursor: pointer;
  }

  a.router-link-exact-active {
    color: #4e8a76;
    text-decoration: underline;
  } */


  a, a.is-inactive {
    color: #2c5038;
    text-decoration: none;
    cursor: pointer;
  }

  a.is-active {
    color: #4e8a76;
    text-decoration: underline;
  }

</style>