import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home.vue";

Vue.use(Router);
const router =new Router({
    mode: "history",
    base: process.env.BASE_URL,
    routes:[
        {
            path: "/login",
            name: "login",
            component: function () {
                return import(/* webpackChunkName: "about" */ "@/views/login.vue");
            }

        },
        {
            path: "/home",
            name: "home",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: Home,
            children:[
                {
                    path:'/',
                    name:'welcome',
                    component: resolve => require(['../components/welcome.vue'], resolve),
                },{
                    path:'/memberadd',
                    name:'memberadd',
                    component:resolve=>require(['../components/memberadd.vue'],resolve)
                },{
                    path: '/chartanalyst',
                    name: 'chartanalyst',
                    component: resolve => require(['../components/chartanalyst.vue'], resolve)
                }, {
                    path: '/sparkline',
                    name: 'sparkline',
                    component: resolve => require(['../components/sparkline.vue'], resolve)
                },{
                    path:'/stockChart',
                    name:'stockChart',
                    component: resolve => require(['../components/stockChart.vue'],resolve)
                }
            ]
        },
    ]
})

export default router