import { defineStore } from "pinia";

export const useCounterStore = defineStore({
  id: "home",
  state: () => [
    {
      MsgImg: "",
      MsgName: "",
      MsgCompany: "",
    },
  ],
  getters: {},
  actions: {},
});
