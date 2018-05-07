<template>
  <div>
    <el-form :model="formData" :rules="rules">
      <el-form-item prop="old">
        <el-input type="password" v-model="formData.old" placeholder="原密码"></el-input>
      </el-form-item>
      <el-form-item prop="now">
        <el-input :type="types" v-model="formData.now" placeholder="新密码">
          <icon-svg slot="suffix" name="biyanjing"></icon-svg>
        </el-input>
      </el-form-item>
      <el-form-item prop="again">
        <el-input type="password" v-model="formData.again" placeholder="确认密码"></el-input>
      </el-form-item>
      <button @click="submit">提交</button>
    </el-form>
  </div>
</template>

<script>
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
  methods: {
    submit () {}
  }
}
</script>

<style scoped>

</style>
