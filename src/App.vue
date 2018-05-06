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
@import url('./common/styles');
html, body {
  height: 100%;
}
#app {
  height: 100%;
  min-height: 300px;
  background-image: url('/static/img/background.png');
  background-position: right top;
  background-repeat: no-repeat;
}
</style>
