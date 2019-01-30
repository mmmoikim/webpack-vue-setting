<template>
  <div>
    <app-menu />
    <router-view></router-view>
  </div>

</template>

<script>
import AppComponent from './components/AppComponent.vue'
import AppMenu from './components/AppMenu.vue'
import AppDetail from './components/AppDetail.vue'

export default {
  components: {
    'app-component': AppComponent,
    'app-menu': AppMenu,
    'app-detail': AppDetail
  },
  data() {
    return {
      msg: 'i am App'
    }
  }
}
</script>

<style>
</style>