import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import mockData from '../api/mock'
import { MessageBox, Notification } from 'element-ui'

// 创建 axios 实例
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000, // 请求时间
  headers: {'Content-Type': 'application/json'}
})

// request 拦截器
service.interceptors.request.use(config => {
  // do something
  return config
}, error => {
  return Promise.reject(error)
})

// response 拦截器
service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data
    }
    if (response.status === 204) {
      return {}
    }
  },
  error => {
    if (!error.response) {
      Notification({
        message: error.message,
        offset: 60
      })
      return Promise.reject(error.response)
    } else if (error.response.status === 401) {
      MessageBox.confirm('登录状态过期或未登录，可以点击取消继续留在该页，或者重新登录', '确定登出', {
        confirmButtonText: '重新登录',
        cancelButtonText: '取消'
      }).then(() => {
        console.log('后续处理')
      })
      return Promise.reject(error)
    } else {
      Notification({
        message: error.message,
        offset: 60
      })
      return Promise.reject(error)
    }
  }
)

const mock = new MockAdapter(service, { delayResponse: 2000 })
mockData(mock)
if (process.env.API_MOCK === undefined || !process.env.API_MOCK) {
  mock.restore()
}

export default service
