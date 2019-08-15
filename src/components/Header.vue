<template>
  <div class="header-me">
    <div class="index-route">
    </div>
    <div class="contract">
      <el-breadcrumb separator=" ">
        <el-breadcrumb-item :to="{ path: '/'}" aria-current="page">首页</el-breadcrumb-item>
        <el-breadcrumb-item><a :href="'https://www.github.com/jasonneeed'">Github</a></el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path:'/about'}">关于本站</el-breadcrumb-item>
        <el-breadcrumb-item/>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header.vue'
  }
</script>

<style scoped>
  div {
    font-size: medium;
    margin-left: 10px;
    margin-top: 20px;
  }

  div .index-route {

  }

  div .contract {
  }

</style>
