<script setup lang="ts">
import { ref } from 'vue'
import { storeToRefs, mapActions } from "pinia";
import { useCounterStore } from "../store/useCounter";

// defineProps<{ msg: string }>()
// (PURE TYPE-SYNTAX)

const emits = defineEmits<{(event: 'catchevent', param: String): void}>();
// (PURE TYPE-SYNTAX)

const props = defineProps({
  msg: {
    type: String,
    required: false
  },
  id: {
    type: Number,
    required: false
  }
})

// const emits = defineEmits(['catchevent']);

const quant = ref(0);
const altName = ref('');

const counterStore = useCounterStore();
const { counter } = storeToRefs(counterStore);
// AL SER UN ESTADO REACTIVO, SE TIENE QUE ENVOLVER EN storeToRefs

const { add1, inc, res } = mapActions(useCounterStore, { add1: 'addOne', inc: 'increment', res: 'reset' });
// RENOMBRANDO ACCIONES PARA USO LOCAL EN COMPONENTE

// const { addOne } = mapActions(useCounterStore, ['addOne']);
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
} // ( RESET STORE (A) )

function recreateStore() {
  counterStore.$state = {
    counter: quant.value,
    name: altName.value
  };
}

function handleEmission() {
  emits('catchevent', altName.value)
} // ( EMIT (B) )

counterStore.$subscribe((mutation, state) => {
  console.log('MUTATION: ', mutation);
  console.info('STATE: ', state);
});

</script>

<template>
  <h1>{{ msg }}</h1>
  <h3>Store: state.name ➡ 🔑 {{ counterStore.name }} 🔑</h3>
  <div class="counter">
    <h3>{{ counter }}</h3>

    <!-- <button type="button" @click="counterStore.increment(-1)">-1</button>
    <button type="button" @click="counterStore.addOne">+1</button> -->
    <!-- SIN DESESTRUCTURAR ACCIONES-->

    <button type="button" @click="inc(-1)">-1</button>
    <button type="button" @click="add1">+1</button>

    <!-- <button type="button" @click="addOne">+1</button> -->
    <!-- SIN RENOMBRAR ACCIONES -->
    
    <div class="inputWrapper">
      <input type="number" v-model="quant">
      <button @click="incrementFromInput">ADD</button>
    </div>

    <button @click="reset">RESET STORE (A)</button>
    <button @click="res">RESET STORE (B)</button>
 
    <div class="inputWrapper">
      <input type="string" v-model="altName">
      <button @click="recreateStore">RECREATE STORE</button>
    </div>

    <button @click="$emit('catchevent', altName)" >EMIT (A)</button>
    <button @click="handleEmission" >EMIT (B)</button>
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
  font-family: monospace;
}

</style>
