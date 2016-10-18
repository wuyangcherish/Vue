<template>
	<v-header></v-header>
	<ul class='link-lists'>
		<li><a href="" v-link="{path:'/page1'}">PAGE1</a></li>
		<li><a href="" v-link="{path:'/page2'}">PAGE2</a></li>
	</ul>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{

			}
		},
		components:{
			vHeader: require('../components/header')
		}
	}
</script>
<style type="text/css">
	.link-lists{
		margin-top:10px;
	}
	.link-lists li{
		list-style: none;
		display: inline-block;
		margin-left: 30px;
	}
	.link-lists li a{
		text-decoration: none;
		color:#4f9fcf
	}
	.link-lists li a:hover{
		color:#2f6f9f;
	}
</style>
















