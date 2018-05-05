<template>
  <div class="group">
    <div class="group-main">
      <group-item v-for="item in groups" :key="item.id" :data="item" :activeNumber="activeNumber" @select="select"></group-item>
    </div>
    <span class="group-info"><i class="el-icon-info"></i> 警告：只能选择一次分组，请谨慎选择！</span>
    <button class="submit">提交</button>
  </div>
</template>

<script>
import groupItem from './groupItem'
import { mapState } from 'vuex'

export default {
  name: 'group',
  components: {
    'group-item': groupItem
  },
  data () {
    return {
      activeNumber: 1
    }
  },
  computed: {
    ...mapState(['groups'])
  },
  methods: {
    select (val) {
      this.activeNumber = val
    }
  }
}
</script>

<style scoped>
.group {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.group-main {
  width: 75%;
  background: #fff;
  display: flex;
  flex-wrap: wrap;
}
.group-main > div {
  width: 50%;
  box-sizing: border-box;
}
.group-info {
  margin-top: 42px;
  display: block;
  width: 75%;
  color: #aaa;
}
.submit {
  padding: 10px 100px;
  border: 1px solid #289dff;
  border-radius: 2px;
  color: #289dff;
  background: #fff;
  font-size: 20px;
  cursor: pointer;
  margin-top: 52px;
  outline: none;
}
.submit:hover {
  box-shadow: 0 2px 4px 1px rgb(192, 191, 191);
}
</style>
