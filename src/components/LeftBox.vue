<template>
  <div class="left-box">
    <el-button :type="btn" @click="menuStatus()" :label="isOpen">{{status}}</el-button>
    <el-menu text-color="#ffffff" @open="handleOpen" @close="handleClose" class="my-menu" :collapse="isCollapsed">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span slot="title">导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1" @click="show_status()">1-1 组件</el-menu-item>
          <el-menu-item index="1-2">1-2 组件</el-menu-item>
          <el-menu-item index="1-3">1-3 组件</el-menu-item>
          <el-submenu index="1-4">
            <template slot="title">
              <span slot="title">1-4 组件</span>
            </template>
            <el-menu-item index="1-4-1">1-4-1组件</el-menu-item>
          </el-submenu>
        </el-menu-item-group>
        <el-menu-item-group>

        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'LeftBox',
    data() {
      return {
        isCollapsed: true,
        isOpen: true,
        status: '展开',
        btn: 'warn',
        defaultIndex: '1'
      }
    },
    methods: {
      menuStatus: function () {
        this.isOpen = !this.isOpen
        if (!this.isOpen) {
          this.btn = 'warn'
          this.isCollapsed = false
          this.status = '展开'
        } else {
          this.btn = 'info'
          this.isCollapsed = true
          this.status = '关闭'
        }
      },
      handleOpen: function (key, path) {
        console.log(key, path)
      },
      handleClose: function (key, path) {
        console.log(key, path)
      },
      show_status: function () {
        this.$notify({
          title: 'result',
          message: this.status
        })
      }
    }
  }
</script>

<style>
  .left-box {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 250px;
  }

  .el-menu {
    height: 100%;
    background-color: #545c64;
  }

  .el-menu:focus {
    background-color: #546c70;
  }

  .el-menu-item:hover {
    background-color: #546c70 !important;
  }

  .el-menu-item:focus {
    background-color: #546c70;
  }

  .el-submenu__title:hover {
    background-color: #546c70;
  }

  a:-webkit-any-link {
    text-decoration: none;
  }
</style>
