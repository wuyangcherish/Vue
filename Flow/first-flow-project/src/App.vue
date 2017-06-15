/* @flow
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <p>{{value}}</p>
  </div>
</template>
*/
//<script>
import Hello from './components/Hello'
const str:string = 2323;
console.log(str)
export default {
  name: 'app',
  data(){
    return {
      value:"Hello wrold"
    }
  },
  created(){
    this.value = str;
  },
  components: {
    Hello
  }
}
//</script>

/*
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
*/