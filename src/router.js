import VueRouter from "vue-router";

const Home = () => import(/* webpackChunkName: "home" */ "View/Home.vue");
const ProductList = () =>
  import(/* webpackChunkName: "product" */ "View/ProductList.vue");
const ShoppingCart = () =>
  import(/* webpackChunkName: "cart" */ "View/ShoppingCart.vue");
const Practice = () =>
  import(/* webpackChunkName: "practice" */ "View/Practice.vue");

const root = "/webpack-vue-setting";
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      name: "home",
      path: `${root}/`,
      component: Home
    },
    {
      name: "product",
      path: `${root}/product`,
      component: ProductList
    },
    {
      name: "cart",
      path: `${root}/cart`,
      component: ShoppingCart
    },
    {
      name: "practice",
      path: `${root}/practice`,
      component: Practice
    }
  ]
});

export default router;
