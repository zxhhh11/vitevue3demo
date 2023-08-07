## node 环境 node  v18.12.1  npm 8.19.2
CRS 可启用代码
项目具备功能：
1. 配置跨域
2. mockjs 模拟后端接口 配合 vite-plugin-mock使用
3. 封装axios
4. 配置动态路由和固定路由（路由的两种实现形式）
5. 使用piana 进行全局状态管理
// 6. 使用pinia-plugin-persistedstate 对store进行状态持久化处理  //暂时注释掉了 相关代码因为 setup 形式的store 配置persist 会报错   动态路由的store 配置persist 页面刷新会显示白屏 
7. 使用element-plus UI组件库
8. 使用nprogress 来显示页面切换进度
9. 使用lodash-es 来进行防抖和节流
10. 封装table 组件实现表格的动态渲染
11.  *** 全局安装了serve 但是打包后在dist 文件夹下运行serve 指令 页面只有/index 页面 并且公共页面部分都消失了
12. 项目中加水印 支持自定义密度
13. 登陆页包含前端自实现的验证码
# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
