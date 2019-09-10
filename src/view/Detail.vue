<template>
  <h1 :class="$style.text">Detail</h1>
</template>

<script>
import style from "$Styles/detail.css";
export default {
  name: "Detail",
  created() {
    this.$style = style;
  }
};
</script>
