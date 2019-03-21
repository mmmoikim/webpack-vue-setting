import VueRouter from 'vue-router'

import Home from 'View/Home.vue'
import ProductList from 'View/ProductList.vue'
import ShoppingCart from 'View/ShoppingCart.vue'

const router = new VueRouter({
    mode: 'history',
    routes: [{
            name: 'home',
            path: '/',
            component: Home,
        },
        {
            name: 'product',
            path: '/product',
            component: ProductList,
        },
        {
            name: 'cart',
            path: '/cart',
            component: ShoppingCart,
        }
    ]
})

export default router