import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    type: null,
  },
  getters: {
    TYPE(state) {
      return state.type
    }
  },
  mutations: {
    CHANGE_TYPE(state, type) {
      state.type = type;
      console.log(state.type)
    }
  },
  actions: {
    changeType({commit}, type) {
      commit('CHANGE_TYPE', type)
    }
  }

});
