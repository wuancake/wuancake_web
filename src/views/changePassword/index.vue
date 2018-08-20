<template>
  <div class="change-password">
    <el-form :model="formData" :rules="rules" ref="loginForm">
      <el-form-item prop="old">
        <el-input  type="password" v-model="formData.old" placeholder="原密码"></el-input>
      </el-form-item>
      <el-form-item prop="now">
        <el-input :type="types" v-model="formData.now" placeholder="新密码"></el-input>
        <span @click="change" class="yanjing"><icon-svg slot="suffix" name="biyanjing" ></icon-svg></span>
      </el-form-item>
      <el-form-item prop="again">
        <el-input type="password" v-model="formData.again" placeholder="确认密码"></el-input>
      </el-form-item>
      <button @click="submit" class="submit">修改</button>
    </el-form>
  </div>
</template>

<script>
import { updatePassword } from '../../api'
import { mapState } from 'vuex'
export default {
  name: 'changePassword',
  data () {
    var checkAgain = (rule, value, callback) => {
      if (value !== this.formData.now) {
        callback(new Error('新密码和确认密码不一致'))
      }
    }
    return {
      formData: {
        old: '',
        now: '',
        again: ''
      },
      rules: {
        old: [
          { required: true, message: '原密码不能为空', trigger: 'blur' }
        ],
        now: [
          { required: true, message: '新密码不能为空', trigger: 'blur' }
        ],
        again: [
          { required: true, message: '确认密码不能为空', trigger: 'blur' },
          { validator: checkAgain, trigger: 'blur' }
        ]
      },
      types: 'password'
    }
  },
  computed: {
    ...mapState([
      'user_info'
    ])
  },
  methods: {
    submit () {
      updatePassword({
        userId: this.user_info.user_id,
        password: this.formData.old,
        newPassword: this.formData.now,
        confirmPasswd: this.formData.again
      }).then(res => {
        if (res.infoCode === 200 || res.infoCode === '200') {
          this.$message({
            message: '密码修改成功！',
            type: 'success'
          })
        } else {
          this.$message({
            message: '密码修改失败！',
            type: 'error'
          })
        }
      })
    },
    change () {
      if (this.types === 'password') {
        this.types = 'text'
      } else {
        this.types = 'password'
      }
    }
  }
}
</script>

<style scoped>
  .yanjing{
    cursor:pointer;
    position: absolute;
    right: 0;
    top: 0;
  }
  .change-password{
    height: 100%;
    flex: 1;
    display: flex;
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
