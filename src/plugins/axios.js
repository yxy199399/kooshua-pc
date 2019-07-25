"use strict";

import axios from "axios";
import { Loading } from 'element-ui'

const APIMAP = {
  data: '/data1'
}

// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
  // baseURL: process.env.baseURL || process.env.apiUrl || "",
  baseURL: '/api',
  timeout: 2500, // Timeout
};

const _axios = axios.create(config);

//loading
let loadingInstance

_axios.interceptors.request.use(
  (config) =>  {
    // eslint-disable-next-line no-console
    console.log(process.env.VUE_APP_BASEURL)
    loadingInstance = Loading.service({
      text: '加载中...',
      background: 'rgba(255, 255, 255, 0.2)'
    })

    if(localStorage.getItem('token')){
      config.headers['Api-Access-Token'] = localStorage.getItem('token');
    }
    // Do something before request is sent
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  (res) => {
    if (loadingInstance) loadingInstance.close()
    //301 重新登录
    // Do something with response data
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//配置axios
let initApiConfig = (key) => {
  //返回请求路径
  let url = APIMAP[key];
  return url;
}

/***
 ** 暴露请求方法
***/
export default {
  get: (key, params) => {
    let url = initApiConfig(key);
    return _axios.get(url, {params: params});
  },

  post: (key, data) => {
    let url = initApiConfig(key, data);
    return axios.post(url, data);
  },

  put: (key, data) => {
    let url = initApiConfig(key, data);
    return axios.put(url, data);
  },

  delete: (key, params) => {
    let url = initApiConfig(key, params);
    return axios.delete(url, {params: params});
  },

  download: (key, params) => {
    let url = initApiConfig(key, params);
    return axios({
      url: url,
      params: params,
      method: 'GET',
      responseType: 'blob' // important
    });
  }
}
