import Vue from 'vue';
import Router from 'vue-router';
import * as utils from '@/lib/utils';
import Routers from './items/index';

Vue.prototype.$utils = utils;

// todo 应该放到vuex
window.Env = { ...window.Env,
    ...{
        routerMode2: utils.routerMode(),
    } };

const Index = () => import('@/apps/www/Index');
const Page404 = () => import(/* webpackChunkName: "page404" */'@/components/404');


Vue.use(Router);

export default new Router({
    mode: window.Env.routerMode2,
    routes: [
        {

            path: '/www',
            name: 'www',
            component: Index,
            children: [
                ...Routers,
                {
                    path: '*',
                    name: 'page4041',
                    component: Page404,
                },
            ],
        },
        {
            path: '*',
            name: 'page4042',
            component: Page404,
        },
    ],
});
