<template>
  <div class="form-div">
    <h1>Java-Typist</h1>
    <el-form v-model="user" label-width="80px">
      <el-form-item label="username:">
        <el-input v-model="user.username" placeholder="username" clearable/>
      </el-form-item>
      <el-form-item v-if="visible" label="password:">
        <el-input label="password:" type="password" v-model="user.password" placeholder="password">
          <i slot="suffix" title="显示" @click="status('show')" style="cursor:pointer" class="el-icon-view"></i>
        </el-input>
      </el-form-item>
      <el-form-item v-else label="password:">
        <el-input label="password:" type="text" v-model="user.password" placeholder="password">
          <i slot="suffix" title="隐藏" @click="status('hide')" style="cursor: pointer"
             class="el_input__icon iconfont icon-el-icon-secret"></i>
        </el-input>
      </el-form-item>
      <el-button type="primary" round disabled id="login-button">登录</el-button>
      <el-button>注册</el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      const parseUsername = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('用户名为空'))
        } else if (!value.match(this.nameFormat)) {
          callback(new Error('请输入合法的用户名'))
        } else {
          callback()
        }
      }
      const parsePwd = (rule, value, callback) => {
        alert('ss')
      }
      return {
        nameFormat: '',
        pwdFormat: '',
        msg: false,
        visible: true,
        user: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            {validator: parseUsername, trigger: 'blur'}
          ],
          pwd: [
            {validator: parsePwd, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      status: function (command) {
        this.visible = !(command === 'show')
      },
      prepare: function () {
        alert('ok')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  .el-form {
    width: 350px;
    margin: 0 auto;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 8px;
    padding-bottom: 8px;
    background: #f8f8f8;
    border-color: rgba(119, 158, 204, 0.28);
    border-style: ridge;
    border-width: 0.5pt;
  }

  .el-button {
    margin-right: 40px;
    margin-left: 40px;
  }

  .el-form-item {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 40px;
    font-weight: bold;
  }

  .form-div {
    padding-top: 10px;
    text-align: center;
  }

</style>
