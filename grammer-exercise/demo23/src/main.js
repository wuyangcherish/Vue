var Vue = require('vue');

var Index = require('./views/index');
var Hello = require('./views/hello');

var VueRouter = require('vue-router');
Vue.use(VueRouter)

//空根路由
var AppRoot = Vue.extend({})

var router = new VueRouter();


router.map({
	'/':{
		component: Index
	},
	'/index':{
		component: Index
	},
	'/hello':{
		component: Hello
	}
});

router.start(AppRoot, '#root');

Vue.config.devtools = true;