<template id="sign">
	<div class="container">
		<v-header></v-header>
		<v-sign></v-sign>
	</div>
</template>

<script type="text/javascript">
	export default{
		components:{
			vHeader: require('../components/hd'),
			vSign: require('../components/lgin')
		}
	}
</script>
