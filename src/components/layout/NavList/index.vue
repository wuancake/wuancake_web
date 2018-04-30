<template>
  <div class="nav-list">
    <div class="user">
      <img src="" alt="" class="uer-avator">
      <div class="user-info">
        <span>二马</span>
        <span>产品经理组</span>
      </div>
    </div>
    <ul class="menu">
      <li>首页</li>
      <li>我的周报</li>
      <li>退出登录</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavList',
  data () {
    return {}
  }
}
</script>

<style scoped>
.user {
  display: flex;
}
.uer-avator {
  display: block;
  width: 63px;
  height: 50px;
}
.user-info {
  display: flex;
  flex-direction: column;
}
</style>
