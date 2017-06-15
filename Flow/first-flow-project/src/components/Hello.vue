/* @flow
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
  </div>
</template>
*/
//<script>
const str:number = "hellow world"
console.log(str)
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created(){
    console.info("flow test", str)
  }
}
//</script>

