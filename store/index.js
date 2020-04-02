import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import state from './state.js'
import mutations from './mutations.js'
import * as getters from './getters.js'
import * as actions from './actions'
const store = new Vuex.Store({
	state,
	mutations,
	getters,
	actions
})
export default store
