<template>
	<div>
		<tab>
			<!-- navbar	 -->
			<navbar :items="items" slot="nav" @select="select" :selected="selected"></navbar>
			<!-- body -->
			<div class="tab-body" slot="body" :style="{transform: 'translateX(-' + (selected * 100) + '%)'}">
				<div class="scroll-container">
					<div class="content-container">
						内容1
					</div>
					<div class="content-container">
						内容222
					</div>
					<div class="content-container">
						内容33333
					</div>
				</div>
			</div>
			
		</tab>
	</div>
</template>
<script>
import Tab from './Tab';
import Navbar from './navbar';
import TabCon from './TabCon';
// import navbar from 
	export default{
		name:'index',
		data(){
			return{
				items:[{
					"title":'选项一',
					"content":"这是1的内容"
				},{
					"title":'选项二',
					"content":"这是1的内容"
				},{
					"title":'选项三',
					"content":"这是3的内容"
				}],
				selected:0
			}
		},
		methods:{
			select(idx){
				this.selected = idx;
			}
		},
		components:{
			Tab,
			Navbar,
		}
	}
</script>