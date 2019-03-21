import Vue from 'vue'
import VueRouter from 'vue-router';

import App from 'View/App.vue'
import router from './config/router'
import store from './store'

Vue.use(VueRouter);

new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App),
})