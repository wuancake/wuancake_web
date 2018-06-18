<template>
  <div class="login">
    <el-form :model="formData" :rules="rules" ref="loginForm">
      <el-form-item prop="userName">
        <el-input type="text" v-model="formData.userName" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="email">
        <el-input type="text" v-model="formData.email" placeholder="电子邮箱"></el-input>
      </el-form-item>
      <el-form-item prop="QQ">
        <el-input type="text" v-model="formData.QQ" placeholder="QQ"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input :type="type" v-model="formData.password" placeholder="密码"></el-input>
        <span @click="change" class="iconView"><i class="el-icon-view"></i></span>
      </el-form-item>
      <el-form-item prop="passwordT">
        <el-input type="password" v-model="formData.passwordT" placeholder="确认密码"></el-input>
      </el-form-item>
    </el-form>
    <button @click="submit" class="submit">注册</button>
    <span @click="to" class="btn">已有账号？点此登录</span>
  </div>
</template>

<script>
import { login } from '../../api'
import { mapMutations } from 'vuex'

export default {
  name: 'Login',
  data () {
    var checkPassword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.formData.password) {
        callback(new Error('两次输入密码不一致'))
      } else {
        callback()
      }
    }
    return {
      type: 'password',
      formData: {
        userName: '',
        email: '',
        QQ: null,
        password: '',
        passwordT: ''
      },
      rules: {
        userName: [
          { required: true, message: '用户名不能为空', trigger: 'blur' }
        ],
        email: [
          { required: true, message: '邮箱为必填项', trigger: 'blur' }
        ],
        QQ: [
          { required: true, message: 'QQ 为必填项', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码为必填项', trigger: 'blur' }
        ],
        passwordT: [
          { validator: checkPassword, trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    submit () {
      this.$refs.loginForm.validate(val => {
        const { userName, email, QQ, password } = this.formData
        let params = {
          userName,
          email,
          QQ,
          password
        }
        if (val) {
          login(params).then(res => {
            if (res.infoCode === 200 || res.infoCode === '200') {
              this.$message({
                message: '恭喜你，注册成功！',
                type: 'success'
              })
              this.setUserInfo({
                user_id: res.userId,
                group_id: res.groupId,
                user_name: res.userName
              })
              this.$router.push({ path: '/group' })
            } else {
              this.$notify.error({
                title: '注册失败',
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
    to () {
      this.$router.push({ path: '/log' })
    },
    ...mapMutations({
      setUserInfo: 'SET_USER_INFO'
    })
  }
}
</script>

<style scoped>
.login{
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
