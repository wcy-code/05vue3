import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sex:"",
    hobbies:[],
    xingxi:""
  },
  mutations: {
    addsex(state,sex){
      state.sex=sex;
    },
      addhobbies(state,hobbies){
          state.hobbies=hobbies;
      },
      addxingxi(state,xingxi){
          state.xingxi=xingxi;
      },
  },
  actions: {
  },
  modules: {
  }
})
