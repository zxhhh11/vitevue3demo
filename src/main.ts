import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import "./assets/main.css";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './assets/iconfont/iconfont.js';
const pinia = createPinia();
// pinia.use(piniaPluginPersistedstate);
const app = createApp(App);
app.config.errorHandler = (err, vm, info) => {
  console.log('[全局异常]', err, vm, info);
};
app.use(createPinia());
// app.use(pinia)


app.use(router);
app.use(ElementPlus, {
    locale: zhCn,
  })
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.mount("#app");
