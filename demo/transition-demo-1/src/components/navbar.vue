<template>
	<div class="weui-navbar">
	    <navbaritem v-for="item in computeItem" :item="item" :key="item.key"
	    :is-sel="item.key === sel" @select="selectItem"></navbaritem>
	</div>

    
</template>
<script type="text/javascript">
import navbaritem from './NavBarItem'
	export default{
		name:"navbar",
		props:['items','selected'],
		data(){
			return{
				data:this.item,
				sel:this.selected
			}
		},
		methods:{
			selectItem(key){
				console.log(key)
				if(key == this.sel){
					return false;
				}else{
					this.sel = key
				}
				this.$emit("select",key)
			}
		},
		components:{
			navbaritem
		},
		computed:{
			computeItem(){
				return this.items.map(function(item,key){
					return{
						key:key,
						text:item
					}
				})
			}
		}
	}
</script>