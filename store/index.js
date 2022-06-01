// Vuex
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	// state是数据源
	state: {
		// historyItems: []
		// 用下面的方式更持久，先从本地读取
		historyItems: uni.getStorageSync('__history')|| []
	},
	// 改变数据源
	mutations: {
		SET_HISTORY_ITEMS(state, history) {
			state.historyItems = history
		},
		CLEAR_HISTORY(state){
			state.historyItems = []
		}
	},
	actions: {
		// set_history是函数入口
		set_history({commit,state},history) {
			let list = state.historyItems
			list.unshift(history)
			
			uni.setStorageSync('__history',list)
			commit('SET_HISTORY_ITEMS', list)
		},
		clear_history({commit}) {
			uni.removeStorageSync("__history")
			commit('CLEAR_HISTORY')
		}
	}
})

export default store
