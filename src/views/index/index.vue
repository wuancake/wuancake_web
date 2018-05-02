<template>
  <div class="home home-container">
    <p>
      <span>本周第{{ nowWeekNumber }}周</span>
      <span>{{ weeklyStatusMessage }}</span>
    </p>
    <time v-if="weeklyStatus === 1">剩余{{ laveTime.lave_days | digitsToDouble }}天{{ laveTime.lave_hours | digitsToDouble }}时{{ laveTime.lave_minutes | digitsToDouble }}分{{ laveTime.lave_seconds | digitsToDouble }}秒</time>
    <span v-if="weeklyStatus === 2">周报已提交</span>
    <span v-if="weeklyStatus === 3">本周已请假</span>
    <span>{{ hint }}</span>
    <button @click="toHelloWorld">go hello,world page</button>
    <div class="btns">
      <button>撰写周报</button>
      <button>我的周报</button>
      <button>申请请假</button>
      <button>取消请假</button>
    </div>
  </div>
</template>

<script>
import nowWeek from '../../utils/nowWeek'
import { getWeeklyStatus } from '../../api'
import dealWithTime from '../../utils/dealWithTime'

export default {
  name: 'home',
  data () {
    return {
      message: 'this is homepage!',
      nowWeekNumber: null,
      weeklyStatus: 1,
      laveTime: {
        lave_days: 0,
        lave_hours: 0,
        lave_minutes: 0,
        lave_seconds: 0
      }
    }
  },
  filters: {
    digitsToDouble: (value) => {
      return value > 9 ? value : '0' + value
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
    },
    hint: function () {
      let message = ''
      switch (this.weeklyStatus) {
        case 1:
          message = '时间不多了，抓紧提交周报哟！'
          break
        case 2:
          message = '开始为下周计划做准备吧~'
          break
        case 3:
          message = '开始为下周计划做准备吧~'
          break
        default:
          message = '时间不多了，抓紧提交周报哟！'
          break
      }
      return message
    }
  },
  mounted () {
    this.getWeekNumbers()
    this.getWeekly()
    setInterval(() => {
      this.setTime()
    }, 1000)
  },
  destroyed () {},
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
    },
    setTime () {
      this.laveTime = dealWithTime()
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
