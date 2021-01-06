import Vue from 'vue'
import App from './App.vue'
import VTextEllipsis from '../../src'

Vue.use(VTextEllipsis)

new Vue({
  el: '#app',
  render: h => h(App)
})
