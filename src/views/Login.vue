<template>
  <div class="login-bg">
    <div class="bg pos-abs"></div>
    <div class="con pos-rel rad20 clearfix">
      <h1>信用卡分行客服系统</h1>
      <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        :rules="rules"
      
        class="demo-ruleForm"
        :size="formSize"
        status-icon
     >
      <!--  label-position="right"
        label-width="100px" -->
        <el-form-item  prop="USERNO">
          <!-- label="员工编号：" -->
          <el-input  v-model="ruleForm.USERNO" placeholder="员工编号"  size="large">
            <template #prepend><el-icon><User /></el-icon></template>
          </el-input>
        </el-form-item>
        <!-- label="密码：" -->
        <el-form-item  prop="PWD" >
          <el-input v-model="ruleForm.PWD" placeholder="密码"  size="large" show-password>
            <template #prepend><el-icon><Lock /></el-icon></template>
          </el-input>
        </el-form-item>
        <!-- <el-form-item  prop="region">
          <el-select v-model="ruleForm.region" placeholder="请选择登录坐席"  size="large">
            <el-option label="登录普通坐席" value="COMMON" />
            <el-option label="登录VIP坐席" value="VIP" />
          </el-select>
        </el-form-item> -->
        <el-form-item  prop="vertifyCode" class="vertify-code">
          <!-- label="验证码：" -->
          <el-input  v-model="ruleForm.vertifyCode" placeholder="验证码"  size="large">
            <template #prepend><el-icon><Key /></el-icon></template>
          </el-input>
          <ImgVerify ref="verifyRef" />
        </el-form-item>
        <el-form-item>
          <el-col :span="12">
          <el-button @click = "changepwdFun"
        type="danger"
          text
          link
          >修改密码</el-button
        >
      </el-col>
      <el-col :span="6">
          <el-button color="#b50029" type="primary" @click="submitForm(ruleFormRef)" round
            >登录</el-button
          >
        </el-col>
          <el-col :span="6">
          <el-button color="#b50029" plain @click="resetForm(ruleFormRef)" round>重置</el-button>
        </el-col>
        </el-form-item>
      </el-form>
      <div class="pos-abs down">服务器信息: 172.22.4.160:7001</div>
    </div>
  
    <BaseModal
        :dialogVisiable="changepwd"
        @hide-dialog="hideDialog"
        title="修改密码"
        cancelText="关闭"
        :hasConfirm="false"
        :showFooter="false"
        width="40%"
      > 
      <el-form
        ref="changePwdRef"
        :model="changePwdForm"
        :rules="pwdRules"
        label-position="right"
        label-width="120px"
        class="change-pwd"
        :size="formSize"
        status-icon
     >
        <el-form-item  prop="USERNO" label="员工编号:" >
         
          <el-input  v-model="changePwdForm.USERNO" readonly size="large">
           
          </el-input>
        </el-form-item>
       
        <el-form-item  prop="USERNAME" label="姓名:">
          <el-input v-model="changePwdForm.USERNAME" readonly size="large" >
           
          </el-input>
        </el-form-item>
        <el-form-item  prop="PWD"  label="当前密码:">
          <el-input  v-model="changePwdForm.PWD"  size="large" show-password>
          </el-input>
        </el-form-item>
        <el-form-item  prop="NEWPWD"  label="新密码:">
          <el-input  v-model="changePwdForm.NEWPWD"  size="large" show-password>
          </el-input>
        </el-form-item>
        <el-form-item  prop="NEWPWDCFM"  label="确认新密码:" >
          <el-input  v-model="changePwdForm.NEWPWDCFM"  size="large" show-password>
          </el-input>
        </el-form-item>
        <el-form-item  prop="CHANGEPWDLASTTIME"  label="上次密码修改时间:">
          <el-input  v-model="changePwdForm.CHANGEPWDLASTTIME"  readonly size="large">
          </el-input>
        </el-form-item>
        <el-form-item>
      <el-col :span="6">
          <el-button color="#b50029" type="primary" @click="submitPwdForm(changePwdRef)" round
            >密码修改</el-button
          >
        </el-col>
          <el-col :span="6">
          <el-button color="#b50029" plain @click="resetPwdForm(changePwdRef)" round>关闭</el-button>
        </el-col>
        </el-form-item>
      </el-form>
  </BaseModal>
  </div>
 
</template>
<script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import type { FormInstance, FormRules,Action } from 'element-plus'
  import {ElMessageBox} from 'element-plus'
  import { Calendar, User} from '@element-plus/icons-vue'
  import { handleLogin } from '@/apis/user';
  import { useRouter } from 'vue-router';
  import BaseModal from '@/components/common/modal/index.vue';
  import ImgVerify from '@/components/common/ImgVerify.vue'
import axios from 'axios';
const verifyRef = ref();
  const router = useRouter();
  const formSize = ref('default')
  let changepwd = ref(false)
  const ruleFormRef = ref<FormInstance>()
  const changePwdRef = ref<FormInstance>()
  const ruleForm = reactive({
    USERNO: '',
    PWD:'',
    vertifyCode: ''
  })
  const changePwdForm = reactive({
    USERNO: '',
    USERNAME: '',
    PWD:'',
    NEWPWD:'',
    NEWPWDCFM:'',
    CHANGEPWDLASTTIME: '2020-12-31 01:01:01'
  })
