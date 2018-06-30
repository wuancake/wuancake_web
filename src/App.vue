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
  font-family: '微软雅黑';
}
#app {
  height: 100%;
  min-height: 300px;
}
</style>
