<template>
	<h3 class="h-tit">爱好</h3>
	<ul class='hobby'>
		<li><a href="" v-link="{path:'/page1/travel'}">旅游</a></li>
		<li><a href="" v-link="{path:'/page1/read'}">看书</a></li>
		<li><a href="" v-link="{path:'/page1/music'}">听音乐</a></li>
	</ul>
	<router-view></router-view>
</template>

<script type="text/javascript"></script>
<style type="text/css">
	.h-tit{
		font-weight: 400;
		font-size:16px;	
		padding:20px 30px;
	}
	.hobby{
		padding:20px 30px;
	}
	.hobby li{
		display: inline-block;
	}
	.hobby li a{
		text-decoration: none;
		color:#4f9fcf;
		padding:0 10px;
	}	
	.hobby li a:hover{
		color:#2f6f9f;
	}
</style>






