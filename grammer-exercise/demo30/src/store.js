import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		todos:[
			{id:1, text:"...first", done: true},
			{id:2, text:"...second", done: false},
			{id:3, text:"...third", done: true}
		]
	},
	getters:{
		doneTodos: state =>{
			return state.todos.filter(todo => todo.done)
		}
	}
})