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
