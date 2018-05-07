<template>
  <div class="email">
    <div class="email-box">
      <input type="email" placeholder="注册时电子邮箱" />
      <span>提交后，修改密码的地址将以邮件的方式发给您，请注意查收！</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'email',
  data () {
    return {}
  }
}
</script>

<style scoped>
.email {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.email-box {
  display: flex;
  flex-direction: column;
}
</style>
