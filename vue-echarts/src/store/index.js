/*
 * @Author: your name
 * @Date: 2020-03-19 18:15:28
 * @LastEditTime: 2020-04-02 16:53:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-echarts\src\store\index.js
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
  },
  getters: {
    isLoading: state => state.isLoading,
  },
  mutations: {
    isLoading(state, isOrNo) {
      state.isLoading = isOrNo;
    }
  },
  actions: {
    showOrClose({ commit }, isOrNo) {
      commit('isLoading');
    }
  },
  modules: {
  }
})
