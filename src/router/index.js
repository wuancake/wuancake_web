import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/index'
import Layout from '@/components/layout'
import Leave from '@/views/leave'
import Group from '@/views/group'
import ChangePassword from '@/views/changePassword'
import Eamil from '@/views/email'

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
    },
    {
      path: '/group',
      component: Layout,
      children: [
        {
          path: '',
          component: Group,
          meta: {
            title: '选择分组 - 午安考勤'
          }
        }
      ]
    },
    {
      path: '/changePassword',
      component: Layout,
      children: [
        {
          path: '',
          component: ChangePassword,
          meta: {
            title: '修改密码 - 午安考勤'
          }
        }
      ]
    },
    {
      path: '/email',
      component: Layout,
      children: [
        {
          path: '',
          component: Eamil,
          meta: {
            title: '找回密码 - 午安考勤'
          }
        }
      ]
    }
  ]
})
