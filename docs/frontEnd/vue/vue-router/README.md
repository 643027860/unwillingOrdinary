---

title: Vue配置路由

date: 2020-12-09

sidebar: 'auto'

categories:

- Vue

tags:

- router

publish: true

---

::: tip

从头学Vue，让你从小白到自主开发的全过程

:::

<!-- more -->

## 介绍vue-router

  路由就是SPA（单页应用）的路径管理器，vue-router是Vue.js官方的路由插件，它和vue.js是深度集成的，适合用于构建单页面应用。
vue的单页面应用是基于路由和组件的，路由用于设定访问路径，并将路径和组件映射起来。传统的页面应用，是用一些超链接来实现页面切换和跳转的。
在vue-router单页面应用中，则是路径之间的切换，也就是组件的切换。路由模块的本质 就是建立起url和页面之间的映射关系。
                              
                            
## 使用vue-router

### 1. 下载vue-router插件

```html
npm install -s vue-router
```

### 2. 引入vue-router并注册路由

在router文件夹下的`index.js`中引入vue-router并注册路由：

```html
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../pages/home/home'
import Apk from '../pages/home/apk/apk'
import Login from '../pages/login/login'

export default new VueRouter({
  routes:[
    {
      path:'/home',
      name:'home',
      component:Home,
      children:[
        {
          path:'apk',
          name:'apk',
          component:Apk,
        },
      ],
       redirect:{name: 'apk'}
    },
    {
      path:'/login',
      name:'login',
      component:Login,
    },
    {
      path:'/',
      redirect:to => {
        return 'login'
      }
    },
  ]
})
```

### 3. 在`main.js`文件中引入router

```html
import router from './router'

var vm = new Vue({
    el: '#app',
    render: h => h(App),
    router
})
```
### 4. 组件间跳转

(1) 通过`router-link`来进行跳转：

```html
<router-link to="/home">Home</router-link>
```

(2) 通过`this.$router`来跳转：

```html
this.$router.go(-1) ：代表着后退

this.$router.go(1)：代表着前进

this.$router.push({    //切换到path为home的路由,能回退上一个路由
        path:'home'
       });
this.$router.push(    //切换到path为home的路由,能回退上一个路由
         '/home'
        );

this.$router.replace({    //切换到name为home的路由,不能回退上一个路由！
        name:'home'
       });
this.$router.replace(    //切换到name为home的路由,不能回退上一个路由！
         'home'
        );
```

## vue-router其他小知识

### 1. 路由懒加载：不再一开始引入全部组件，而是按需加载路由组件

```html
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/home',
      name:'home',
      component:resolve => require(['../pages/home/home'],resolve),
      children:[
        {
          path:'apk',
          name:'apk',
          component:resolve => require(['../pages/home/apk/apk'],resolve),
        }
      ],
      redirect:{name: 'apk'}
    },
    {
      path:'/login',
      name:'login',
      component:resolve => require(['../pages/login/login'],resolve),
    },
    {
      path:'/',
      redirect:to => {
        return 'login'
      }
    }
  ]
})
```

### 2. 路由跳转的时候传递参数：

(1) 通过`query`

跳转时携带参数：

```html
this.$router.push({name:"home",query:{id:JSON.stringify(id)})
```

在组件获取参数:

```html
var id = this.$route.query.id
```

(2) 通过`params`

跳转时携带参数：

```html
this.$router.push({name:"home",params:{id:JSON.stringify(id)})
```

在组件获取参数:

```html
var id = this.$route.params.id
```

(3) 二者的区别：

1. 页面刷新后，query携带的参数不会消失，但params携带的参数会消失！
2. params携带的参数要想像params一样刷新后仍保留则需要在配置相应组件路由时添加一个占位参数：

```html
// 举个例子：router.js下相应的组件地址后加一个占位参数
path:'/home:id',
```

### 3. 通过路由守卫防止非法跳转：

在需要权限才能进入组件的路由在注册时应添加`meta`

```html
{
    path:'/home',
    name:'home',
    meta:{requireAuth:true},  //需要权限才能跳转
    component:resolve => require(['../pages/home/home'],resolve),
},
```

在main.js全局注册路由守卫：

```html
router.beforeEach((to,from,next)=>{
    if(to.meta.requireAuth == true){ // 判断是否需要权限进入的路由
        if(!Auth){                   // 获取不到令牌信息跳转到登录界面，令牌在此需要你自己获取来判断是否有效
            next({
                path: '/login'
            })
        }else{                       // 获取到令牌信息，跳转到对应组件
            return next();
        }
    }else{                           // 不需要权限的路由直接进行跳转
        return next();
    }
})
```

<!-- more -->
