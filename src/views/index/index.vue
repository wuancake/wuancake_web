<template>
  <div class="home">
    <h1>home page</h1>
    <button @click="toHelloWorld">go hello,world page</button>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      message: 'this is homepage!'
    }
  },
  methods: {
    toHelloWorld () {
      this.$router.push({ path: '/helloworld' })
    }
  }
}
</script>

<style scoped>
.home {
  color: #aaa;
  font-weight: bold;
}
</style>
