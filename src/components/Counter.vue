<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs, mapActions } from "pinia";
import { useCounterStore } from "../store/useCounter";

defineProps<{ msg: string }>()

const quant = ref(0);
const altName = ref('');

const counterStore = useCounterStore();
const { counter } = storeToRefs(counterStore);
// AL SER UN ESTADO REACTIVO, SE TIENE QUE ENVOLVER EN storeToRefs
const { add1, inc, res } = mapActions(useCounterStore, { add1: 'addOne', inc: 'increment', res: 'reset' });
// RENOMBRANDO ACCIONES PARA USO LOCAL EN COMPONENTE
const { addOne } = mapActions(useCounterStore, ['addOne']);
// SIN RENOMBRAR, DESTRUCTURANDO DE ARRAY

// function incrementFromInput() {
//   counterStore.$patch((state) => {
//     state.counter += quant.value;
//   });
// }

const incrementFromInput = () => {
  counterStore.$patch((state) => {
    state.counter += quant.value;
  });
}
// ALOJADO EN CONST EN LUGAR DE FUNCTION

function reset() {
  counterStore.$reset();
}

function recreateStore() {
  counterStore.$state = {
    counter: quant.value,
    name: altName.value
  };
}

counterStore.$subscribe((mutation, state) => {
  console.log('MUTATION: ', mutation);
  console.warn('STATE: ',  state);
});

</script>

<template>
  <h1>{{ msg }}</h1>
  <h3>Store: state.name ➡ 🔑 {{ counterStore.name }} 🔑</h3>
  <div class="counter">
    <h3>{{ counter }}</h3>
    <!-- <button type="button" @click="counterStore.increment(-1)">-1</button>
    <button type="button" @click="counterStore.addOne">+1</button> -->
    <button type="button" @click="inc(-1)">-1</button>
    <button type="button" @click="add1">+1</button>
    <!-- <button type="button" @click="addOne">+1</button> -->
    
    <div class="inputWrapper">
      <input type="number" v-model="quant">
      <button @click="incrementFromInput">ADD</button>
    </div>

    <button @click="reset">RESET STORE</button>
    <button @click="res">RESET STORE</button>
 
    <div class="inputWrapper">
      <input type="string" v-model="altName">
      <button @click="recreateStore">RECREATE STORE</button>
    </div>
  </div>
</template>

<style scoped>
div.inputWrapper {
  margin: 1rem;
}

input {
  padding: 0.3rem;
}

button {
  padding: 0.4rem;
  margin: 0.1rem;
  background-color: #414141;
  color: #dadada;
  border: none;
  border-radius: 2px;
}

</style>
