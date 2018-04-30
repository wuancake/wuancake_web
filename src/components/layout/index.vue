<template>
  <div class="layout">
    <nav-list class="nav"></nav-list>
    <router-view />
  </div>
</template>

<script>
import NavList from './NavList'

export default {
  name: 'Layout',
  components: {
    'nav-list': NavList
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
.layout {
  display: flex;
  height: 100%;
  width: 100%;
}
.nav {
  width: 266px;
  background: #006fdd;
}
</style>
