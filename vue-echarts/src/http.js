/*
 * @Author: your name
 * @Date: 2020-04-01 15:58:30
 * @LastEditTime: 2020-04-02 16:59:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue-echarts\src\http.js
 */
// 如文件名叫http.js
import axios from 'axios'
import store from '@/store'

axios.defaults.withCredentials = true; // 让 ajax 携带 cookie

// 创建实例时设置配置的默认值
var instance = axios.create({
    timeout: 10000,
    headers: {
        'Accept': 'application/json, text/plain, */*;',
        'Access-Control-Allow-Origin': 'http://localhost:8080',
        'Access-Control-Allow-Credentials': true
    }
});

// 添加请求拦截器
instance.interceptors.request.use(function(config) {
    // 在发送请求之前做些什么
    /**
     1、比如添加token之类的请求头信息
     2、添加每次请求loading等
     */
    // 加载动画；
    store.state.isLoading = true;
    // store.commit('isLoading', true);
    return config;
}, function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function(response) {
    // 对响应数据做点什么
    /**
     1、集中处理响应数据（如错误码处理）
     */
    // 结束加载动画；
    store.state.isLoading = false;
    // store.commit('isLoading', false);
    return response.data;
}, function(error) {
    // 对响应错误做点什么
    // 错误提醒
    return Promise.reject(error);
});

export default instance