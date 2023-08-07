<template>
  <div class="verify-box">
    <canvas ref="verify" :width="width" :height="height" @click="handleDraw"></canvas>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { setVerify } from '@/hooks/verify.js'
export default {
  setup() {
    const verify = ref(null);
    return {
      ...setVerify(verify)
    }
  },
};
</script>

<style scoped>
.verify-box {
  height: 40px;
  position: absolute;
  right: 0;
}
</style>