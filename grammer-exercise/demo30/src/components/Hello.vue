<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="todo in todos">
        {{todo.id}}: {{todo.text}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Vuex Getter ToDos'
    }
  },
  computed:{
    todos(){
      return this.$store.getters.doneTodos
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
