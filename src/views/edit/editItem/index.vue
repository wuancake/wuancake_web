<template>
  <div class="edit-item">
    <p class="edit-item-title">{{ title }}</p>
    <el-input @input="change" type="textarea" :value="note" placeholder="输入内容..." :rows="row ? row : 3"></el-input>
  </div>
</template>

<script>
export default {
  name: 'editItem',
  props: ['title', 'row', 'note'],
  data () {
    return {}
  },
  methods: {
    change (val) {
      this.$emit('change', val)
    }
  }
}
</script>

<style scoped>
.edit-item-title {
  font-size: 14px;
  font-weight: bold;
  color: #00479b;
  margin: 18px 0;
}
</style>
