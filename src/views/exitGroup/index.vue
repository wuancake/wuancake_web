<template>
  <div class="exit-group">
    <div class="exit-main">
      <div class="exit-group-content">
        <h1>你要知道，退出分组后：</h1>
        <p>除了分组信息被清空外，你的账号、周报数据会继续保留</p>
        <p>原来的账号依然可直接用于登录，不过需要重新选择分组</p>
        <p>总之，欢迎回来</p>
        <p>还有，不要忘记退出相应QQ群哦</p>
      </div>
      <div class="exit-group-footer">
        <button @click="quit" class="exit-group-btn">我知道了，继续退出</button>
      </div>
    </div>
  </div>
</template>

<script>
import { quitGroup } from '../../api'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'exitGroup',
  data () {
    return {}
  },
  computed: {
    ...mapState([
      'user_info'
    ])
  },
  methods: {
    ...mapMutations({
      quitGroupF: 'QUIT_GROUP'
    }),
    quit () {
      quitGroup({
        id: this.user_info.user_id
      }).then(res => {
        if (res.infoCode === 200 || res.infoCode === '200') {
          this.$message({
            message: '退出分组成功！',
            type: 'success'
          })
          this.quitGroupF()
          this.$router.push({
            path: '/log'
          })
        } else {
          this.$message({
            message: '退出分组失败！',
            type: 'error'
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.exit-group {
  color: #183e96;
  display: flex;
  justify-content: center;
  align-items: center;
}
.exit-main {
  width: 490px;
}
.exit-group h1, .exit-group p {
  margin: 0;
}
.exit-group-content h1 {
  font-size: 22px;
  margin-bottom: 27px;
}
.exit-group-content p {
  font-size: 18px;
  line-height: 25px;
  margin-left: 40px;
}
.exit-group-content {
  margin-bottom: 142px;
}
.exit-group-footer {
  text-align: right;
}
.exit-group-footer > button {
  width: 220px;
  height: 30px;
  line-height: 1;
  border: 0;
  border-radius: 4px;
  background: #289dff;
  color: white;
  outline: none;
  cursor: pointer;
}
</style>
