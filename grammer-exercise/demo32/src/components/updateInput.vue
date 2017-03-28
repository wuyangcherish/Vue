<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>请输入内容：</p>
    <input type="text" v-model="msg" class="ipt"/>
    <p>你输入的内容是：</p>
    <p>{{msg}}</p>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      title: 'change v-model'
    }
  },
  computed:{
    msg:{
      get(){
        return this.$store.state.changeIpt.msg
      },
      set(value){
        this.$store.commit("updateIptMsg",value)
      }
      
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
