import { acceptHMRUpdate, defineStore } from "pinia";
import axios, { AxiosRequestConfig } from 'axios';
import { apiCall } from "../api/apiCall";

export const useCounterStore = defineStore("counterStore_1", {
  state: () => ({
    counter: 0,
    name: 'Luis',
    httpState: ''
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
    async callAPI(url: string) {
      const reqOps: AxiosRequestConfig<any> = {
        headers: {
          'Access-Control-Allow-Origin': '*/*'
        }
      }
      try {
        const fullResp = await axios.get(url, reqOps);
        const response = fullResp.data;
        this.httpState = (response && response.name) ? response.name : '';
      } catch (error) {
        throw error
      }
    },
    async apiMock() {
      try {
        const resp = await apiCall();
        this.httpState = resp;
      } catch (e) {
        console.error(e);
      }
    }
  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
}