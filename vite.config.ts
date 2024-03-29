import { fileURLToPath, URL } from "node:url";
import { resolve } from 'path'
// import { createHash } from 'crypto'
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
// import { UserConfigExport, ConfigEnv } from 'vite'
import { viteMockServe } from 'vite-plugin-mock'
// import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    vueJsx(),
    viteMockServe({
      mockPath: "./src/mock", // 解析，路径可根据实际变动
      localEnabled: true // 此处可以手动设置为true，也可以根据官方文档格式
    })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),  //配置路径别名
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
  },
  // 强制预构建插件包
  optimizeDeps: {
    include: ['axios'],
  },
  // build: {
  //   outDir: 'deploy/dist',
  //   rollupOptions: {
  //     output: {
  //       chunkFileNames: 'static/js/[name]-[hash].js',
  //       entryFileNames: 'static/js/[name]-[hash].js',
  //       assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
  //     }
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

  //  server: {
  //   port:9855,
  //   open:true, // 在服务器启动时自动在浏览器中打开应用程序
  //   proxy: {
  //     // '/login': {
  //     //   target: 'http://172.20.10.2:9855',
  //     //   changeOrigin: true,
  //     //   // rewrite: (path) => {
  //     //   //   console.log(path)
  //     //   //  return path.replace(/^\/login/, '')
  //     //   // },// 不可以省略rewrite
  //     //   // pathRewrite: { '^/api': '' },
  //     //   // ws:false
  //     //   // secure: false
  //     //   rewrite:path => path.replace(/^\/api/, '')
  //     // }
  //     // 下面的是最后生效的
  //     '/api': {
  //       target: 'http://172.20.10.2:9855',
  //       changeOrigin: true,
  //       rewrite:path => path.replace(/^\/api/, '')  //反向代理配置，注意rewrite写法，开始没看文档在这里踩了坑
  //     }
  //   },
  //   headers: {
  //     'Access-Control-Allow-Origin': '*'
  //   }
  // }
});
