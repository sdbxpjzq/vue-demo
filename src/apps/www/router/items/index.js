const HelloWorld2 = () => import(/* webpackChunkName: "wwwHello" */'@/apps/www/pages/hello');

const routes = [
    {
        path: 'index',
        name: 'index',
        component: HelloWorld2,
    },
];

export default routes;
