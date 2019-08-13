<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div class="login-form" >
      <el-form status-icon :rules="rules"
               ref="ruleForm" label-width="100px" class="login-ruleForm">

        <el-form-item label="account" prop="acc">
          <el-input type="text" v-model="ruleForm.acc" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item label="password" prop="password">
          <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="submit('')">Login</el-button>
        </el-form-item>

      </el-form>
    </div>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank">
          Core Docs
        </a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank">
          Forum
        </a>
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" >
          Community Chat
        </a>
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a href="http://vuejs-templates.github.io/webpack/" target="_blank" >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a href="http://router.vuejs.org/" target="_blank" >
          vue-router
        </a>
      </li>
      <li>
        <a href="http://vuex.vuejs.org/" target="_blank" >
          vuex
        </a>
      </li>
      <li>
        <a href="http://vue-loader.vuejs.org/" target="_blank" >
          vue-loader
        </a>
      </li>
      <li>
        <a href="https://github.com/vuejs/awesome-vue" target="_blank" >
          awesome-vue
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        validatePass: /^[a-zA-Z0-9_-]{4,16}$/,
        validatePass2: /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/,
        msg: 'welcome to the Java-Typist view',
        ruleForm: {
          acc: '',
          pass: ''
        },
        rules: {
          account: [
            {validator: this.data.validatePass, trigger: 'blur'}
          ],
          password: [
            {validator: this.data.validatePass2, trigger: 'blur'}
          ]
        }
      }
    },
    methods: {
      submit(formName) {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
