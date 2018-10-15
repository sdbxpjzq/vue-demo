const HelloWorld2 = () => import(/* webpackChunkName: "wwwHello" */'@/apps/www/pages/hello');
const Upload = () => import(/* webpackChunkName: "wwwHello" */'@/apps/www/pages/upload');
const Demo1 = () => import(/* webpackChunkName: "Demo1" */'@/apps/www/pages/demo/1');

const routes = [
    { path: 'index', name: 'index', component: HelloWorld2 },
    { path: 'demo', name: 'demo', component: Demo1 },
    { path: 'upload', name: 'upload', component: Upload },
];

export default routes;
