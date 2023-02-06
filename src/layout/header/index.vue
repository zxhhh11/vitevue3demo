<script lang="ts" setup>
// import logoImg from '@/assets/images/head_logo.png';
import { ref,reactive,toRefs } from 'vue'
import { UserFilled } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const logout = ()=>{
  router.push('/login')
}

</script>

<template>
 <el-header>
    <!-- <span class="logo">
        <img :src="logoImg" alt="" />
    </span> -->
    <span class="title">信用卡分行服务系统</span>
  
  <div class="user-avatar">  <el-avatar :icon="UserFilled" />&nbsp; 您好，李某某（0000005）&nbsp; <el-icon size="28px" class="logout" @click="logout"><SwitchButton /></el-icon></div>
 </el-header>
</template>

<style>
.el-header{
    display: flex;
}
.el-header .el-menu{
    height: 60px;
}
/* .logo {
  height: 80px;
  line-height: 80px;
}
.logo img {
    width: 218px;
    height: 78px;
    margin: 1px;
} */

.call{
  display: flex;
  padding: 0 16px;
  cursor: pointer;
  width: 90px;
  text-align: center;
  flex-direction: column;
  height: 60px;
  align-items: center;
}
.call .text{
  height: 40px;
    line-height: 40px;
}
.call .icon{
  flex: 1;
  width: 30px;
  vertical-align: middle;
  padding-top: 14px;
}
.panel {
  border-radius: 0;
}
.panel-default {
  border-color: #cdcdcd;
}
.panel {
  background-color: #fff;
  border: none;
  box-shadow: 0 1px 1px rgb(0 0 0 / 5%);
}
.m-phonePanel .tips {
  margin: 15px 0 15px;
}
.m-phonePanel .pull-right {
  width: 230px;
}
.m-phonePanel .pull-right .btn-group .btn {
  width: 50px;
  margin-right: 4px;
  text-align: center;
  padding-left: 0;
  padding-right: 0;
  color: #ffffff;
  transition: all 0.2s;
}
.m-phonePanel .pull-right .btn-group .btn:last-child {
  margin-right: 0;
}
.m-phonePanel .pull-right .btn-group .btn-dial {
  background-color: #27a9e3;
}
.m-phonePanel .pull-right .btn-group .btn-dial:hover {
  background-color: #198bbe;
}
.m-phonePanel .pull-right .btn-group .btn-clear {
  background-color: #ddd4cb;
}
.m-phonePanel .pull-right .btn-group .btn-clear:hover {
  background-color: #c9bbac;
}
.m-phonePanel .pull-right .btn-group .btn-cancel {
  background-color: #ccddcb;
}
.m-phonePanel .pull-right .btn-group .btn-cancel:hover {
  background-color: #aec9ac;
}
.m-phonePanel .pull-right .btn-group .btn-select {
  background-color: #d6e8f0;
}
.m-phonePanel .pull-right .btn-group .btn-select:hover {
  background-color: #b1d3e2;
}
.m-phonePanel .table {
  width: 208px;
  font-size: 16px;
  font-family: arial, sans-serif;
  margin-bottom: 0;
}
.m-phonePanel .table tbody td {
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.m-phonePanel .table tbody td:hover {
  cursor: pointer;
  background-color: #f1f1f1;
}
.panel-default {
  border-color: #ddd;
}
.panel-default > .panel-heading {
  color: #333;
  background-color: #f5f5f5;
  border-color: #ddd;
}
.panel-default > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #ddd;
}
.panel-default > .panel-heading .badge {
  color: #f5f5f5;
  background-color: #333;
}
.panel-default > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #ddd;
}
.panel-primary {
  border-color: #337ab7;
}
.panel-primary > .panel-heading {
  color: #fff;
  background-color: #337ab7;
  border-color: #337ab7;
}
.panel-primary > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #337ab7;
}
.panel-primary > .panel-heading .badge {
  color: #337ab7;
  background-color: #fff;
}
.panel-primary > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #337ab7;
}
.panel-success {
  border-color: #d6e9c6;
}
.panel-success > .panel-heading {
  color: #3c763d;
  background-color: #dff0d8;
  border-color: #d6e9c6;
}
.panel-success > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #d6e9c6;
}
.panel-success > .panel-heading .badge {
  color: #dff0d8;
  background-color: #3c763d;
}
.panel-success > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #d6e9c6;
}
.panel-info {
  border-color: #bce8f1;
}
.panel-info > .panel-heading {
  color: #31708f;
  background-color: #d9edf7;
  border-color: #bce8f1;
}
.panel-info > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #bce8f1;
}
.panel-info > .panel-heading .badge {
  color: #d9edf7;
  background-color: #31708f;
}
.panel-info > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #bce8f1;
}
.panel-warning {
  border-color: #faebcc;
}
.panel-warning > .panel-heading {
  color: #8a6d3b;
  background-color: #fcf8e3;
  border-color: #faebcc;
}
.panel-warning > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #faebcc;
}
.panel-warning > .panel-heading .badge {
  color: #fcf8e3;
  background-color: #8a6d3b;
}
.panel-warning > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #faebcc;
}
.panel-danger {
  border-color: #ebccd1;
}
.panel-danger > .panel-heading {
  color: #a94442;
  background-color: #f2dede;
  border-color: #ebccd1;
}
.panel-danger > .panel-heading + .panel-collapse > .panel-body {
  border-top-color: #ebccd1;
}
.panel-danger > .panel-heading .badge {
  color: #f2dede;
  background-color: #a94442;
}
.panel-danger > .panel-footer + .panel-collapse > .panel-body {
  border-bottom-color: #ebccd1;
}
.panel-heading {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.panel-default {
  border-color: #cdcdcd;
}
.panel-default > .panel-heading {
  border-color: #cdcdcd;
  color: #666666;
  font-size: 16px;
}
.panel-heading {
  padding: 10px 15px;
  border-bottom: 1px solid transparent;
}
.panel {
  border-radius: 0;
}
.panel-body {
  display: inline-block;
  padding: 15px;
}
.pull-left {
  float: left !important;
}
.ml15 {
  margin-left: 15px;
}
.pull-right {
  float: right !important;
}


.table-bordered,
.table-bordered > tbody > tr > td,
.table-bordered > tbody > tr > th,
.table-bordered > tfoot > tr > td,
.table-bordered > tfoot > tr > th,
.table-bordered > thead > tr > td,
.table-bordered > thead > tr > th {
  border: 1px solid #ddd;
}
.table > tbody > tr > td,
.table > tbody > tr > th,
.table > tfoot > tr > td,
.table > tfoot > tr > th,
.table > thead > tr > td,
.table > thead > tr > th {
  padding: 8px;
  vertical-align: top;
  border-top: 1px solid #ddd;
}
.select-number {
  margin: 32px 0;
}
.panel-body .clearfix:before {
  display: table;
  content: ' ';
}

.custom-phone.el-popover.el-popper{
  padding: 0;
}
.el-header .title{
  font-size: 34px;
  padding: 0 10px;
  font-weight: 700;
  letter-spacing: 2px;
}
.user-avatar{
  float: right;
  position: absolute;
  right: 20px;
}
.user-avatar .el-avatar{
vertical-align: middle;
}
.el-icon.logout{
  font-size: 28px;
  vertical-align: middle;
  cursor: pointer;
}


  </style>