<template>
	<div :class="{'weui-navbar__item':true, 'weui_bar_item_on': isSel}" @click="selectItem">
    	{{item.text.title}}
    </div> 
</template>

<script>
	export default{
		name:'navbaritem',
		props:['item','isSel'],
		data(){
			return {
				data :null
			}
		},
		created(){
			this.data= this.item
		},
		methods:{
			selectItem(){
				this.$emit('select',this.item.key)
			}
		}
	}
</script>