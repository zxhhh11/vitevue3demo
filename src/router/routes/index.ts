import type { RouteRecordRaw } from 'vue-router';

let configArray: RouteRecordRaw[] = [];

// const files = require.context('.', true, /\.ts$/);
// const files = import.meta.globEager('.', true, /\.ts$/);
const files = import.meta.glob('./*.ts', { eager: true })

Object.values(files).forEach((val:any) => {

  const mod = val["Router"]
  const modList = Array.isArray(mod) ? [...mod] : [mod];
  configArray.push(...modList);
});

 export default configArray;
