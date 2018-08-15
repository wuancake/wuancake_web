<template>
  <div class="nav-list">
    <div class="user">
      <img src="/static/img/logo.png" alt="" class="uer-avator">
      <div class="user-info">
        <span>{{ user_info.user_name | dealText }}</span>
        <span>{{ user_info.group_name }}</span>
      </div>
    </div>
    <ul class="menu">
      <li :class="{ 'active': active === 1 }" @click="change(1)">
        <img src="/static/img/home.png" alt="">
        <span>首页</span>
      </li>
      <li :class="{ 'active': active === 2 }" @click="change(2)">
        <img src="/static/img/my.png" alt="">
        <span>我的周报</span>
      </li>
      <li :class="{ 'active': active === 3 }" @click="change(3)">
        <img src="/static/img/set.png" alt="">
        <span>我的账号</span>
      </li>
      <li :class="{ 'active': active === 4 }" @click="change(4)">
        <img src="/static/img/set.png" alt="">
        <span>退出登录</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'NavList',
  data () {
    return {
      active: 1
    }
  },
  computed: {
    ...mapState(['user_info'])
  },
  methods: {
    change (val) {
      switch (val) {
        case 1:
          this.active = val
          this.$router.push({ path: '/' })
          break
        case 2:
          if (this.user_info.group_id === 0) {
            this.$message({
              message: '请先选择分组再进行此操作！',
              type: 'warning'
            })
          } else {
            this.active = val
            this.$router.push({ path: '/weeklys' })
          }
          break
        case 3:
          if (this.user_info.group_id === 0) {
            this.$message({
              message: '请先选择分组再进行此操作！',
              type: 'warning'
            })
          } else {
            this.active = val
            this.$router.push({ path: '/exitGroup' })
          }
          break
        case 4:
          this.active = val
          this.logOutF()
          break
        default:
          this.active = val
          this.$router.push({ path: '/' })
          break
      }
    },
    logOutF () {
      this.logout()
      this.$message({
        message: '退出登录成功！',
        type: 'success'
      })
      this.$router.push({ path: '/log' })
    },
    ...mapMutations({
      logout: 'CLEAR'
    })
  },
  filters: {
    dealText (val) {
      return val.length > 6 ? `${val.slice(0, 6)}...` : val
    }
  }
}
</script>

<style scoped>
.nav-list {
  padding-top: 65px;
}
.user {
  display: flex;
  height: 72px;
  background: #00479b;
  align-items: center;
  padding: 0 16px;
}
.uer-avator {
  margin-right: 24px;
}
.user-info {
  display: flex;
  flex-direction: column;
  height: 50px;
  justify-content: space-between;
  color: white;
}
.user-info span:first-of-type {
  font-size: 18px;
}
.user-info span:last-of-type {
  font-size: 12px;
}
.menu {
  list-style: none;
  padding: 30px 0;
  margin: 0;
  color: white;
  font-size: 18px;
}
.menu li {
  height: 66px;
  box-sizing: border-box;
  padding-left: 41px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
}
.menu li:hover {
  background: rgba(255, 255,255, 0.2);
}
.active {
  background: rgba(255, 255,255, 0.2);
}
.active::after {
  content: '';
  display: block;
  width: 5px;
  height: 100%;
  border-radius: 2px;
  background: #006fdd;
  position: absolute;
  right: -8px;
}
.menu li > img {
  margin-right: 42px;
}
</style>
