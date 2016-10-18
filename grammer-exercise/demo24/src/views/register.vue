
<template>
	<v-header></v-header>
	<v-reg></v-reg>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				email:'',
				userpass:''
			}
		},
		// firebase:{
		// 	items: items.child('test-6ba90')
		// },
		components:{
			vHeader: require('../components/hd'),
			vReg: require('../components/reg')
		}
		
	}
	

</script>

