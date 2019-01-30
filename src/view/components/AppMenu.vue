<template>
  <div>
    <p>
      <router-link to="/detail">Go to Detail</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "AppMenu",
  data() {
    return {
      msg: 'Menu'
    }
  }
}
</script>

<style>
@import "~Styles/menu.css";
</style>