<template>
<div class="container">
	<div class="page navbar slide-transition">
		<div class="bd" style="height:100%;">
			<div class="weui_tab">
				<slot name="nav"></slot>
				<div class="weui_tab_bd" >
					<slot name="body"></slot>
				</div>
			</div>
		</div>
	</div>
</div>
	
</template>
<script type="text/javascript">
import navbar from './navbar';
import navbaritem from './navBarItem';
export default{
	components:{
		navbar,
		navbaritem
	}
}
</script>
<style type="text/css">
	.container .page{
		position: absolute;
		top:0;
		left: 0;
		bottom: 0;
		right: 0;
		    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
	}
	.slide-transition{
	    -webkit-transition: -webkit-transform .3s ease;
	    transition: -webkit-transform .3s ease;
	    transition: transform .3s ease;
	    transition: transform .3s ease,-webkit-transform .3s ease;
	    width: 100%;
	}
	.bd{
		height: 100%;
	}
	.weui_tab{
		position: relative;
		height: 100%;
	}
	.navbar .weui_tab_bd {
   	  overflow-x: hidden; 
	}
	.weui_navbar+.weui_tab_bd {
	    padding-top: 50px;
	    padding-bottom: 0;
	}
	.weui_tab_bd {
	    box-sizing: border-box;
	    height: 100%;
	    padding-bottom: 55px;
	    -webkit-overflow-scrolling: touch;
	}
	.navbar .tab-body{
		-moz-transition: all .3s ease;
		-webkit-transition: all .3s ease;
		-o-transition: all .3s ease;
		transition: all .3s ease;
	}
	.navbar .tab-body .scroll-container{
		width: 300%;
		display: webkit-box;
		display: webkit-flex;
		display: ms-flexbox;
		display: flex;
		padding-top: 50px;
	}
	.navbar .tab-body .scroll-container .content-container {
	    -webkit-box-flex: 1;
	    -webkit-flex: 1 1;
	    -ms-flex: 1 1;
	    flex: 1 1;
	}
	.weui-navbar__item.weui_bar_item_on{
	    background-color: #f5f5f5;
	}
</style>