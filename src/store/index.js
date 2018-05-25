import Vue from 'vue'
import Vuex from 'vuex'
import { getGroupsInfo } from '../api'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    groups: [],
    user_info: {
      // user_id: 1,
      // group_id: 0,
      // user_name: '二马',
      // group_name: '...',
      // status: 1
    }
  },
  mutations: {
    SET_GROUPS: (state, groups) => {
      state.groups = groups
    },
    SET_USER_INFO: (state, userInfo) => {
      // Object.assign(state.user_info, userInfo)
      state.user_info = Object.assign({}, state.user_info, userInfo) // 这样才能保证页面数据动态展示，vue推荐更改键值对时全部覆盖，而不是像上一行注释代码那样操作（页面数据不会动态更新）。
    },
    SET_STATE: (state, val) => {
      // state.user_info.state = val
      let obj = state.user_info
      obj.state = val
      state.user_info = obj
    },
    CLEAR: (state) => {
      state.user_info = {}
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
