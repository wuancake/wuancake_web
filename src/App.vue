<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Home from './views/index'
export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
html, body {
  height: 100%;
}
#app {
  height: 100%;
}
</style>
