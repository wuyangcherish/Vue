import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state:{
		count:0
	},
	mutations:{
		increment: (state,payload) => {
			state.count += payload.amount
		},
		decrement: state => state.count--
	},
	actions:{
		incrementAsync(context,payload){
			console.info(context)
			setTimeout(function(){
				context.commit('increment',payload)
			},1000)
		}
	}
	// actions:{
	// 	incrementAsync({commit},payload){
	// 		console.log(commit)
	// 		setTimeout(function(){
	// 			 commit('increment',payload)
	// 		},1000)
	// 	}
	// }
})
