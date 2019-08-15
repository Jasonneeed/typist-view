<template>
  <div id="app">
    <router-view/>
<!--    <router-view name="header"></router-view>-->
<!--    <router-view name="login-form"></router-view>-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
