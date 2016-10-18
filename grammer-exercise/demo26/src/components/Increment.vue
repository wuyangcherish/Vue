<template>
	<div>
		<button @click='increment'> Increment +1</button>
	</div>
</template>

<script type="text/javascript">
	import {incrementCounter} from '../vuex/actions';
	export default{
		vuex:{
			actions:{
				increment: incrementCounter
			}
		}
	}
</script>