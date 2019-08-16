<template>
  <div class="table-div">
    <h1>用户信息</h1>
    <el-divider/>
    <el-table :data="data">
      <el-table-column prop="username" label="用户名"></el-table-column>
      <el-table-column prop="nickname" label="昵称"></el-table-column>
      <el-table-column prop="phone" label="手机号"></el-table-column>
      <el-table-column prop="email" label="邮箱"></el-table-column>
      <el-table-column prop="locked" label="锁定"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row, 'select')" type="text" size="small">查看</el-button>
          <el-button @click="handleClick(scope.row, 'delete')" type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination layout="prev, pager, next, jumper" :total="33"></el-pagination>
  </div>
</template>

<script>
  export default {
    name: 'userTable',
    data() {
      return {
        data: [{
          username: 'Jason',
          nickname: '杰森斯坦森',
          phone: '15280302396',
          email: 'Jasonneeed@163.com',
          locked: 'false'
        },
          {
            username: 'Rothschild',
            nickname: '罗斯柴尔德',
            phone: '13715971321',
            email: 'rothschild@163.com',
            locked: 'false'
          }
        ]
      }
    },
    methods: {
      handleClick: function (row, action) {
        this.$notify({
          title: '第' + (this.data.indexOf(row) + 1) + '行',
          message: row.username + ' ' + action
        })
      }
    }
  }
</script>

<style scoped>

</style>
