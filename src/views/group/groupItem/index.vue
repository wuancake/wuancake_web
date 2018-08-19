<template>
  <div class="group-item" @click="select">
    <span class="btn" :class="{ 'btn-active': activeNumber === data.id }"></span>
    <span class="label">{{ data.groupName }}</span>
  </div>
</template>

<script>
export default {
  name: 'groupItem',
  props: {
    data: {
      type: Object,
      required: true
    },
    activeNumber: {
      type: Number,
      required: true
    }
  },
  methods: {
    select () {
      this.$emit('select', this.data.id)
    }
  }
}
</script>

<style scoped>
.group-item {
  display: flex;
  align-items: stretch;
  border: 1px solid #ddd;
  cursor: pointer;
}
.btn {
  display: inline-block;
  width: 15px;
  height: 15px;
  margin: 28px;
  border-radius: 100%;
  border: 1px solid #289dff;
}
.btn-active {
  background: #289dff;
}
.label {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid #ddd;
}
</style>
