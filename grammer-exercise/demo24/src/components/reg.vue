
<template>
	<form action=""  role="form">
		<div class="form-group">
			<label for="email" class="col-sm-2 control-label">邮箱</label>
			<div class="col-sm-10">
				<input type="text" class="form-control" id="email"  v-model="email"/>
			</div>
		</div>
		<div class="form-group">
			<label class="col-sm-2 control-label" for="username" >用户名</label>
			<div class="col-sm-10">
				<input type="text" class="form-control" id="username" v-model="username"/>
			</div>
		</div>

		<div class="form-group">
			<label class="col-sm-2 control-label" for="password" >密码</label>
			<div class="col-sm-10">
				<input type="text" class="form-control" id="password" v-model="password"/>
			</div>
		</div>

		<div class="form-group">
			<label for="repass" class="col-sm-2 control-label">重复密码</label>
			<div class="col-sm-10">
				<input type="text" class="form-control" id="repass" />
			</div>
		</div>

		<div class="form-group">
			<div class="col-sm-offset-2 col-sm-10">
				<button type="submit" class="btn btn-primary" @click="reg">注 册</button>
			</div>
		</div>

		
	</form>
</template>
<script type="text/javascript">
	var Vue = require('Vue');
	var VueFire = require('vuefire');
	var firebase = require('firebase');	
	var config = {
	    apiKey: "AIzaSyCAhi8eihUc8uL4Y0YEOl9lHa_puWRaEm4",
	    authDomain: "test-6ba90.firebaseapp.com",
	    databaseURL: "https://test-6ba90.firebaseio.com",
	    storageBucket: "test-6ba90.appspot.com",
	  };
	firebase.initializeApp(config);
	export default{
		data(){
			return{
				email:'',
				password:''
			}
		},
		methods:{
			reg: function(){
				// console.log(firebase.auth().createUserWithEmailAndPassword)
				firebase.auth().createUserWithEmailAndPassword(this.email,this.password).catch(function(err){
					if(err){
						console.log(err);
						return false;
					}
				})
				//判断是否登陆成功
				var authData = firebase.auth().currentUser;
				if(authData){
					console.log("您登录成功")
				}else{
					console.log('登录失败')
				}
			}
		}

	}
</script>

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
</style>

