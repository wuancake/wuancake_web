<template>
  <div class="edit default-container">
    <header>周报撰写</header>
    <div class="edit-main">
      <div class="edit-main-info">
        <span>{{ user_info.group_name }}</span>
        <span>{{ user_info.user_name }}</span>
        <span>提交状态</span>
        <span>{{ user_info.state | checkState }}</span>
      </div>
      <edit-item title="本周完成任务（必填）" @change="changeOne"></edit-item>
      <edit-item title="本周遇到问题（必填）" @change="changeTwo"></edit-item>
      <edit-item title="下周计划（必填）" @change="changeThree"></edit-item>
      <edit-item title="作品链接" @change="changeFour" row="1"></edit-item>
    </div>
    <footer class="edit-footer">
      <button :disabled="noSubmit" class="submit" @click="save">提交周报</button>
    </footer>
  </div>
</template>

<script>
import EditItem from './editItem'
import { saveWeekly } from '../../api'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'Edit',
  components: {
    EditItem
  },
  data () {
    return {
      complete: null,
      trouble: null,
      plane: null,
      url: null,
      noSubmit: true
    }
  },
  computed: {
    ...mapState(['user_info'])
  },
  methods: {
    ...mapMutations({
      setState: 'SET_STATE'
    }),
    changeOne (val) {
      this.complete = val
      this.change()
    },
    changeTwo (val) {
      this.trouble = val
      this.change()
    },
    changeThree (val) {
      this.plane = val
      this.change()
    },
    changeFour (val) {
      this.url = val
      this.change()
    },
    change () {
      if (this.complete && this.trouble && this.plane) {
        this.noSubmit = false
      } else {
        this.noSubmit = true
      }
    },
    save () {
      if (this.complete && this.trouble && this.plane) {
        saveWeekly({
          userId: this.user_info.user_id,
          groupId: this.group_id,
          complete: this.complete,
          trouble: this.trouble,
          plane: this.plane,
          url: this.url
        }).then(res => {
          this.$notify.success({
            title: '提交成功',
            message: res.infoText
          })
          this.setState(2)
          this.$router.push({ path: '/' })
        })
      }
    }
  },
  filters: {
    checkState (val) {
      return val === 3 ? '已请假' : '未请假'
    }
  },
  mounted () {}
}
</script>

<style scoped>
.submit {
  background: #289dff;
  border: 0;
  color: white;
  padding: 15px 60px;
  border-radius: 3px;
  cursor: pointer;
}
header {
  color: #00479b;
  font-weight: bold;
  margin-bottom: 42px;
}
.submit:hover {
  box-shadow: 0 0 4px #ddd;
}
.submit:disabled {
  cursor: not-allowed;
  background: #4c8dc2;
  color: #ddd;
}
.edit-footer {
  margin-top: 50px;
  text-align: center;
}
.edit-main {
  padding: 0 35px;
  color: #00479b;
  font-weight: bold;
}
.edit-main-info span:nth-of-type(2) {
  margin-left: 48px;
}
.edit-main-info span:nth-of-type(3) {
  margin-left: 150px;
}
.edit-main-info span:nth-of-type(4) {
  margin-left: 63px;
}
</style>
