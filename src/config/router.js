import Detail from 'View/components/AppDetail.vue'

const routes = [{
    path: '/detail',
    component: Detail
}];

import VueRouter from 'vue-router'
const router = new VueRouter({
    mode: 'history',
    routes: routes
})

export default router