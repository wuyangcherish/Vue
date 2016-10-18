<template>
	<form action="" role='form' method="post" class="form-horizontal">
		<div class="form-group">
			<label for="username" class="col-sm-2 control-label">用户名</label>
			<div class="col-sm-10">
				<input type="text" class="form-control" id="username"/>
			</div>
		</div>

		<div class="form-group">
			<label for="password" class="col-sm-2 control-label">密码</label>
			<div class="col-sm-10">
				<input type="password" class="form-control" id='password'/>
			</div>		
		</div>
		
		<div class="form-group">
			<div class="col-sm-offset-2 col-sm-10">
				<div class="checkbox">
					<label for="">
						<input type="checkbox" /> <span>Remember me </span>
					</label>
				</div>
			</div>	
		</div>
		
		<div class="form-group">
			<div class="col-sm-offset-2 col-sm-10">
				<button type="button" class="btn btn-primary">登 录</button>
			</div>	
		</div>

	</form>
</template>
<script type="text/javascript"></script>

<style type="text/css">
.form-horizontal .form-group {
    margin-right: -15px;
    margin-left: -15px;
}
.control-label{
	font-size:14px;
	font-weight: 700;
	text-align: right;
}
.form-group {
	width:500px;
}
.form-control{
    display: block;
    width:200px;
    height: 34px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin:10px;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}
.col-sm-2{
	display: inline-block;
	width: 15%;
}
.col-sm-10{
	display: inline-block;
	width:80%;
}
.col-sm-offset-2{
	margin-left:18%;
}
.btn{
	display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
    outline:none;
}
.btn-primary{
	color:#fff;
	background-color: #428bca;
    border-color: #357ebd;
}
.btn-primary:hover{
	background-color: #357ebd;
	transition:background 0.2s ease-in;
}
.checkbox{
	margin:5px 0px;
}
.checkbox input[type='checkbox']{
	width:20px;
	height:20px;
	vertical-align: middle;
	transition: all 500ms ease-in;
}
.checkbox  span{
	vertical-align: middle;
	line-height: 20px;
}
</style>

