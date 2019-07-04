import VueRouter from 'vue-router'

const Home = () => import( /* webpackChunkName: "Home" */ 'View/Home.vue');
const ProductList = () => import( /* webpackChunkName: "ProductList" */ 'View/ProductList.vue');
const ShoppingCart = () => import( /* webpackChunkName: "ShoppingCart" */ 'View/ShoppingCart.vue');
const Practice = () => import( /* webpackChunkName: "Practice" */ 'View/Practice.vue');

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