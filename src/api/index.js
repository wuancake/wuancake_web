import fetch from '../utils/fetch'

export function test () {
  return fetch({
    url: '/',
    method: 'get'
  })
}
