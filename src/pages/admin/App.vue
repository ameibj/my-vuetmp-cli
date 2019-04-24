<template>
  <div id="app">
    <helos></helos>
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
  import helos from 'src/components/HelloWorld'

export default {
  name: 'app',
  components:{
    helos
  }
}
</script>

<style>
  /*引入全局的 css*/
  @import "../../../static/reset.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
