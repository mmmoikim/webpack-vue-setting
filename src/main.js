import Vue from 'vue'
import VueRouter from 'vue-router';

import App from 'View/App.vue'
import router from './config/router'

Vue.use(VueRouter);

new Vue({
    el: '#app',
    render: h => h(App),
    router
})