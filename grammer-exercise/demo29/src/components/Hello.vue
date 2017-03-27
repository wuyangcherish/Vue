<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementDouble">+2</button>
    <p>{{count}}</p>
  </div>
</template>

<script>
// import store from '../store.js'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'first vuex counter demo'
    }
  },
  computed:{
    count(){
      return this.$store.state.count
    }
  },
  methods:{
    increment(){
      this.$store.commit('increment')
    },
    decrement(){
      this.$store.commit('decrement')
    },
    incrementDouble(){
      this.$store.commit({
        type:'incrementDouble',
        amount:2
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
