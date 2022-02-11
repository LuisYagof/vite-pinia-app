<script setup lang="ts">

// $ npm i --save lodash
// $ npm i --save-dev @types/lodash

// import _ from 'lodash';
// IMPORTANDO EL PAQUETE ENTERO

import cloneDeep from 'lodash/cloneDeep';
// IMPORTANDO POR MÉTODO

function handleClick() {
  const nested: any = [
    {
      name: 'Section A',
      links: ['/section-A', '/section-C']
    },
    {
      name: 'Section B',
      links: ['/section-B', '/section-C']
    }
  ];

  // const copy = nested;
  // SHALLOW-COPY

  // const copy = [...nested];
  // DESTRUCTURING -> LOS CAMPOS ANIDADOS SE PASAN POR REFERENCIA -> NO FUNCIONA

  // const copy = _.cloneDeep(nested);
  // IMPORTANDO EL PAQUETE ENTERO

  const copy = cloneDeep(nested);

  copy[1].links[0] = '';

  console.log(nested)
  console.log(copy)

}

</script>

<template>
  <h3 @click="handleClick" class="rotated">The team</h3>
</template>

<style >
  .rotated {
    transform: rotate(-7deg)
  }

</style>