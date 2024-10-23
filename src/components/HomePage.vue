<template>
    <div class="homepage">
      <header class="header">
        <img src="header-image.jpg" alt="Header Image" class="header-image" />
        <h1>冯家山水库灌区综合门户</h1>
      </header>
      <nav class="nav">
        <el-menu mode="horizontal">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">水库</el-menu-item>
          <el-menu-item index="3">灌区</el-menu-item>
          <el-menu-item index="4">组织</el-menu-item>
        </el-menu>
      </nav>
      <div class="main-content">
        <div class="left-section">
          <p>
            冯家山水库灌溉工程是陕西省大型水利工程之一，位于关中渭河北岸一条较大支流，流域面积 3493 平方公里。
            干流长 152.6km，河道平均比降 0.58%，冯家山水库在干河干流下游 25.0km，控制流域面积 3232 平方公里。
            占全流域面积的 92.5%。多年平均径流量 4.85 亿立方米，年平均流量 15.4 立方米/秒，多年平均含沙量 8.76kg/m³，
            多年平均输沙量 469 万吨。
          </p>
          <img src="map-image.jpg" alt="Map Image" class="map-image" />
          <p>
            冯家山水库灌区自冯家山水库至宝鸡市水利局管理。地理位置位于东经 107°06'50" 至 108°01'37"，北纬 34°17'16" 至 34°23'34"。
            灌区范围涉及 8 个县，耕地面积 22 万亩，灌溉面积 120.8 万亩。
          </p>
        </div>
        <div class="right-section">
          <el-menu default-active="1" class="submenu">
            <el-menu-item index="1">水库矩阵化管理信息平台</el-menu-item>
            <el-menu-item index="2">灌区信息化业务应用平台</el-menu-item>
            <el-submenu index="3" title="{ title: '已建业务应用平台入口' }">
              <el-menu-item index="3-1">水雨情自动测报系统</el-menu-item>
              <el-menu-item index="3-2">大坝安全监测系统</el-menu-item>
              <el-menu-item index="3-3">水库水量调度系统</el-menu-item>
              <el-menu-item index="3-4">塬区灌溉管理系统</el-menu-item>
              <el-menu-item index="3-5">斗门卫星遥感系统</el-menu-item>
              <el-menu-item index="3-6">水质自动监测系统</el-menu-item>
              <el-menu-item index="3-7">闸门自动控制系统</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
  };
  </script>
  
  <style scoped>
  .homepage {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
  }
  
  .header {
    width: 100%;
    text-align: center;
    background-color: #003366;
    color: white;
    padding: 20px 0;
  }
  
  .header-image {
    max-width: 100%;
    height: auto;
  }
  
  .nav {
    width: 100%;
    background-color: #0055a5;
  }
  
  .main-content {
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 20px 0;
  }
  
  .left-section {
    width: 65%;
    padding-right: 20px;
  }
  
  .right-section {
    width: 30%;
    padding-left: 20px;
    background-color: #e6e6e6;
    border-radius: 8px;
  }
  
  .map-image {
    width: 100%;
    margin: 20px 0;
  }
  
  .el-menu-item,
  .el-submenu__title {
    color: #003366;
  }
  .submenu {
    background-color: #e6e6e6;
    border-radius: 8px;
    padding: 10px;
  }
  </style>
  