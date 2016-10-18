import Vue from 'vue';
import Vuex from 'vuex';

//在vue 中使用 vuex
Vue.use(Vuex)

//创建一个对象来保存应用启动时的初始状态

const state={
	count:0
}

//创建一个对象来存储一系列我们接下来要写的  mutation 函数
const mutations = {
	//放置我们的状态变更函数
	INCREMENT(state, amount){
		state.count = state.count + amount
	}
}

//整合初始状态和变更函数，我们就得到了我们所需的 store
export default new Vuex.Store({
	state,
	mutations
})