//   const ruleForm: {
//   username: string;
//   PWD: string;
// } = { username: '', PWD: '' };
  const rules = reactive<FormRules>({
    USERNO: [
      { required: true, message: '请输入员工编号', trigger: 'blur' }
      // { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    // region: [
    //   {
    //     required: true,
    //     message: 'Please select Activity zone',
    //     trigger: 'change',
    //   },
    // ],
    PWD:[{ required: true, message: '请输入密码', trigger: 'blur' }]
  })
  const validatePwd = (rule: any, value: any, callback: any) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== changePwdForm.NEWPWD) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}
  const pwdRules =  reactive<FormRules>({
    PWD:[{ required: true, message: 'Please input current password', trigger: 'blur' }],
    NEWPWD:[{ required: true, message: 'Please input new password', trigger: 'blur' }],
    NEWPWDCFM:[{ required: true, message: 'Please confirm the new password', trigger: 'blur' },{ validator: validatePwd, trigger: 'blur' }]
  })

  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
      console.log('submit!',valid,ruleForm.USERNO,fields,ruleForm)
      if(verifyRef.value.imgCode){ //这个可以拿到验证码信息  判断当前验证码是否正确
        console.log(verifyRef.value.imgCode,'verifyRef.value.imgCode')
      }
  
      if (valid) {
        console.log('submit!',ruleForm)
        axios.post('/auth-center/jwt/login',{
        USERNO: ruleForm.USERNO,
        PWD: ruleForm.PWD,
        vertifyCode: ruleForm.vertifyCode
      }).then(res=>{
       if(res.data.status===200){
        router.push('/guestManagerMod');
       }
      })
      //   handleLogin({
      //   USERNO: ruleForm.USERNO,
      //   PWD: ruleForm.PWD,
      //   region: ruleForm.region
      // }).then((res: any) => {
      //   if (res) {
      //     console.log(res, 'login');
      //     if (res.data.status === 401) {
      //       router.push('/');
      //       // } else if (res.data.status === 200) {
      //     } else if (res.data.status === '000000') {
      //       router.push('/test');
      //     }
      //   }
      // });
      } else {
        console.log('error submit!', fields)
      }
    })
  }
  
  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
  },
  resetPwdForm = (pwdFormE: FormInstance | undefined) => {
    if (!pwdFormE) return
    pwdFormE.resetFields()
    changepwd.value = false
  },
 submitPwdForm = async (pwdFormE: FormInstance | undefined) => {
    if (!pwdFormE) return
    await pwdFormE.validate((valid, fields) => {
      changepwd.value = false
      ElMessageBox.alert('密码修改成功', '提示', {
    // if you want to disable its autofocus
    // autofocus: false,
      confirmButtonText: '确定',
      type: 'success',
       callback: (action: Action) => {
         console.log(action,'action')
         resetPwdForm(pwdFormE)
        }
      })
    })
  },
  hideDialog =()=>{
    changepwd.value = false
  },
  changepwdFun = ()=>{
    console.log(ruleForm,'ruleForm')
    if(!ruleForm.USERNO){
      ElMessageBox.alert('请先输入账号', '提示', {
    // if you want to disable its autofocus
    // autofocus: false,
      confirmButtonText: '确定',
      type: 'warning',
       callback: (action: Action) => {
         console.log(action,'action')
        }
      })
      return 
    }
    let userNo = ruleForm.USERNO
    changePwdForm.USERNO =userNo
    changePwdForm.USERNAME =userNo
    console.log(changePwdForm,ruleForm.USERNO)
    changepwd.value = true
  }
  
  const options = Array.from({ length: 10000 }).map((_, idx) => ({
    value: `${idx + 1}`,
    label: `${idx + 1}`,
  }))
  </script>
<style>
.login-bg{
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: #696969;
}
.login-bg .bg {
    top: 0px;
    left: 0px;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: url(@/assets/images/login_bg.png) no-repeat center center;
    background-size: 100% 100%;
}
.login-bg .con {
    top: 50%;
    left: 50%;
    z-index: 2;
    width: 460px;
    height: 460px;
    margin-left: -230px;
    margin-top: -230px;
    padding: 20px;
    background: rgba(0,0,0,.3);
    border-radius: 20px;
}
.login-bg .con h1 {
    display: block;
    text-align: center;
    padding: 8px;
    color: #b50029;
    font-size: 30px;
    text-shadow: 0px 2px 0px rgb(255 255 255 / 70%);
    font-weight: 700;
}
.login-bg .con  .el-form{
  width: 100%;
  margin: 60px 0 0;
}
/* .login-bg .con  .el-form .el-input__wrapper{
  border-radius: 20px;
} */
/* .login-bg .con  .el-form  .el-select{
  width: 100%;
} */
.login-bg .con .down {
    bottom: 0px;
    left: 0px;
    display: block;
    right: 0px;
    padding: 12px 10px;
    border-bottom-left-radius: 20px;
    font-size: 14px;
    border-bottom-right-radius: 20px;
    background: #b50029;
    text-align: right;
    color: #fff;
}
.el-form-item--default{
  margin-bottom: 30px;
}
.login-bg .demo-ruleForm .el-form-item__content{
  width: 80%;
  margin:0 9%
}
.login-bg  .el-form-item__label{
padding: 0;
}
.login-bg .vertify-code .el-input{
  width: 60%;
}
.change-pwd .el-form-item--default .el-form-item__content{
  margin:0 10px;
}
.change-pwd .el-form-item--default .el-form-item__content .el-input{
  width: 80%;
}
</style>
