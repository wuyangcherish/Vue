// action 会收到store 作为他的第一个参数

export const incrementCounter = function ({dispatch, state}){
	dispatch('INCREMENT',1)
}
