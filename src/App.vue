<template>
  <div id="app">
    <router-view/>
    <router-view name="Table"/>
    <router-view name="LeftBox"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
