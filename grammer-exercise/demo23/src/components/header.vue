<template>
	<div>
		<h2>{{headerMsg}}</h2>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				headerMsg:'This is Header Content'
			}
		}
	}
</script>

<style>
	h2{
		font-weight: 400;
		color:#cc0000;
	}
</style>
