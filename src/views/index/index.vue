<template>
  <div class="home home-container">
    <p>
      <span>本周第{{ nowWeekNumber }}周</span>
      <span>{{ weeklyStatusMessage }}</span>
    </p>
    <time></time>
    <button @click="toHelloWorld">go hello,world page</button>
  </div>
</template>

<script>
import nowWeek from '../../utils/nowWeek'
import { getWeeklyStatus } from '../../api'

export default {
  name: 'home',
  data () {
    return {
      message: 'this is homepage!',
      nowWeekNumber: null,
      weeklyStatus: 1
    }
  },
  computed: {
    weeklyStatusMessage: function () {
      let message = ''
      switch (this.weeklyStatus) {
        case 1:
          message = '未撰写周报'
          break
        case 2:
          message = '已提交周报'
          break
        case 3:
          message = '已请假'
          break
        default:
          message = '未撰写周报'
          break
      }
      return message
    }
  },
  mounted () {
    this.getWeekNumbers()
    this.getWeekly()
  },
  methods: {
    toHelloWorld () {
      this.$router.push({ path: '/helloworld' })
    },
    getWeekNumbers () {
      this.nowWeekNumber = nowWeek()
    },
    getWeekly () {
      getWeeklyStatus(1).then(res => {
        this.weeklyStatus = res.status
      })
    }
  }
}
</script>

<style scoped>
.home {
  color: #00479b;
  font-weight: bold;
  font-size: 18px;
}
.home p {
  margin-bottom: 36px;
}
.home p span:last-of-type {
  padding-left: 30px;
}
.home-container {
  padding: 96px 0 0 59px;
}
</style>
