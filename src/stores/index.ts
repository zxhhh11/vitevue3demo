
export { }  //需要使用时此行代码应该删除
// import { useCounterStore } from './counter'  //如果想要集中注册的话  就用这个文件
// import { useUserStore } from './user'
// import { useCommonStore } from './common'
// import usePermissionStore from './permission'
// export default function useStore() {
//   return {
//     userStore: useUserStore(),
//     counterStore: useCounterStore(),
//     commonStore: useCommonStore(),
//     permissionStore: usePermissionStore()
//   }
// }


/*********
 * piana  可以有两种写法  1. 与setup 同样语法糖的写法
 * 细节参考 useUserStore
 *  页面引入时 使用state 需要使用storeToRefs 先对其进行解构（也可以不解构直接调用）
 * 使用useUserStore中定义的方法时直接解构
 * 在Setup式中：ref()成为state属性，computed()变成getters,function变成actions
 *
 *
 * 写法2 参照原vuex 写法 分为 state、 gettters 和 actions  piana  中的actions 既可以写同步 也可以写异步
 * ***********/

// 数据持久化可以选择 pinia-plugin-persistedstate  截至2023年2月13日 该库在持续更新和维护中 且github star数居同类第一