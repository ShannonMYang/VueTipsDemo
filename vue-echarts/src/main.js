/*
 * @Author: ShannonMYang
 * @Date: 2020-03-19 15:51:34
 * @LastEditTime: 2020-03-19 16:22:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-echarts\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 全局引入echarts；
import echarts from "echarts";
// 引入china.js/world.js 是为了使地图显示出来；
import "echarts/map/js/china.js"
import "echarts/map/js/world.js"
Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
