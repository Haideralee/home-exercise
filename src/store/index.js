import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    insuranceDetail: {
      name: "",
      age: "",
      country: "",
      currency: "",
      insurance: "",
      premium: 0,
    },
  },

  mutations: {
    setInsuranceDetail(state, insuranceDetail) {
      state.insuranceDetail = { ...insuranceDetail };
    },
    resetInsuranceDetail(state) {
      state.insuranceDetail = {
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
      commit("setInsuranceDetail", payload);
    },
    resetInsuranceDetail({ commit }) {
      commit("resetInsuranceDetail");
    },
  },

  getters: {
    insurance: (state) => state.insuranceDetail,
  },
});
