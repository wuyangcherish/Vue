<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>请输入内容：</p>
    <input type="text" :value="msg" class="ipt" @input="updateMsg"/>
    <p>你输入的内容是：</p>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: 'Input v-model'
    }
  },
  computed:{
    msg(){
      return this.$store.state.changeMsg.message
    }
  },
  methods:{
    updateMsg(e){
      this.$store.commit("updateMsg",e.target.value)
    }
  }
}
</script>

<!-- Add "scoped"  attribute to limit CSS to this component only -->
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
.ipt{
  width:75%;
  height: 30px;
  border:none;
  border-bottom:1px solid #ccc;
  outline: none;
}
</style>
