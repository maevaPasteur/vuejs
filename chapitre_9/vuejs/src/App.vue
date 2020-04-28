<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <counter></counter>
  </div>
</template>

<script>
  import Counter from './components/counter/Counter'
export default {
  name: 'app',
  components: {
    Counter
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  a {
    color: #42b983;
  }
  #app h1 {
    color: red;
  }
</style>
