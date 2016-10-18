<template>
	<div class="header">
		<p class='title'>{{title}}</p>
	</div>
	
</template>
<script type="text/javascript">
	export default{
		props:['title']
	}
</script>

<style type="text/css">
	*{
		padding:0;margin:0;
	}
	.header{
		width:100%;
		height:80px;
    	background-color: #f7f7f9;
    	border: 1px solid #e1e1e8;
	}
	.title{
		line-height: 80px;
		padding:0px 30px;
		color:#099;
		font-size:18px;
	}
</style>