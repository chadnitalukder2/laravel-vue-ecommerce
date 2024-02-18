//2nd->main.js-> component-helloworld

import {createStore} from "vuex";

const store = createStore( {
    state: {
       user: {
        token: '1233',
        data:{}
       }
    },
    getters: {},
    actions: {},
    mutations: {},
})

export default store;