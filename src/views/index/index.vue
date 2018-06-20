<template>
  <div v-loading="loading" class="home home-container">
    <p>
      <span>本周第{{ nowWeekNumber }}周</span>
      <span>{{ weeklyStatusMessage }}</span>
    </p>
    <span v-if="user_info.state === 1">本周剩余时间</span>
    <time class="time-left" v-if="user_info.state === 1"><strong>{{ laveTime.lave_days | digitsToDouble }}</strong>天<strong>{{ laveTime.lave_hours | digitsToDouble }}</strong>时<strong>{{ laveTime.lave_minutes | digitsToDouble }}</strong>分<strong>{{ laveTime.lave_seconds | digitsToDouble }}</strong>秒</time>
    <span class="time-left" v-if="user_info.state === 2">周报已提交</span>
    <span class="time-left" v-if="user_info.state === 3">本周已请假</span>
    <span class="hint">{{ hint }}</span>
    <div class="btns">
      <button @click="goEdit" v-if="user_info.state === 1">撰写周报</button>
      <button @click="goWeeklys" v-if="user_info.state === 2 || user_info.state === 3">我的周报</button>
      <button class="btn-second" v-if="user_info.state === 1" @click="applyLeave">申请请假</button>
      <button  class="btn-second" @click="cancellationLeave" v-if="user_info.state === 3">取消请假</button>
    </div>
  </div>
</template>

<script>
import nowWeek from '../../utils/nowWeek'
import { getWeeklyStatus, cancelLeave } from '../../api'
import dealWithTime from '../../utils/dealWithTime'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'home',
  data () {
    return {
      message: 'this is homepage!',
      loading: false,
      nowWeekNumber: null,
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
      switch (this.user_info.state) {
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
      switch (this.user_info.state) {
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
    },
    ...mapState([
      'user_info'
    ])
  },
  mounted () {
    this.getWeekly()
    this.getWeekNumbers()
    setInterval(() => {
      this.setTime()
    }, 1000)
  },
  methods: {
    toHelloWorld () {
      this.$router.push({ path: '/helloworld' })
    },
    getWeekNumbers () { // 获取当前周数
      this.nowWeekNumber = nowWeek()
    },
    getWeekly () { // 获取周报状态
      this.loading = true
      getWeeklyStatus(this.user_info.user_id).then(res => {
        this.setState(res.status)
        this.loading = false
      })
    },
    setTime () { // 倒计时
      this.laveTime = dealWithTime()
    },
    cancellationLeave () {
      cancelLeave({
        userId: this.user_info.user_id,
        groupId: this.user_info.group_id
      }).then(res => {
        if (res.infoCode === 200) {
          this.setState(1)
        }
      })
    },
    applyLeave () { // 跳转到申请请假页面
      this.$router.push({ path: '/leave' })
    },
    goEdit () { // 跳转到撰写周报页面
      this.$router.push({ path: '/edit' })
    },
    cancel () { // 取消请假
      cancelLeave({
        userId: this.user_info.user_id
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
    },
    goWeeklys () {
      this.$router.push({ path: '/weeklys' })
    },
    ...mapMutations({
      setState: 'SET_STATE'
    })
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
  width: 100%;
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
  cursor: pointer;
}
</style>
