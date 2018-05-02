<template>
  <div class="leave">
    <p>请假申请</p>
    <div class="leave-main">
      <div>
        <span></span>
        <span></span>
      </div>
      <div>
        <span>请假周数</span>
        <span>一周</span>
        <span>二周</span>
        <span>三周</span>
      </div>
      <div>
        <span>请假理由（必填）</span>
        <textarea placeholder="请假理由不得少于35个字..."></textarea>
      </div>
    </div>
    <button>提交请假申请</button>
  </div>
</template>

<script>
export default {
  name: 'Leave',
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
