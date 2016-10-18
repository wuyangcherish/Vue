<template id="header">
	<header>
		<h1 v-on:click="consoleHeader">{{headerMsg}}</h1>
	</header>
</template>

<script type="text/javascript">
	export default {
		data(){
			return{
				headerMsg:"Welcome to here ~"
			}
		},
		methods:{
			consoleHeader: function(){
				console.log(this.headerMsg)
			}
		}
	}
</script>

<style type="text/css">
	h1{
		font-size: 20px;
		color:#cc0000;
	}
</style>
