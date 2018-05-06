<template>
  <div class="leave leave-container">
    <p>请假申请</p>
    <div class="leave-main">
      <div class="leave-main-info">
        <span class="leave-main-label">{{ groups[group_id].group_name }}</span>
        <span>{{ user_info.user_name }}</span>
        <span>请假状态</span>
        <span>未请假</span>
      </div>
      <div class="leave-main-select">
        <span class="leave-main-label">请假周数</span>
        <span @click="selectWeek(1)" class="btn-item" :class="{ 'active': selectWeeks === 1 }">一 周</span>
        <span @click="selectWeek(2)" class="btn-item" :class="{ 'active': selectWeeks === 2 }">二 周</span>
        <span @click="selectWeek(3)" class="btn-item" :class="{ 'active': selectWeeks === 3 }">三 周</span>
      </div>
      <div class="leave-main-textarea">
        <span class="leave-main-label">请假理由（必填）</span>
        <textarea class="leave-main-text" v-model="content" placeholder="请假理由不得少于35个字..."></textarea>
      </div>
    </div>
    <button class="leave-btn" @click="submit">提交请假申请</button>
  </div>
</template>

<script>
import { applyLeave } from '../../api'
import { mapState } from 'vuex'

export default {
  name: 'Leave',
  data () {
    return {
      selectWeeks: 0,
      content: ''
    }
  },
  computed: {
    ...mapState([
      'groups',
      'user_info',
      'group_id'
    ])
  },
  methods: {
    selectWeek (val) {
      this.selectWeeks = val
    },
    submit () {
      if (this.selectWeeks === 0) {
        this.$message({
          message: '请选择请假周数',
          type: 'warning'
        })
        return
      }
      if (this.content.length < 35) {
        this.$message({
          message: '请假理由不得少于35个字',
          type: 'warning'
        })
        return
      }
      applyLeave({
        userId: 1,
        week_num: this.selectWeeks,
        reason: this.content
      }).then(res => {
        if (res.infoCode === 200) {
          this.$notify.success({
            title: '申请成功',
            message: '申请请假成功'
          })
          this.$router.push({ path: '/' })
        } else {
          this.$notify.warning({
            title: '申请失败',
            message: `${res.infoText}，请稍后再试`
          })
        }
      }).catch(err => {
        console.log(err)
        this.$notify.error({
          title: '出现错误',
          message: '申请请假未能成功，请稍后再试'
        })
      })
    }
  }
}
</script>

<style scoped>
.leave {
  color: #00479b;
  font-size: 18px;
  position: relative;
  display: flex;
  flex-direction: column;
}
.leave > p {
  margin: 0;
}
.leave-container {
  padding: 96px 100px 0 59px;
}
.leave-main {
  padding: 40px 36px 86px 36px;
}
.leave-main-info {
  margin-bottom: 25px;
}
.leave-main-info > span{
  margin-right: 40px;
}
.leave-main-info span:nth-of-type(1) {
  margin-right: 0;
}
.leave-main-info span:nth-of-type(2) {
  margin-right: 200px;
}
.leave-main-label {
  display: inline-block;
  width: 150px;
  text-align: left;
}
.leave-main-select {
  margin-bottom: 25px;
}
.btn-item {
  border: 1px solid #289dff;
  padding: 3px 10px;
  border-radius: 5px;
  color: #289dff;
  font-size: 14px;
  margin-right: 50px;
  cursor: pointer;
}
.leave-main-textarea {
  display: flex;
  flex-direction: column;
}
.leave-main-text {
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  resize: none;
  height: 140px;
  border: 1px solid #7fa3cd;
  border-radius: 2px;
  margin-top: 15px;
  color: #00479b;
  outline: none;
}
.leave-main-text::-webkit-input-placeholder {
  color: #00479b;
}
.active {
  background: #289dff;
  color: #fff;
}
.leave-btn {
  align-self: center;
  padding: 13px 59px;
  border-radius: 5px;
  border: 1px solid #289dff;
  background: #289dff;
  color: white;
  cursor: pointer;
}
</style>
