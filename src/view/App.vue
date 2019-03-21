<template>
  <div id="app">
    <router-link to="/">Go to HOME</router-link>
    <router-link to="/product">Go to product</router-link>
    <router-link to="/cart">Go to cart</router-link>
    <router-view></router-view>
    <!-- <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <ProductList />
    <hr>
    <ShoppingCart /> -->
  </div>
</template>

<script>
import ProductList from './ProductList.vue'
import ShoppingCart from './ShoppingCart.vue'
export default {
  components: { ProductList, ShoppingCart }
}
</script>