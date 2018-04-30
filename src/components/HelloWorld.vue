<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>test</h2>
    <button @click="testFetch">手动请求</button>
    <p>mock返回的模拟数据：{{ mockBackData }}</p>
  </div>
</template>

<script>
import { test, getGroupsInfo } from '../api'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      mockBackData: ''
    }
  },
  mounted () {
    this.testFetch()
    this.getGroups()
  },
  methods: {
    testFetch () {
      test().then(res => {
        console.log(res)
        this.mockBackData = this.mockBackData + ' ' + res.test
      })
    },
    getGroups () {
      getGroupsInfo().then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
