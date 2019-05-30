<template>
  <div id="app">
    <router-link :to="{name :'home'}">HOME</router-link>
    <router-link :to="{name :'product'}">PRODUCT</router-link>
    <router-link :to="{name :'cart'}">CART</router-link>
    <router-link :to="{name :'practice'}">practice</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import ProductList from './ProductList.vue'
import ShoppingCart from './ShoppingCart.vue'
export default {
  components: { ProductList, ShoppingCart }
}
</script>