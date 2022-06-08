import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "home",
  state: () => [
    {
      panelImg: "",
    },
  ],
  getters: {},
  actions: {},
});
