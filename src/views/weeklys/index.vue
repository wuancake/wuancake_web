<template>
  <div class="weeklys default-container">
    <header>周报详情</header>
    <div class="main">
      <el-table :data="data" stripe border>
        <el-table-column label="所属组" prop="groupId" header-align="center">
          <template slot-scope="scope">
            <div class="deal-time">
              <span>{{ groups[scope.row.groupId - 1].groupName }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="当前周数" prop="weekNum" header-align="center">
          <template slot-scope="scope">
            <div class="deal-time">
              <span>{{ scope.row.weekNum }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="周报" prop="text" header-align="center"></el-table-column>
        <el-table-column label="周报状态" prop="status" header-align="center">
          <template slot-scope="scope">
            <div class="deal-time">
              <span>{{ scope.row.status | dealStatus }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="提交时间" prop="replyTime" header-align="center">
          <template slot-scope="scope">
            <div class="deal-time">
              <span>{{ scope.row.replyTime | dealBackTime }}</span>
              <span>{{ scope.row.replyTime | dealBackDate }}</span>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <footer style="text-align: center;margin-top: 66px;">
      <el-pagination
        background
        layout="prev, pager, next"
        @current-change="changePage"
        :page-size="weekNum"
        :total="total">
      </el-pagination>
    </footer>
  </div>
</template>

<script>
import { weeklys } from '../../api'
import { mapState } from 'vuex'

export default {
  name: 'weeklys',
  data () {
    return {
      data: [],
      pageNum: 1,
      weekNum: 5,
      total: 0
    }
  },
  computed: {
    ...mapState(['user_info', 'groups'])
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      weeklys({
        userId: this.user_info.user_id,
        groupId: this.user_info.group_id,
        pageNum: this.pageNum,
        weekNum: this.weekNum
      }).then(res => {
        console.log(res)
        if (res.reports) {
          this.data = res.reports
          this.total = res.count
        }
      })
    },
    changePage (val) {
      this.pageNum = val
      this.getList()
    }
  },
  filters: {
    dealBackTime (val) {
      return val.slice(11, 19)
    },
    dealBackDate (val) {
      return val.slice(0, 10)
    },
    dealStatus (val) {
      let a = ['', '未提交', '已提交', '已请假']
      return a[val]
    }
  }
}
</script>

<style scoped>
.deal-time {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
