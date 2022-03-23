import { createStore } from "vuex";

const store = createStore({
  state: {
    selected: {},
  },
  mutations: {
    updateSelected(state, payload) {
      state.selected[payload] = !state.selected[payload];
    },
  },
});

export default store;
