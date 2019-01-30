<template>
  <div class="parent">
    {{ msg }}
    <app-component />
  </div>

</template>

<script>
import AppComponent from './components/AppComponent.vue'

export default {
  components: {
    'app-component': AppComponent
  },
  data() {
    return {
      msg: 'i am App'
    }
  }
}
</script>

<style>
.parent {
  color: blue;
}
</style>