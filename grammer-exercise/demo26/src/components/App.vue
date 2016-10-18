<template>
	<div>
		<Display></Display>
		<Increment></Increment>
	</div>
</template>

<script type="text/javascript">
	import Display from './Display';
	import Increment from './Increment';
	import store from '../vuex/store'; //引入vuex
	export default{
		components:{
			Display: Display,
			Increment: Increment
		},
		store: store
	}
</script>