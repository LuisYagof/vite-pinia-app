<template>
  <div class="sidebar-bg">
    <p
      class="sidebar-link"
      v-for="section in sections"
      :key="section.link"
      @click="mockReq"
    >{{ section.name }}</p>
    <!-- @click="handleClickLink(section.link)" -->
    <!-- @click="counterStore.apiMock" -->

    <p
      class="sidebar-link"
      v-for="section in sections"
      :key="section.link"
      @click="handleClickLink()"
    >{{ section.name }}</p>
    <!-- @click="counterStore.callAPI('https://run.mocky.io/v3/7a7a924f-72dd-4cd7-aefa-12be3608e839')" -->
  </div>
</template>

<script setup lang="ts">
import { mapActions } from "pinia";
import { useCounterStore } from "../../store/useCounter"

const counterStore = useCounterStore();
const { mockReq } = mapActions(useCounterStore, { mockReq: 'apiMock' });

const sections: any[] = [
  {
    name: 'Section A',
    link: '/section-A'
  },
  {
    name: 'Section B',
    link: '/section-B'
  },
  {
    name: 'Section C',
    link: '/section-C'
  },
  {
    name: 'Section D',
    link: '/section-D'
  },
  {
    name: 'Section E',
    link: '/section-E'
  },
]

async function handleClickLink(link: string = '') {
  const url = 'https://run.mocky.io/v3/7a7a924f-72dd-4cd7-aefa-12be3608e839';
  counterStore.callAPI(url);
}

</script>


<style scoped>
div.sidebar-bg {
  background-color: lightgray;
  height: 100vh;
  position: absolute;
  width: 12vw;
}
p.sidebar-link {
  cursor: pointer;
  font-size: 1rem;
  line-height: 2rem;
}
</style>