<template>
  <div class="table-div">
    <h1>博客数据表</h1>
    <el-table :data="blogs" >
      <el-table-column prop="title" label="标题"/>
      <el-table-column prop="author" label="作者"/>
      <el-table-column prop="createTime" label="创作时间"/>
      <el-table-column prop="updateTime" label="最后更新时间"/>
      <el-table-column prop="category" label="类型"/>
      <el-table-column prop="read" label="阅读量"/>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click=""
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: 'BlogTable',
    data() {
      return {
        blogs: [{}]
      }
    }
  }
</script>

<style scoped>

</style>
