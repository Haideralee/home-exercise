import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    insuranceDetails: {
      name: "",
      age: "",
      country: "",
      currency: "",
      insurance: "",
      premium: 0,
    },
  },

  mutations: {
    setInsuranceDetails(state, insuranceDetails) {
      state.insuranceDetails = { ...insuranceDetails };
    },
    resetInsuranceDetails(state) {
      state.insuranceDetails = {
        name: "",
        age: "",
        country: "",
        currency: "",
        insurance: "",
        premium: 0,
      };
    },
  },

  actions: {
    updateInsuranceDetail({ commit }, payload) {
      commit("setInsuranceDetails", payload);
    },
    resetInsuranceDetails({ commit }) {
      commit("resetInsuranceDetails");
    },
  },

  getters: {
    insurance: (state) => state.insuranceDetails,
  },
});
