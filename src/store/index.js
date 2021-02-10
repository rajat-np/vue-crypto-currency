import Vue from 'vue'
import Vuex from 'vuex'
import * as mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cryptoCurrencies: [],
    stats: {},
    base: {},
    loading: true
  },
  actions,
  mutations,
  getters
})