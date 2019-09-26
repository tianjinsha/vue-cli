<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <CreateElement/>
    <Create foo="test foo"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import CreateElement from './components/CreateElement'
import Create from './components/Create'

export default {
  name: 'app',
  components: {
    HelloWorld,CreateElement,Create
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
