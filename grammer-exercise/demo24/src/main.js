var Vue = require('Vue');
var Firebase = require('firebase');

var Index = require('./views/content');
var Reg = require("./views/register");
var Login = require('./views/login');

//初始化 fireBase



var VueRouter = require('vue-router');
Vue.use(VueRouter)

//空根目录

var AppRoot = Vue.extend({});
var router = new VueRouter();

router.map({
	'/': {
		component: Index
	},
	'/login':{
		component: Login
	},
	'/reg':{
		component: Reg
	}
}) 

router.start(AppRoot, '#root');

Vue.config.devtools = true;




