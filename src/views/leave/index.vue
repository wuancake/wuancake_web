<template>
  <div class="leave">
    <p>请假申请</p>
    <div class="leave-main">
      <div>
        <span></span>
        <span></span>
        <span>请假状态</span>
        <span></span>
      </div>
      <div>
        <span>请假周数</span>
        <span @click="selectWeek(1)" class="btn-item" :class="{ 'active': selectWeeks === 1 }">一周</span>
        <span @click="selectWeek(2)" class="btn-item" :class="{ 'active': selectWeeks === 2 }">二周</span>
        <span @click="selectWeek(3)" class="btn-item" :class="{ 'active': selectWeeks === 3 }">三周</span>
      </div>
      <div>
        <span>请假理由（必填）</span>
        <textarea v-model="content" placeholder="请假理由不得少于35个字..."></textarea>
      </div>
    </div>
    <button @click="submit">提交请假申请</button>
  </div>
</template>

<script>
export default {
  name: 'Leave',
  data () {
    return {
      selectWeeks: 0,
      content: ''
    }
  },
  methods: {
    selectWeek (val) {
      this.selectWeeks = val
    },
    submit () {

    }
  }
}
</script>

<style scoped>
.btn-item {
  border: 1px solid rgb(49, 199, 19);
  padding: 3px 10px;
  border-radius: 3px;
  color: rgb(49, 199, 19);
}
.active {
  background: rgb(49, 199, 19);
  color: #fff;
}
</style>
