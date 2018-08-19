import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/index'
import Layout from '@/components/layout'
import Leave from '@/views/leave'
import Group from '@/views/group'
import ChangePassword from '@/views/changePassword'
import Eamil from '@/views/email'
import Edit from '@/views/edit'
import Weeklys from '@/views/weeklys'
import Login from '@/views/login'
import Log from '@/views/login/login'
import exitGroup from '@/views/exitGroup'
import account from '@/views/account'

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
    },
    {
      path: '/edit',
      component: Layout,
      children: [
        {
          path: '',
          component: Edit,
          meta: {
            title: '撰写周报 - 午安考勤'
          }
        }
      ]
    },
    {
      path: '/weeklys',
      component: Layout,
      children: [
        {
          path: '',
          component: Weeklys,
          meta: {
            title: '周报详情 - 午安考勤'
          }
        }
      ]
    },
    {
      path: '/login',
      component: Login,
      meta: {
        title: '注册 - 午安考勤'
      }
    },
    {
      path: '/log',
      component: Log,
      meta: {
        title: '登录 - 午安考勤'
      }
    },
    {
      path: '/exitGroup',
      component: Layout,
      children: [
        {
          path: '',
          component: exitGroup,
          meta: {
            title: '退出分组 - 午安考勤'
          }
        }
      ]
    },
    {
      path: '/account',
      component: Layout,
      children: [
        {
          path: '',
          component: account,
          meta: {
            title: '我的账号 - 午安考勤'
          }
        }
      ]
    }
  ]
})
