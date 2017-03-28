import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)

const msgModule = {
	state:{
		message:"Hello from store"
	},
	mutations:{
		updateMsg:(state,payload) => {
			state.message = payload
		}
	}
}

const inputMsgMoudle = {
	state:{
		msg:"Hello from input Module"
	},
	mutations:{
		updateIptMsg:(state,payload) =>{
			state.msg = payload
		}
	}
}

const store = new Vuex.Store({
	modules:{
		changeMsg: msgModule,
		changeIpt: inputMsgMoudle
	}
})


export default store

// store.state.changeMsg --> 才是 Msgmodule 的状态