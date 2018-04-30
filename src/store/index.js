import Vue from 'vue'
import Vuex from 'vuex'
import { getGroupsInfo } from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    groups: []
  },
  mutations: {
    SET_GROUPS: (state, groups) => {
      state.groups = groups
    }
  },
  actions: {
    async setGroups ({ commit }) {
      const groups = await getGroupsInfo()
      commit('SET_GROUPS', groups.groups)
      return groups
    }
  }
})

export default store
