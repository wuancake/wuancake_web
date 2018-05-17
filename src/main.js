// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import NProgress from 'nprogress' // 进度条
// import 'nprogress/nprogress.css' // 进度条样式
import './common/styles/my-nprogress.css' // 自定义 progress 样式
import 'normalize.css/normalize.css' // normalize.css 样式格式化
import { Notification, MessageBox, Loading, Message, Icon, Input, Form, FormItem, Table, TableColumn, Pagination } from 'element-ui'
import iconSvg from './components/iconSvg' // icon-svg 组件

Vue.component('icon-svg', iconSvg) // 全局注册 icon-svg 组件

Vue.use(Loading.directive)
Vue.use(Icon)
Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Pagination)

Vue.prototype.$loading = Loading.service
Vue.prototype.$notify = Notification
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message

router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.meta.title) {
    document.title = to.meta.title // 基于路由信息设置 title
  }
  next()
})

router.afterEach(() => {
  NProgress.done() // 结束 progress
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
