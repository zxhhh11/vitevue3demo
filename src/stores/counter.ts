import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(20);
  /********
   *  doubleCount这么定义 属于gettters 即还是状态值  所以在组件中使用可以用storeToRefs使用 标签中使用时直接用
   * getters 具有缓存特性  当页面调用 doubleCount 不论几次 只要count不变 doubleCount就只执行一次计算 性能上来说这个更好
   * ********/
  const doubleCount = computed(() => {
    console.log('getters 调用了')
    return count.value * 2
  });
  function increment() {
    count.value = count.value + 5;
  }
  // getters
  // function doubleCount() { //doubleCount这么定义相当于function 所以组件内使用时直接解构就行了

  //   return count.value * 2;
  // }
  return { count, doubleCount, increment };
});
