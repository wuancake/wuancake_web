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
    userId: uid
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

export function recoverPassword (params) { // 找回密码
  const data = params
  return fetch({
    url: '/forget',
    method: 'post',
    data: data
  })
}

export function saveWeekly (params) { // 保存周报
  return fetch({
    url: '/submit',
    method: 'post',
    data: params
  })
}

export function login (params) { // 注册
  return fetch({
    url: '/regist',
    method: 'post',
    data: params
  })
}

export function log (params) {
  return fetch({
    url: '/login',
    method: 'post',
    data: params
  })
}

export function weeklys (params) { // 获取周报列表
  return fetch({
    url: '/myweekly',
    method: 'post',
    data: params
  })
}

export function quitGroup (params) { // 退出分组接口
  return fetch({
    url: '/quitGroup',
    method: 'post',
    data: params
  })
}
