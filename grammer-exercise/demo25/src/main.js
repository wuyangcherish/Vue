
var Vue = require('vue');
var Index = require('./views/index');
var Page1 = require('./views/page1');
var Page2 = require('./views/page2');

//组件
var Link = require('./components/link');
var Travel = require('./components/travel');
var Read = require('./components/read');
var Music = require('./components/music');

var VueRouter = require('vue-router');
Vue.use(VueRouter);

//空目录
var AppRoot = Vue.extend({});
var router = new  VueRouter();

router.map({
	'/':{
		component: Index
	},
	'/page1':{
		component: Page1,
		subRoutes:{
			'/travel':{
				component: Travel
			},
			'/read':{
				component: Read
			},
			'/music':{
				component: Music
			}
		}
	},
	'page2':{
		component:Page2
	}
});

router.start(AppRoot, '#root');

Vue.config.devtools = true;










