

<template>
   <div class="content">

        <v-header></v-header>
        <h2>{{content}}</h2>
   </div>
    
</template>

<script>
    import header from './header';
    export default {
        el:'#root',
        data(){
            return{
                content:"这里是app.vue 的文字"
            }
        },
        components:{
            'v-header': header
        }
    }
</script>

<style>
    *{
        margin:0;
        padding:0;
    }
    .content{
        width:100%;
        height:300px;
    }
</style>