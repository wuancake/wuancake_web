<template>
  <div class="group">
    <div class="group-main">
      <group-item v-for="item in groups" :key="item.id" :data="item" :activeNumber="activeNumber" @select="select"></group-item>
    </div>
    <span class="group-info"><i class="el-icon-info"></i> 警告：只能选择一次分组，请谨慎选择！</span>
    <button @click="submit" class="submit">提交</button>
  </div>
</template>

<script>
import groupItem from './groupItem'
import { mapState, mapMutations } from 'vuex'
import { saveGroup } from '../../api'

export default {
  name: 'group',
  components: {
    'group-item': groupItem
  },
  data () {
    return {
      activeNumber: 0
    }
  },
  computed: {
    ...mapState(['groups', 'user_info'])
  },
  methods: {
    select (val) {
      this.activeNumber = val
    },
    submit () {
      if (this.activeNumber === 0) {
        this.$message({
          message: '请选择分组后再提交！',
          type: 'warning'
        })
      } else {
        saveGroup({
          userId: this.user_info.user_id,
          groupId: this.activeNumber
        }).then(res => {
          if (res.infoCode === 200 || res.infoCode === '200') {
            this.$notify.success({
              title: '提交成功',
              message: res.infoText
            })
            let name = null
            this.groups.forEach(element => {
              if (element.id === res.groupId) {
                name = element.groupName
              }
            })
            this.setUserInfo({
              group_id: res.groupId,
              group_name: name
            })
            this.$router.push({ path: '/' })
          } else {
            this.$notify.error({
              title: '提交失败',
              message: res.infoText
            })
          }
        })
      }
    },
    ...mapMutations({
      setUserInfo: 'SET_USER_INFO'
    })
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
  color: orangered;
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
