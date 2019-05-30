import VueRouter from 'vue-router'

import Home from 'View/Home.vue'
import ProductList from 'View/ProductList.vue'
import ShoppingCart from 'View/ShoppingCart.vue'
import Practice from 'View/Practice.vue'

const root = "/webpackFourProject"
const router = new VueRouter({
    mode: 'history',
    routes: [{
            name: 'home',
            path: `${root}/`,
            component: Home,
        },
        {
            name: 'product',
            path: `${root}/product`,
            component: ProductList,
        },
        {
            name: 'cart',
            path: `${root}/cart`,
            component: ShoppingCart,
        },
        {
            name: 'practice',
            path: `${root}/practice`,
            component: Practice,
        }
    ]
})

export default router