/*
 * @Descripttion: 
 * @version: 
 * @Author: jlunli
 * @Date: 2020-11-23 14:34:45
 * @LastEditors: jlunli
 * @LastEditTime: 2020-11-24 09:30:01
 */


import Vue from 'vue'
import Vuex from 'vuex'
import main from './modules/main';
Vue.use(Vuex)

const store = new Vuex.Store({
    
    modules:{
        main
    },
  state: {
    count: 0,
    test:"11"
  },
  getters: {
    donecount: state => {
      return state.count+10;
    }
  },
  mutations: {
    SET_INCREMENT (state,payload) {
      state.count+=payload.acount
    }
  },
  actions:{
    increment (context,payload) {
        context.commit('SET_INCREMENT',payload)
      }
  }
})
export default store;