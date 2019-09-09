<template>
  <div>
    <p>MENU</p>
    <router-link :to="{ name: 'home' }">HOME</router-link>
    <router-link :to="{ name: 'product' }">PRODUCT</router-link>
    <router-link :to="{ name: 'cart' }">CART</router-link>
    <router-link :to="{ name: 'practice' }">practice</router-link>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "menu",
  data: function() {
    return {};
  },
  mounted: function() {},
  methods: {}
};
</script>
