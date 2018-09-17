const HelloWorld2 = () => import(/* webpackChunkName: "mHello" */'@/apps/m/pages/hello');

const routes = [
    { path: 'index', name: 'index', component: HelloWorld2 },
];

export default routes;
