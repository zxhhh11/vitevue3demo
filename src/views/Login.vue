<template>
  <div class="login-bg">
    <div class="bg pos-abs"></div>
    <div class="con pos-rel rad20 clearfix">
      <h1>登录[INCS-CSR]</h1>
      <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
   
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
    <el-form-item  prop="username">
      <el-input v-model="ruleForm.username" placeholder="请输入用户名"  size="large">
      </el-input>
    </el-form-item>
    <el-form-item  prop="pwd">
      <el-input v-model="ruleForm.pwd" placeholder="请输入密码"  size="large" show-password>
      </el-input>
    </el-form-item>
    <el-form-item  prop="region">
      <el-select v-model="ruleForm.region" placeholder="请选择登录坐席"  size="large">
        <el-option label="登录普通坐席" value="COMMON" />
        <el-option label="登录VIP坐席" value="VIP" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-col :span="12">
      <el-button
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
  
  </div>
 
</template>
<script lang="ts" setup>
  import { reactive, ref } from 'vue'
  import type { FormInstance, FormRules } from 'element-plus'
  import { Calendar, User} from '@element-plus/icons-vue'
  import { handleLogin } from '@/apis/user';
  import { useRouter } from 'vue-router';
import axios from 'axios';
  const router = useRouter();
  const formSize = ref('default')
  const ruleFormRef = ref<FormInstance>()
  const ruleForm = reactive({
    username: '',
    pwd:'',
    region: 'COMMON'
  })
//   const ruleForm: {
//   username: string;
//   pwd: string;
// } = { username: '', pwd: '' };
  const rules = reactive<FormRules>({
    username: [
      { required: true, message: 'Please input your username', trigger: 'blur' },
      { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    region: [
      {
        required: true,
        message: 'Please select Activity zone',
        trigger: 'change',
      },
    ],
    pwd:[{ required: true, message: 'Please input correct password', trigger: 'blur' }]
  })
  
  const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
      console.log('submit!',valid,ruleForm.username,fields)
      if (valid) {
        console.log('submit!',ruleForm)
        axios.post('/auth-center/jwt/login',{
        username: ruleForm.username,
        pwd: ruleForm.pwd,
        region: ruleForm.region
      }).then(res=>{
       if(res.data.status===200){
        router.push('/guestManagerMod');
       }
      })
      //   handleLogin({
      //   username: ruleForm.username,
      //   pwd: ruleForm.pwd,
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
    width: 400px;
    height: 400px;
    margin-left: -200px;
    margin-top: -200px;
    padding: 20px 30px;
    background: rgba(0,0,0,.3);
    border-radius: 20px;
}
.login-bg .con h1 {
    display: block;
    text-align: center;
    padding: 8px;
    color: #b50029;
    font-size: 22px;
    text-shadow: 0px 2px 0px rgb(255 255 255 / 70%);
    font-weight: 700;
}
.login-bg .con  .el-form{
  width: 100%;
  margin: 20px 0;
}
.login-bg .con  .el-form .el-input__wrapper{
  border-radius: 20px;
}
.login-bg .con  .el-form  .el-select{
  width: 100%;
}
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
</style>
