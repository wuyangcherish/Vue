<template>
	<nv-head></nv-head>
	<page-second></page-second>
	<nv-footer></nv-footer>
</template>

<script type="text/javascript">
	export default {
		components:{
			'nvHead':require('../components/header.vue'),
			'pageSecond':require('../components/con2.vue'),
			'nvFooter':require('../components/footer.vue'),
		}
	}
</script>