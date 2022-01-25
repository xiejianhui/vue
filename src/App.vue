<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <app-index></app-index>
  </div>
</template>

<script>
import Index from './views/index.vue'

export default {
  name: 'App',
  components: {
    'app-index': Index
  }
}
</script>
<style lang="less" scoped>
#app {
  // font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;

  font-family: PingFangSC-Regular, sans-serif;
  color: #2c3e50;
}

body,
html {
  width: 100%;
  user-select: none;
}

body {
  background: #fbfbfb;
  margin: 0;
  padding: 0;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  // margin: 0 10px;
}

a {
  color: #42b983;
}

</style>
