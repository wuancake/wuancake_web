import fetch from '../utils/fetch'

export function test () {
  return fetch({
    url: '/',
    method: 'get'
  })
}

export function getGroupsInfo () { // 获取分组信息
  return fetch({
    url: '/findAllGroupInfo',
    method: 'post'
  })
}

export function getWeeklyStatus (uid) { // 获取周报状态
  const data = {
    user_id: 1
  }
  return fetch({
    url: '/main',
    method: 'post',
    data: data
  })
}

export function applyLeave (params) { // 申请请假
  const data = params
  return fetch({
    url: '/leave',
    method: 'post',
    data: data
  })
}

export function cancelLeave (params) { // 取消请假
  const data = params
  return fetch({
    url: '/cancelLeave',
    method: 'post',
    data: data
  })
}

export function saveGroup (params) { // 保存分组信息
  const data = params
  return fetch({
    url: '/group',
    method: 'post',
    data: data
  })
}
