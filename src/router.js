import VueRouter from "vue-router";

const Home = () => import(/* webpackChunkName: "home" */ "$View/Home.vue");
const Detail = () =>
  import(/* webpackChunkName: "detail" */ "$View/Detail.vue");
const ProductList = () =>
  import(/* webpackChunkName: "product" */ "$View/ProductList.vue");
const ShoppingCart = () =>
  import(/* webpackChunkName: "cart" */ "$View/ShoppingCart.vue");
const Practice = () =>
  import(/* webpackChunkName: "practice" */ "$View/Practice.vue");

const router = new VueRouter({
  mode: "history",
  base: "/webpack-vue-setting/",
  routes: [
    {
      name: "home",
      path: "/",
      component: Home
    },
    {
      name: "detail",
      path: "/detail",
      component: Detail
    },
    {
      name: "product",
      path: "/product",
      component: ProductList
    },
    {
      name: "cart",
      path: "/cart",
      component: ShoppingCart
    },
    {
      name: "practice",
      path: "/practice",
      component: Practice
    }
  ]
});

export default router;
