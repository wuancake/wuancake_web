<template>
  <div class="home home-container">
    <p>
      <span>本周第{{ nowWeekNumber }}周</span>
      <span>{{ weeklyStatusMessage }}</span>
    </p>
    <span>本周剩余时间</span>
    <time class="time-left" v-if="weeklyStatus === 1"><strong>{{ laveTime.lave_days | digitsToDouble }}</strong>天<strong>{{ laveTime.lave_hours | digitsToDouble }}</strong>时<strong>{{ laveTime.lave_minutes | digitsToDouble }}</strong>分<strong>{{ laveTime.lave_seconds | digitsToDouble }}</strong>秒</time>
    <span v-if="weeklyStatus === 2">周报已提交</span>
    <span v-if="weeklyStatus === 3">本周已请假</span>
    <span class="hint">{{ hint }}</span>
    <div class="btns">
      <button v-if="weeklyStatus === 1">撰写周报</button>
      <button v-if="weeklyStatus === 2 || weeklyStatus === 3">我的周报</button>
      <button class="btn-second" v-if="weeklyStatus === 1" @click="applyLeave">申请请假</button>
      <button  class="btn-second" @click="cancellationLeave" v-if="weeklyStatus === 3">取消请假</button>
    </div>
  </div>
</template>

<script>
import nowWeek from '../../utils/nowWeek'
import { getWeeklyStatus, cancelLeave } from '../../api'
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
    getWeekNumbers () { // 获取当前周数
      this.nowWeekNumber = nowWeek()
    },
    getWeekly () { // 获取周报状态
      getWeeklyStatus(1).then(res => {
        this.weeklyStatus = res.status
      })
    },
    setTime () { // 倒计时
      this.laveTime = dealWithTime()
    },
    cancellationLeave () {

    },
    applyLeave () { // 跳转到申请请假页面
      this.$router.push({ path: '/leave' })
    },
    cancel () { // 取消请假
      cancelLeave({
        userId: 1
      }).then(res => {
        if (res.infoCode === 200) {
          this.$notify.success({
            title: '取消成功',
            message: '取消请假成功'
          })
          this.getWeekly()
        } else {
          this.$notify.warning({
            title: '取消失败',
            message: `${res.infoText}，请稍后再试`
          })
        }
      }).catch(err => {
        console.log(err)
        this.$notify.success({
          title: '出现错误',
          message: '取消请假未成功，请稍后再试'
        })
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
  position: relative;
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
.time-left {
  position: absolute;
  top: 300px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 24px;
}
.time-left strong {
  font-size: 36px;
}
.hint {
  position: absolute;
  top: 403px;
  left: 125px;
}
.btns {
  position: absolute;
  left: 50%;
  bottom: 154px;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
}
.btn-second {
  margin-left: 84px;
  background: #fff;
  color: #289dff;
}
button {
  padding: 13px 59px;
  border-radius: 5px;
  border: 1px solid #289dff;
  background: #289dff;
  color: white;
}
</style>
