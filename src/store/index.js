import Vue from 'vue'
import Vuex from 'vuex'
import { getGroupsInfo } from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    groups: [],
    user_info: {
      user_id: 1,
      user_name: '二马',
      status: 1
    },
    group_info: {
      id: 1,
      name: '产品经理组'
    },
    state: null,
    group_id: 1
  },
  mutations: {
    SET_GROUPS: (state, groups) => {
      state.groups = groups
    },
    SET_USER_INFO: (state, userInfo) => {
      state.user_info = userInfo
    },
    SET_STATE: (state, val) => {
      state.state = val
    }
  },
  actions: {
    async setGroups ({ commit }) {
      const groups = await getGroupsInfo()
      console.log('groups')
      console.log(groups.groups)
      commit('SET_GROUPS', groups.groups)
      return groups
    }
    // async setUserInfo ({ commit }) {
    //   const userInfo = await getUserInfo()
    // }
  }
})

export default store
