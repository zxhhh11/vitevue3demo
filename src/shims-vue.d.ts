//解决页面引入.vue 文件报错
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

/********使用ts时用来帮助定义图片引入**********/ 
declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'

declare module '*.ts'
declare module '*.js'
declare module '*.json'

declare interface Fn<T = any, R = T> {
  (...arg: T[]): R;
}