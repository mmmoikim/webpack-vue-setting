<template>
  <h1 :class="$style.text">HOME</h1>
</template>

<script>
import style from "$Styles/home.css";
export default {
  name: "Home",
  created() {
    this.$style = style;
  }
};
</script>
