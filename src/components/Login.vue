<template>
  <div class="form-div">
    <el-form ref="user" :model="user" label-width="80px" :rules="rules">
      <h1>Java-Typist</h1>
      <el-form-item label="用户名:" prop="username" class="font-common">
        <el-input v-model="user.username" placeholder="username" auto-complete="off" clearable/>
      </el-form-item>
      <!--        密码-->
      <el-form-item label="密码:" prop="password" class="font-common">
        <el-input v-if="visible" label="password:" type="password" v-model="user.password" placeholder="password">
          <i slot="suffix" title="显示" @click="pwd_visible('show')" style="cursor:pointer" class="el-icon-view"></i>
        </el-input>
        <el-input v-else label="password:" type="text" v-model="user.password" placeholder="password">
          <i slot="suffix" title="隐藏" @click="pwd_visible('hide')" style="cursor: pointer"
             class="el_input__icon iconfont icon-el-icon-secret"></i>
        </el-input>
      </el-form-item>
      <el-form-item label="验证码:" prop="code" class="font-common">
        <el-input v-model="user.code" auto-complete="off" placeholder="verification code" clearable/>
        <div class="login_code">
          <img src="codeUrl" @click="getCode()"/>
        </div>
      </el-form-item>
      <el-button :type="btn" @click="login_request()" :disabled='used' round>登录</el-button>
      <el-button @click="register_request()" round>注册</el-button>
    </el-form>

  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      // 验证用户名格式
      let parseUsername = (rule, value, callback) => {
        if (value.trim() === '') {
          this.name_ready = false
          callback(new Error('用户名不能为空'))
        } else if (!value.match(this.nameFormat)) {
          this.name_ready = false
          callback(new Error('请输入合法的用户名'))
        } else {
          this.name_ready = true
          callback()
        }
      }
      // 验证密码格式
      const parsePwd = (rule, value, callback) => {
        if (value.trim() === '') {
          this.pwd_ready = false
          callback(new Error('密码不能为空'))
        } else if (value.match(this.pwdFormat)) {
          this.pwd_ready = true
          callback()
        } else {
          this.pwd_ready = false
          callback(new Error('密码格式不正确'))
        }

        if (this.pwd_ready && this.name_ready) {
          this.used = false
        } else {
          this.used = true
        }
      }
      const parseEmail = (rule, value, callback) => {
        callback()
      }
      return {
        user: {
          username: '',
          nickname: '',
          password: '',
          email: '',
          pwdagn: '',
          phone: '',
          code: ''
        },
        btn: 'primary',
        used: true,
        nameFormat: /^[a-zA-Z0-9_-]{4,16}$/, /* 用户名正则 */
        pwdFormat: /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/, /* 密码正则, 至少6位，包括至少一个大写，一个小写，一个数字，一个特殊字符 */
        name_ready: false, /* 是否准备登录 */
        pwd_ready: false,
        current_page: false, /* true为注册页面， false为登录页面 */
        visible: true, /* 密码是否可见 */
        valid: false, /* 用户输入信息是否合法 */
        rules: {
          username: [
            {validator: parseUsername, trigger: 'blur'}
          ],
          password: [
            {validator: parsePwd, trigger: 'blur'}
          ],
          pwdagn: [
            {validator: parsePwd, trigger: 'blur'}
          ],
          nickname: [
            {require: true, message: '此项不能为空', trigger: 'blur'}
          ],
          email: [
            {require: true, message: '此项不能为空', trigger: 'blur'},
            {validator: parseEmail, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      pwd_visible: function (command) {
        this.visible = !(command === 'show')
      },
      login_request: function () {
        if (this.current_page) {
          this.current_page = false
          console.log('切换注册')
        } else {
          console.log('login todo')
        }
      },
      getCode: function () {
        console.log('get code todo')
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
    margin-top: 100px;
    margin-left: auto;
    margin-right: auto;
    padding-right: 10px;
    padding-top: 8px;
    padding-bottom: 10px;
    width: 350px;
    opacity: 0.8;
  }

  .el-button {
    margin-right: 40px;
    margin-left: 40px;
  }

  .font-common {
    color: #ffffff;
  }

  .el-form-item {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-size: 40px;
    font-weight: bold;
  }

  .form-div {
    position: fixed;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    color: #ffffff;
    background-image: url("../assets/back.jpg");
  }

  .login_code {
    display: inline;
  }

</style>
