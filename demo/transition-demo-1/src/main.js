// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Weui from 'weui'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


import Index from './components/Index'
import Hello from './components/Hello'



const routes = [{
	path: '/',
	component: Hello
}, {
	path: '/hello',
	component: Hello
}, {
	path: '/index',
	component: Index
}]


const router = new VueRouter({
	routes
})

const app = new Vue({
	router: router
}).$mount('#app')