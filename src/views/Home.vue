<script setup lang="ts">
import { getmark } from "@/utils/watermark";
import {onMounted,onUnmounted} from 'vue'
import SideBar from '@/components/common/SideBar.vue'
import Header from '@/components/common/Header.vue'
const { watermark } = getmark();
    // onMounted(() => {
    //   watermark('WaterMark',400,300);//水印名  后面两个参数用来控制水印密度
    // });
    // onUnmounted(() => {
    //   watermark('');
    // });
    const handleKeyDown = (e: any) => {
  if (e.keyCode === 122) {
    e.preventDefault(); // 阻止默认事件
    e.stopPropagation(); // 阻止冒泡事件
    e.cancelBubble = true;
    e.returnValue = false;
    return false;
  } else if (e.keyCode === 27) {
    e.preventDefault(); // 阻止默认事件
    e.stopPropagation(); // 阻止冒泡事件
  }
};
window.addEventListener('keydown', handleKeyDown, true);
const keyDown = () => {
    document.onkeydown = (e) => {
      // console.log(e, 'e  key down in document');
      //事件对象兼容
      // let e1 = e || window.event || arguments.callee.caller.arguments[0]
      let e1 = e || window.event;
      let key = Number(e1.keyCode);
      if ((e1 && key > 47 && key < 58) || (key > 64 && key < 91)) {
        const inputs:any = document.getElementsByTagName('input');
        const textAreas:any = document.getElementsByTagName('textarea');
        let allIpts = [...inputs, ...textAreas];
        let isFocusFlag = false;
        for (let i = 0; i < allIpts.length; i++) {
          if (allIpts[i] == document.activeElement) {
            isFocusFlag = true;
            break;
          }
        }
        if (!isFocusFlag) {
          document.getElementById('quickSearch')?.focus();
        }
      }
    };
  }
  onMounted(() => {
  keyDown(); // 监听键盘
 // watermark('李某某 2023-01-03',400,300);//水印名  后面两个参数用来控制水印密度
});
  onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown, true);
});
</script>

<template>
   
   <div class="common-layout">
    <el-container class="box">
     <Header></Header>
      <el-container>
       <SideBar></SideBar>
        <el-main><RouterView /></el-main>
      </el-container>
    </el-container>
  </div>
 

</template>
