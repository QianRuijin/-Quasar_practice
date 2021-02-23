// src/boot/axios.js

import Vue from 'vue'
import axios from 'axios'

Vue.prototype.$axios = axios
// ^ ^ ^ 这将允许你使用$.axios
//       所以你不需要在每个vue文件中导入axios

// axios.defaults.baseURL = 'http://123.57.233.107:80';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// export function register ({commit}, form) {
//   return axios.post('api/auth/register', form)
//     .then(response => {
//       commit('login', {token: response.data.token, user: response.data.user})
//       setAxiosHeaders(response.data.token)
//     })
// }

// function setAxiosHeaders (token) {
//   axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
// }