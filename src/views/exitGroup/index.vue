<template>
  <div class="exit-group">
    <div class="exit-group-content">
      <h1>你要知道，退出分组后：</h1>
      <p>除了分组信息被清空外，你的账号、周报数据会继续保留</p>
      <p>原来的账号依然可以直接用于登录，不过需要重新选择分组</p>
      <p>总之，欢迎回来</p>
      <p>还有，不要忘记退出相应QQ群哦</p>
    </div>
    <div class="exit-group-footer">
      <button class="exit-group-btn">我知道了，继续退出</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'exitGroup',
  data () {
    return {}
  }
}
</script>

<style scoped>
.exit-group {
  color: #183e96;
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
</style>
