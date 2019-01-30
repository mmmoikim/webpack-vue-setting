import Vue from 'vue'
import App from './App.vue'
import AppComponent from './components/AppComponent.vue'
new Vue({
    el: '#app',
    render: h => h(AppComponent)
})