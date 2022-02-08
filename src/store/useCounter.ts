import { defineStore } from "pinia";

export const useCounterStore = defineStore("counterStore_1", {
  state: () => ({
    counter: 0,
    name: 'Luis'
  }),
  // state_B() {
  //   return {
  //     counter: 0,
  //     name: 'Luis'
  //   }
  // },
  getters: {
    doubleCount: (state) => {
      state.counter * 2
    },
    // doubleCount_B() {
    //   return (param: number) => this.counter * param
    // }
  },
  actions: {
    reset() {
      this.counter = 0;
    },
    addOne() {
      this.counter++;
    },
    increment(value: number) {
      this.counter += value;
    },
    async httpRequest(url: string) {
      const response = await fetch(url);
      //  do sth
    } 
  }
})