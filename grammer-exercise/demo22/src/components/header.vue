<template>
    <h1 class='header'>{{headerCon}}</h1>
</template>

<script>
    export default{
        data(){
            return{
                headerCon:"这是页面的header 部分" 
            }
        }
    }
</script>


<style>
    .header{
        width:100%;
        height:60px;
        background-color:dimgray;
        color:#fff;
        line-height:60px;
    }
</style>