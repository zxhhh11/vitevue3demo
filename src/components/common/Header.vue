<script lang="ts" setup>
import logoImg from '@/assets/images/head_logo.png';
import { ref,reactive,toRefs } from 'vue'
const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const data = reactive({
  selectNum: ''
});
let { selectNum } = toRefs(data);
const options = [
  {
    value: '选项1',
    label: '黄金糕'
  },
  {
    value: '选项2',
    label: '双皮奶'
  },
  {
    value: '选项3',
    label: '蚵仔煎'
  },
  {
    value: '选项4',
    label: '龙须面'
  },
  {
    value: '选项5',
    label: '北京烤鸭'
  }
];
const gridData = [
  {
    date: '2016-05-02',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-04',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-01',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-03',
    name: 'Jack',
    address: 'New York City',
  },
]

</script>

<template>
 <el-header>
    <span class="logo">
        <img :src="logoImg" alt="" />
    </span>
  <!-- <div> -->
    <div class="call-box">
      <el-popover placement="bottom" width="500px" trigger="click" popper-class="custom-phone">
      <template #reference>
        <span class="call"> 
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-phonelog"></use>
      </svg>
      <span class="text">拨号</span>
      </span>
      </template>
      <div class="m-phonePanel panel panel-default">
              <div class="panel-heading"> 软电话 </div>
              <div class="panel-body clearfix">
                <table
                  cellpadding="0"
                  cellspacing="0"
                  class="table table-bordered text-center pull-left"
                >
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>2</td>
                      <td>3</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>5</td>
                      <td>6</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>8</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <td>*</td>
                      <td>0</td>
                      <td>#</td>
                    </tr>
                  </tbody>
                </table>
                <div class="pull-right ml15">
                  <div class="tips"
                    >请输入电话号码，外线请加前导码<br />
                    例如 (982726522)</div
                  >
                  <div class="select-number">
                    <el-select v-model="selectNum" placeholder="请选择">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </div>
                  <el-button-group>
                    <el-button size="small" type="success">拨号</el-button>
                    <el-button size="small" type="danger">清除</el-button>
                    <el-button size="small">取消</el-button>
                    <el-button size="small" type="primary">选择</el-button>
                  </el-button-group>
                </div>
              </div>
            </div>
    </el-popover>
     

    </div>
    <el-menu
    :default-active="activeIndex2"
    class="el-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
    <el-menu-item index="1">Processing Center</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="3" disabled>Info</el-menu-item>
    <el-menu-item index="4">Orders</el-menu-item>
  </el-menu>
  <!-- </div> -->
 </el-header>
</template>

<style>
.el-header{
    display: flex;
}
.el-header .el-menu{
    height: 80px;
}
.logo {
  /* display: inline-block; */
  height: 80px;
  line-height: 80px;
}
.logo img {
    width: 198px;
    height: 78px;
    margin: 1px;
  
}
.call-box{
  
}
.call{
  display: flex;
  padding: 0 16px;
  cursor: pointer;
  width: 90px;
  text-align: center;
  flex-direction: column;
  height: 80px;
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
  /* border: 1px solid transparent; */
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
  </style>