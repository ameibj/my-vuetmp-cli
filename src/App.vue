<template>
  <div id="app" class="wrapper">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data: function () {
     return {}

    },
    components:{
    //  HelloVue
    }
  }
</script>

<style lang="scss">
  .wrapper {
    h1 {
      text-align: center;
      color: green;
    }
  }
</style>
