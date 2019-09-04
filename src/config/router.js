import VueRouter from "vue-router";

const Home = () => import(/* webpackChunkName: "home" */ "View/Home.vue");
const ProductList = () =>
  import(/* webpackChunkName: "productlist" */ "View/ProductList.vue");
const ShoppingCart = () =>
  import(/* webpackChunkName: "shoppingcart" */ "View/ShoppingCart.vue");
const Practice = () =>
  import(/* webpackChunkName: "practive" */ "View/Practice.vue");

const root = "/webppack-vue-setting";
const router = new VueRouter({
  mode: "history",
  routes: [
    {
      name: "home",
      path: `${root}/`,
      component: Home
    },
    {
      name: "productList",
      path: `${root}/product`,
      component: ProductList
    },
    {
      name: "shoppingCart",
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
