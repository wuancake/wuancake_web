<template>
  <div class="weeklys default-container">
    <header>周报详情</header>
    <div class="main">
      <el-table :data="data" stripe border>
        <el-table-column label="所属组" prop="zu" header-align="center"></el-table-column>
        <el-table-column label="当前周数" prop="number" header-align="center"></el-table-column>
        <el-table-column label="周报" prop="weekly" header-align="center"></el-table-column>
        <el-table-column label="周报状态" prop="state" header-align="center"></el-table-column>
        <el-table-column label="提交时间" prop="time" header-align="center"></el-table-column>
      </el-table>
    </div>
    <footer style="text-align: center;margin-top: 66px;">
      <el-pagination
        background
        layout="prev, pager, next"
        :total="1000">
      </el-pagination>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'weeklys',
  data () {
    return {
      data: [
        {
          zu: 1,
          number: 117,
          weekly: 'dfdfdfdfdf',
          state: 1,
          time: '2018-09-09'
        },
        {
          zu: 1,
          number: 117,
          weekly: 'dfdfdfdfdf',
          state: 1,
          time: '2018-09-09'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
