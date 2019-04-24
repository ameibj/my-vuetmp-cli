<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <div>
      <span v-for="(img,index) in imgSrc">
        <img :src="img.src" alt="">
      </span>
    </div>
    <div class="bg">
      <span v-for="(img,index) in 4">
      </span>
    </div>
    <img src="../assets/images/1.png" alt="">
    <img src="../assets/images/2.png" alt="">
    <img src="../assets/images/1.png" alt="">
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul class="lists">
      <li>
        <a href="" class="less"> 我是less的测试 列表</a>
      </li>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        imgSrc: [
          {src: '/static/img/1.png'},
          {src: '/static/img/2.png'},
          {src: '/static/img/3.png'},
          {src: '/static/img/4.png'},
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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

  .lists {
    li {
      a {
        color: red;
      }
    }
    .less {
      color: blue;
      background: red;
    }
  }

  .bg {
    span  {
      display: inline-block;
      width: 30px;
      height: 30px;
      background: url("/static/img/1.png") no-repeat;
      background-size: cover;
    }
  }
</style>
