<template>
  <div id="app">
    <main-title component-name="v-text-ellipsis" desc="vue文本溢出省略组件"></main-title>
    <component-page></component-page>
  </div>
</template>

<script>
import MainTitle from './components/main-title.vue'
import ComponentPage from './components/component-page.vue'

export default {
  name: 'app',
  components: {
    MainTitle,
    ComponentPage
  },
  data () {
    return {
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
