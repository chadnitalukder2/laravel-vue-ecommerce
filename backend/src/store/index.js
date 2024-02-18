//2nd->main.js-> component-helloworld

import {createStore} from "vuex";

const store = createStore( {
    state: {
       user: {
        token: '',
        data:{}
       }
    },
    getters: {},
    actions: {},
    mutations: {},
})

export default store;