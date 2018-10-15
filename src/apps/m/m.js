// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import * as utils from '@/lib/utils';
import '@/lib/http';
import store from './store/index';
import App from './App';
import router from './router';

Vue.config.productionTip = false;
Vue.prototype.utils = utils;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
});
