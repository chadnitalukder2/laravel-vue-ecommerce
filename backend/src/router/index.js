 //main.js->views->component

import {createRouter, createWebHistory} from "vue-router";
import AppLayout from '../components/AppLayout.vue';
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";
import RequestPassword from "../views/RequestPassword.vue";
import ResetPassword from "../views/ResetPassword.vue";
import Products from "../views/Products.vue";

import store from "../store";

const routes = [
    {
        path: '/app',
        name: 'app',
        component: AppLayout,
        meta: {
          requiresAuth: true
        },
        children: [
            {
                path: '/dashboard',
                name: 'app.dashboard',
                component: Dashboard
            },
          {
            path: 'products',
            name: 'app.products',
            component: Products
          }
        ]
      },
    // ==========================
  
    {
        path: '/login',
        name: 'login',
        component: Login,
        meta: {
            requiresGuest: true
          }
    },
    {
        path: '/RequestPassword',
        name: 'RequestPassword',
        component: RequestPassword,
        meta: {
            requiresGuest: true
          }
    },
    {
        path: '/ResetPassword',
        name: 'ResetPassword',
        component: ResetPassword,
        meta: {
            requiresGuest: true
          }
    },
];
const router = createRouter( {   
    history: createWebHistory(), //domain.com#/users 
    routes
})


router.beforeEach((to, from, next) => {
    console.log(to);
    if (to.meta.requiresAuth && !store.state.user.token) {
      next({name: 'login'})
    } else if (to.meta.requiresGuest && store.state.user.token) {
      next({name: 'app.dashboard'})
    } else {
      next();
    }
  
  })

export default router;