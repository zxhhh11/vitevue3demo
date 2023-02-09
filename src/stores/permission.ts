// @ts-nocheck
import { shallowRef, ref, computed } from "vue";
import { defineStore } from "pinia";
// import {dynamicRoutes} from '@/utils/routers'
import router, { routes } from '@/router'
import {getRouters} from '@/apis/menu'
import Layout from '@/layout/index.vue'
import {dynamicRoutes} from '@/mock/menu'
// 匹配views里面所有的.vue文件
const modules = import.meta.glob('@/views/**/*.vue')
const usePermissionStore = defineStore("permission", { 
    state: () => ({
        routes: [],
        addRoutes: [],
        defaultRoutes: [],
        topbarRouters: [],
        sidebarRouters: [],
        isFlag:false  // 临时的 后续应该用其它参数来代表判断用户权限
      }),
      actions:{
        setRoutes(routes:any) {
          this.addRoutes = routes
          this.routes = routes.concat(routes)
        },
        setFlag(){
          this.isFlag = true
        },
        setSidebarRouters(routes) {
          this.sidebarRouters = routes
        },
        // resetRouters(){
        //   const rewriteRoutes = filterAsyncRouter(dynamicRoutes, false, true)
        //    rewriteRoutes.forEach(r => {
        //         console.log(r.path,'route.path')
        //           router.addRoute(r) // 动态添加可访问路由表
                
        //       })
        // },
        generateRoutes(roles:any='') {
            return new Promise(resolve => {
              // 向后端请求路由数据
              getRouters().then(res => {
               
                const sdata = JSON.parse(JSON.stringify(res.data.data))
                const rdata = JSON.parse(JSON.stringify(res.data.data))
                // const defaultData = JSON.parse(JSON.stringify(res.data))
                 const sidebarRoutes = filterAsyncRouter(sdata)
                 const rewriteRoutes = filterAsyncRouter(rdata, false, true)
                // const defaultRoutes = filterAsyncRouter(defaultData)
                // const asyncRoutes = filterDynamicRoutes(dynamicRoutes)
                //  dynamicRoutes.forEach(route => { router.addRoute(route) })
                // console.log(rewriteRoutes,'rewriteRoutes')
                sessionStorage.setItem('router',JSON.stringify(rewriteRoutes))
                 this.setRoutes(rewriteRoutes)
                 this.setSidebarRouters(sidebarRoutes)
                // this.setDefaultRoutes(sidebarRoutes)
                // this.setTopbarRoutes(defaultRoutes)
                resolve(rewriteRoutes)
              })
            })
          }
      }
});
export default usePermissionStore



export const loadView = (view:any) => {
    let res;
    for (const path in modules) {
      const dir = path.split('views/')[1].split('.vue')[0];
      if (dir === view) {
        res = () => modules[path]();
      }
    }
    return res;
}
function filterChildren(childrenMap:any, lastRouter = false) {
    var children :any= []
    childrenMap.forEach((el:any, index:any) => {
      if (el.children && el.children.length) {
        if (el.component === 'ParentView' && !lastRouter) {
          el.children.forEach((c:any) => {
            c.path = el.path + '/' + c.path
            if (c.children && c.children.length) {
              children = children.concat(filterChildren(c.children, c))
              return
            }
            children.push(c)
          })
          return
        }
      }
      if (lastRouter) {
        el.path = lastRouter.path + '/' + el.path
      }
      children = children.concat(el)
    })
    return children
  }
// console.log(modules,'modules')
// console.log(loadView('guestManagerMod/guestManagerModify'),'loadView')

// 遍历后台传来的路由字符串，转换为组件对象
function filterAsyncRouter(asyncRouterMap:any, lastRouter = false, type = false) {
    return asyncRouterMap.filter((route:any) => {
      if (type && route.children) {
        route.children = filterChildren(route.children)
      }
      if (route.component) {
        // Layout ParentView 组件特殊处理
        if (route.component === 'Layout') {
          route.component = shallowRef(Layout)
        // } else if (route.component === 'ParentView') {
        //   route.component = ParentView
        // } else if (route.component === 'InnerLink') {
        //   route.component = InnerLink
         } else {
            // console.log(route.component,'loadView(route.component)00')
          route.component = loadView(route.component)
          // console.log(route.component,'loadView(route.component)11')
         }
      }
      if (route.children != null && route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, route, type)
      } else {
        delete route['children']
        delete route['redirect']
      }
      return true
    })
  }
 