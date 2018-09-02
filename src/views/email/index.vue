<template>
  <div class="email">
    <div class="email-box">
      <input v-model="email" type="email" placeholder="注册时电子邮箱" @keyup.enter="submit" />
      <span @click="submit" class="icon"><icon-svg name="jiantou24" class="icon-svg"></icon-svg></span>
      <span><icon-svg name="xuanzeanniu" class="info-icon"></icon-svg>提交后，修改密码的地址将以邮件的方式发给您，请注意查收！</span>
    </div>
  </div>
</template>

<script>
import { recoverPassword } from '../../api'

export default {
  name: 'email',
  data () {
    return {
      email: ''
    }
  },
  methods: {
    submit () {
      recoverPassword({
        userid: 1,
        email: this.email
      }).then(res => {
        if (res.infoCode === 200) {
          this.$notify.success({
            title: '提交成功',
            message: '提交邮箱成功'
          })
          this.$router.push({ path: '/' })
        } else {
          this.$notify.error({
            title: '提交失败',
            message: res.infoText
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.email {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #00479b;
}
.email-box {
  display: flex;
  flex-direction: column;
  position: relative;
}
.email-box > input {
  border: 0;
  border-bottom: 1px solid #0565fe;
  padding: 14px 2px;
  padding-right: 35px;
  color: #00479b;
  outline: none;
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 80px;
}
.email-box > input::-webkit-input-placeholder {
  color: #00479b;
  font-weight: bold;
}
.icon {
  display: inline-block;
  width: 33px;
  height: 33px;
  background: #0565fe;
  text-align: center;
  line-height: 33px;
  position: absolute;
  right: 0;
  top: 13px;
  cursor: pointer;
}
.icon-svg {
  color: white;
  font-size: 20px;
}
.info-icon {
  margin-right: 20px;
}
</style>
