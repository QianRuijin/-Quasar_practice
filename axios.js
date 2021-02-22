// src/boot/axios.js

import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios
// ^ ^ ^ 这将允许你使用$.axios
//       所以你不需要在每个vue文件中导入axios

// import axios from 'axios'
// import service from './contactApi'
// import { Toast } from 'vant'

// // service 循环遍历输出不同的请求方法
// let instance = axios.create({
//   baseURL: 'http://localhost:9000/api',
//   timeout: 1000,
// })
// const Http = {}; // 包裹请求方法的容器

// // 请求格式、参数 的统一
// for (let key in service) {
//   let api = service[key]; // url 和 method
//   console.log(api)
//   // async 作用：避免进入回调地狱
//   Http[key] = async function(params, isFormData = false, config = {}){
//     let newParams = {};
//     // content-type 是否是form-data的判断
//     if (params && isFormData){
//       newParams = new FormData();
//       for (let i in params) {
//         newParams.append(i, params[i]);
//       }
//     }else{
//       newParams = params;
//     }
//     // 不同请求的判断
//     let response = {}; // 请求返回值
//     if(api.method === 'put' || api.method === 'post' || api.method === 'patch') {
//       try{
//         response = await instance[api.method](api.url, newParams, config);
//       }catch(err) {
//         response = err;
//       }
//     }else if (api.method === 'delete' || api.method === 'get') {
//       config.params = newParams;
//       try{
//         response = await instance[api.method](api.url, config);
//       }catch(err) {
//         response = err;
//       }
//     }
//     return response;
//   }
// }

// // 拦截器的添加
// instance.interceptors.request.use(config => {
//   // 发起请求前做些什么
//   Toast.loading({
//     mask: false,
//     duration: 0,
//     forbidClick: true,
//     message: '加载中……'
//   })
//   return config;
// }, ()=> {
//   // 请求错误
//   Toast.clear()
//   Toast('请求错误，请稍后重试')
// })

// // 响应拦截器
// instance.interceptors.response.use(res => {
//   Toast.clear()
//   return res.data;
// }, () => {
//   Toast.clear()
//   Toast('请求错误，请稍后重试')
// })

// export default Http
