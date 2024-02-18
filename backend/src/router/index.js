 //main.js->views->component

import {createRouter, createWebHistory} from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import RequestPassword from "../views/RequestPassword.vue";
import ResetPassword from "../views/ResetPassword.vue"

const routes = [
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/RequestPassword',
        name: 'RequestPassword',
        component: RequestPassword
    },
    {
        path: '/ResetPassword',
        name: 'ResetPassword',
        component: ResetPassword
    },
];
const router = createRouter( {   
    history: createWebHistory(), //domain.com#/users 
    routes
})

export default router;