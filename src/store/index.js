import Vue from 'vue'
import Vuex from 'vuex'
import { getGroupsInfo } from '../api'
import local from '../utils/localStorage'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    groups: [],
    user_info: {
      // user_id: 1,
      // group_id: 0,
      // user_name: '二马',
      // group_name: '...',
      // state: 1
    },
    week: {}
  },
  mutations: {
    SET_GROUPS: (state, groups) => {
      state.groups = groups
      local.setItem('groups', groups)
    },
    SET_USER_INFO: (state, userInfo) => {
      const newVal = Object.assign({}, state.user_info, userInfo)
      state.user_info = newVal // 这样才能保证页面数据动态展示，vue推荐更改键值对时全部覆盖，而不是像上一行注释代码那样操作（页面数据不会动态更新）。
      local.setItem('user_info', newVal)
    },
    SET_STATE: (state, val) => {
      // state.user_info.state = val
      let obj = state.user_info
      obj.state = val
      state.user_info = obj
      local.setItem('user_info', obj)
    },
    SET_WEEK: (state, week) => {
      state.week = week
      local.setItem('week', week)
    },
    CLEAR: (state) => {
      state.user_info = {}
      local.clear()
    },
    REMOVE_KEY: (state, key) => {
      local.remove(key)
    }
  },
  actions: {
    async setGroups ({ commit }) {
      let arr = null
      if (!local.getItem('groups')) {
        const groups = await getGroupsInfo()
        arr = groups.groups
      } else {
        arr = JSON.parse(local.getItem('groups'))
      }
      commit('SET_GROUPS', arr)
    },
    async setUserInfo ({ commit }) {
      const obj = JSON.parse(local.getItem('user_info'))
      commit('SET_USER_INFO', obj)
    }
  }
})

export default store
