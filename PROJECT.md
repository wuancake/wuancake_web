# 开发文档

> 关于项目开发的介绍和规范

## 介绍
项目使用前后端分离模式开发，使用 axios 管理请求，前期开发使用 mock.js 模拟请求，后期接入后台服务进行调试。项目使用了 Element-ui ，由于页面非常少，故采用按需引入的方式。
具体如何引入组件，参见 [Element-ui](http://element-cn.eleme.io/#/zh-CN)。由于项目很小，状态管理也不再使用 vuex ，我们自己实现简易的状态管理功能。

### mock 使用介绍
``` js
// 发起请求
MockAdapter.onGet('/').reply(200, {
    test: 'test success'
})
.onGet('/index').reply(200, {
    data: {...}
})
```
实现此功能使用到的插件 [axios](https://www.npmjs.com/package/axios) 、 [mock.js](http://mockjs.com/) 和 [axios-mock-adapter](https://www.npmjs.com/package/axios-mock-adapter)



## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).