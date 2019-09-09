<template>
  <div id="app">
    <Menu />
    <router-view></router-view>
  </div>
</template>

<script>
import Menu from "View/Menu.vue";
export default {
  components: { Menu }
};
</script>
