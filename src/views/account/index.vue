<template>
  <div class="set-group">
    <div class="set-group-content">
      <p>
        <label>昵称: </label>
        <input v-model="nickName" type="text" :placeholder="user_info.user_name"/>
      </p>
      <p>
        <label>邮箱：</label>
        <span>{{ user_info.email }}</span>
        <!-- <span>1412759770@qq.com</span> -->
      </p>
      <p>
        <label>分组：</label>
        <span>{{ user_info.group_name }}</span>
      </p>
      <p>
      <label>密码：</label>
      <button @click="changePassword">修改</button>
      </p>
      <p class="right-button" @click="changeInfo"><button>更改设置</button></p>
      <p @click="exit" class="exit">>>退出分组</p>
    </div>
  </div>
</template>

<script>
import { changeNickName } from '../../api'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'account',
  data () {
    return {
      nickName: ''
    }
  },
  computed: {
    ...mapState(['user_info'])
  },
  methods: {
    ...mapMutations({
      setUserInfo: 'SET_USER_INFO'
    }),
    exit () {
      this.$router.push({ path: '/exitGroup' })
    },
    changePassword () {
      this.$router.push({ path: '/changePassword' })
    },
    changeInfo () {
      changeNickName({
        userid: this.user_info.user_id,
        userName: this.nickName
      }).then(res => {
        if (res.infoCode === '200' || res.infoCode === 200) {
          this.$notify.success({
            title: '设置成功',
            message: '设置个人信息成功'
          })
          this.setUserInfo({
            user_name: this.nickName
          })
          this.$router.push({ path: '/' })
        } else {
          this.$notify.error({
            title: '设置失败',
            message: res.infoText
          })
        }
      })
    }
  }
}
</script>

<style scoped>
.set-group {
  display: flex;
  justify-content: center;
}

.set-group-content {
  margin-top: 20%;
  /* border: 1px solid red; */
  width: 50%;
}
.set-group-content button {
  border: none;
  background: #0565fe;
  color: #fff;
  font-size: 14px;
}
.set-group-content .exit {
  text-align: right;
  color: red;
  font-size: 14px;
  margin-top: 10%;
}
.set-group-content .exit:hover {
  color:#0565fe;
}
.set-group-content .right-button {
  font-size: 14px;
  margin-left: 17%;
  margin-top: 5%;
}
</style>
