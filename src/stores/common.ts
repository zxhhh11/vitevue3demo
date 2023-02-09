import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCommonStore = defineStore("common", () => {
  const editableTabsVal = ref('6');


  const chgEditableTabsVal = (val: string) => {
    editableTabsVal.value = val
  }
  //   const customer =ref({
  //     customerName:'赵某某',
  //     IDtype:'身份证',
  //     IDNo:'292848490839894848',
  //     cardNo:'6481322784654',
  //     customerNo:'55874411',
  //     customerType:'VIP'
  //   })
  //   /********
  //    *  doubleCount这么定义 属于gettters 即还是状态值  所以在组件中使用可以用storeToRefs使用 标签中使用时直接用
  //    * getters 具有缓存特性  当页面调用 doubleCount 不论几次 只要count不变 doubleCount就只执行一次计算 性能上来说这个更好
  //    * ********/ 
  //   const addUser = computed(() => {
  //     console.log('getters 调用了')
  //    return user.value + ' dengdeng'
  //   }); 
  //   async function changeUser(name:string) {
  //     setTimeout(()=>{
  //         customer.value = {...customer.value,customerName:name}
  //     },1000)

  //   }
  // getters
  // function doubleCount() { //doubleCount这么定义相当于function 所以组件内使用时直接解构就行了

  //   return count.value * 2;
  // }
  return { editableTabsVal, chgEditableTabsVal };
});