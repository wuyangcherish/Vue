<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <p>{{count}}</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Demo for Vuex Actions'
    }
  },
  computed:{
    count(){
      return this.$store.state.count
    }
  },
  methods:{
    increment(){
      //直接 触发 mutations
      // this.$store.commit('increment')
      //触发 actions
      // this.$store.dispatch('incrementAsync',{
      //   amount:10
      // })

      //以 对象  形式分发
      this.$store.dispatch({
        type:'incrementAsync',
        amount:10
      })
    },
    decrement(){
      this.$store.commit('decrement')
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
