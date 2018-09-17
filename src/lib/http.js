import Vue from 'vue';
import axios from 'axios';
import qs from 'qs';
import env from '@/lib/env';

// 超时
axios.defaults.timeout = 15000;
// 允许发送cookie
axios.defaults.withCredentials = true;
// 默认 请求域名
axios.defaults.baseURL = env.AJAX_BASEURL;
// 标记 XMLHttpRequest
// axios.defaults.headers = {'X-Requested-With': 'XMLHttpRequest'};

// 添加请求拦截器
axios.interceptors.request.use(config =>
    // 在发送请求之前做些什么
    config
    , error =>
    // 对请求错误做些什么
    Promise.reject(error),
);

// 添加响应拦截器
axios.interceptors.response.use(response =>
    // 对响应数据做点什么
    response
    , error =>
    // 对响应错误做点什么
    Promise.reject(error),
);

// 封装的
const http = {
    get(url, data = '') {
        return new Promise((resolve, reject) => {
            const a = { params: data };
            axios.get(url, a).then((response) => {
                resolve(response.data);
            }, (response) => {
                reject(response.data);
            });
        });
    },
    post(url, data = '') {
        return new Promise((resolve, reject) => {
            axios.post(url, qs.stringify(data)).then((response) => {
                resolve(response.data);
            }).catch((response) => {
                reject(response.data);
            });
        });
    },
};

Vue.prototype.$http = http;

export default http;
