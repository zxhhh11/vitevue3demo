import { fileURLToPath, URL } from "node:url";
import { resolve } from 'path'
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
// import { UserConfigExport, ConfigEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
// import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/
export default defineConfig({
 
  plugins: [
    vue(), 
    vueJsx(),
    viteMockServe({
      mockPath: "./src/mock", // 解析，路径可根据实际变动
      localEnabled: true // 此处可以手动设置为true，也可以根据官方文档格式
    })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // 构建 此方法不推荐 打包后样式页面会出现问题  需要再调整
  // build: {
  //   chunkSizeWarningLimit:1500,
  //   rollupOptions: {
  //       output:{
  //           manualChunks(id) {
  //               if (id.includes('node_modules')) {
  //                   return id.toString().split('node_modules/')[1].split('/')[0].toString();
  //               }
  //           }
  //       }
  //   }
  // },
  //  //  构建
  //  build: {
  //   outDir: 'dist', //指定打包输出路径
  //   assetsDir: 'assets', //指定静态资源存放路径
  //   cssCodeSplit: true, //css代码拆分,禁用则所有样式保存在一个css里面
  //   sourcemap: false, //是否构建source map 文件

  //   // 生产环境取消 console
  //   minify: 'terser',
  //   terserOptions: {
  //     compress: {
  //       drop_console: true,
  //       drop_debugger: true
  //     }
  //   },

  //   //会打包出 css js 等文件夹 目录显得清晰
  //   rollupOptions: {
  //     output: {
  //       chunkFileNames: 'js/[name]-[hash].js',
  //       entryFileNames: 'js/[name]-[hash].js',
  //       assetFileNames: '[ext]/[name]-[hash].[ext]'
  //     }
  //   }
  // },
  base: './',
   server: {
    // port:8080,
    port:9855,
    // client:{
    //   webSocketURL:'ws://192.168.106.54:8080/ws'
    // },
    open:true,
    proxy: {
      // '/login': {
      //   target: 'http://172.20.10.2:9855',
      //   changeOrigin: true,
      //   // rewrite: (path) => {
      //   //   console.log(path)
      //   //  return path.replace(/^\/login/, '')
      //   // },// 不可以省略rewrite
      //   // pathRewrite: { '^/api': '' },
      //   // ws:false
      //   // secure: false
      //   rewrite:path => path.replace(/^\/api/, '')
      // }
      // 下面的是最后生效的
      '/api': {
        target: 'http://172.20.10.2:9855',
        changeOrigin: true,
        // ws:false
        // secure: false
        rewrite:path => path.replace(/^\/api/, '')
      }
    },
    // headers: {
    //   'Access-Control-Allow-Origin': '*'
    // },
    // overlay: {
    //   warnings: false,
    //   errors: false
    // },
    // hot: true
  }
});
