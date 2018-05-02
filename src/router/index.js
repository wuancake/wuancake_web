import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/index'
import Layout from '@/components/layout'
import Leave from '@/views/leave'

Vue.use(Router)

export default new Router({
  // mode: 'history', // 路由 history 模式
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: '/',
          component: Home,
          meta: {
            title: '午安考勤'
          }
        }
      ]
    },
    {
      path: '/helloworld',
      component: Layout,
      children: [
        {
          path: '',
          component: HelloWorld,
          meta: {
            title: 'hello,world - 午安考勤'
          }
        }
      ]
    },
    {
      path: '/leave',
      component: Layout,
      children: [
        {
          path: '',
          component: Leave,
          meta: {
            title: '申请请假 - 午安考勤'
          }
        }
      ]
    }
  ]
})
