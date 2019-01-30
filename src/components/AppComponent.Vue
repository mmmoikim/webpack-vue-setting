<template>
  <div class="red_text">{{ msg }}</div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'i am component'
    }
  }
}
</script>

<style>
.red_text {
  color: red;
}
</style>