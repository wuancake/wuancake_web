<template>
  <div class="log-in">
    <el-form :model="formData" :rules="rules" ref="loginForm">
      <el-form-item prop="email">
        <el-input type="text" v-model="formData.email" placeholder="电子邮箱"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input :type="type" v-model="formData.password" placeholder="密码"></el-input>
        <span @click="change" class="iconView"><i class="el-icon-view"></i></span>
      </el-form-item>
    </el-form>
    <button @click="submit" class="submit">登录</button>
    <span @click="to" class="btn">-> 注册</span>
  </div>
</template>

<script>
import { log } from '../../api'
import { mapMutations } from 'vuex'

export default {
  name: 'log',
  data () {
    return {
      type: 'password',
      formData: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          { required: true, message: '邮箱不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    to () {
      this.$router.push({ path: '/login' })
    },
    submit () {
      this.$refs.loginForm.validate(val => {
        if (val) {
          log(this.formData).then(res => {
            if (res.infoCode === 200 || res.infoCode === '200') {
              this.$message({
                message: '恭喜你，登录成功！',
                type: 'success'
              })
              if (res.groupId === 0) {
                this.setUserInfo({
                  user_id: res.userId,
                  group_id: res.groupId
                })
                this.$router.push({ path: '/group' })
              } else {
                this.setUserInfo({
                  user_id: res.userId,
                  group_id: res.groupId,
                  user_name: res.userName,
                  group_name: res.groupName
                })
                this.$router.push({ path: '/' })
              }
            } else {
              this.$notify.error({
                title: '登录失败',
                message: res.infoText
              })
            }
          })
        } else {
          this.$message({
            message: '不能提交！请检查表单后重试！',
            type: 'warning'
          })
        }
      })
    },
    change () {
      if (this.type === 'password') {
        this.type = 'text'
      } else {
        this.type = 'password'
      }
    },
    ...mapMutations({
      setUserInfo: 'SET_USER_INFO'
    })
  }
}
</script>

<style scoped>
.log-in{
  display: flex;
  height: 100%;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('/static/img/background.png');
  background-repeat: no-repeat;
  background-size: cover;
}
.submit {
  color: #0565fe;
  font-size: 20px;
  padding: 10px 100px;
  background: transparent;
  border: 1px solid #0565fe;
  cursor: pointer;
  margin: 21px 0;
}
.submit:hover {
  box-shadow: 1px 1px 4px 1px rgb(192, 191, 191);
}
.btn {
  color: #0565fe;
  cursor: pointer;
  font-size: 14px;
}
.btn:hover {
  text-shadow: 0 0 4px #ddd;
}
.iconView {
  position: absolute;
  top: 0;
  right: 10px;
  cursor: pointer;
  color: #0565fe;
}
</style>
