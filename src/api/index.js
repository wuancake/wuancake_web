import fetch from '../utils/fetch'

export function test () {
  return fetch({
    url: '/',
    method: 'get'
  })
}

export function getGroupsInfo () {
  return fetch({
    url: '/findAllGroupInfo',
    method: 'post'
  })
}
