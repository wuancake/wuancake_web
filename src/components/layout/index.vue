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
    this.setUserInfo()
  },
  methods: {
    ...mapActions(['setGroups', 'setUserInfo'])
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
  background-image: url('/static/img/background1.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
