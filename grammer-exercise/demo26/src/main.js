import Vue from 'vue';
import Vuex from 'vuex';
import App from './components/App.vue';
import store from './vuex/store'; //引入store；

new Vue({
	store,
	el:'#root',
	render: h => h(App)
})