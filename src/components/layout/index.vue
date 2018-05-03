<template>
  <div class="layout">
    <nav-list class="nav"></nav-list>
    <router-view class="main" />
  </div>
</template>

<script>
import NavList from './NavList'
import { mapActions } from 'vuex'

export default {
  name: 'Layout',
  components: {
    'nav-list': NavList
  },
  data () {
    return {}
  },
  mounted () {
    this.setGroups()
  },
  methods: {
    ...mapActions(['setGroups'])
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
.main {
  flex: 1;
}
</style>
