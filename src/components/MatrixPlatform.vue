<template>
    <div class="matrix-platform">
      <header class="header">
        <div class="nav-links">
          <el-link href="#" type="primary">综合门户</el-link>
          <el-link href="#" type="primary">灌区业务</el-link>
          <el-link href="#" type="primary">矩阵业务</el-link>
        </div>
        <h1 class="title">冯家山水库矩阵化管理信息平台</h1>
        <div class="weather-info">
          <p>31°</p>
          <p>成仓区</p>
          <p>19~33°</p>
          <p>超级管理员</p>
          <Search style="width: 1em; height: 1em; margin-right: 8px" />
        </div>
      </header>
      <div class="main-content">
        <div class="left-section">
          <div class="card safety-identification">
            <h2>安全鉴定</h2>
            <div class="info">
              <p>2021年 鉴定时间</p>
              <p>一类鉴定结果</p>
              <p>2027年 下次鉴定</p>
            </div>
          </div>
          <div class="card maintenance">
            <h2>养护管理</h2>
            <div class="info">
              <p>7 本月养护工程数量</p>
              <p>47.6万元 本月计划养护投资</p>
              <ul>
                <li>冯家山水库大坝养护 2024-7</li>
                <li>宝鸡管理段设施养护 2024-7</li>
                <li>预留管理段养护 2024-7</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="right-section">
          <div class="card safety-management">
            <h2>安全管理</h2>
            <div class="info">
              <p>2次 水库辐射划界</p>
              <p>4次 灌区辐射划界</p>
              <p>7次 查险抢护水库安全运行</p>
            </div>
          </div>
          <div class="card emergency-support">
            <h2>应急保障</h2>
            <table>
              <thead>
                <tr>
                  <th>物资</th>
                  <th>仓库</th>
                  <th>数量</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>护堤袋2.5mm</td>
                  <td>冯家山水库防汛仓库</td>
                  <td>1500</td>
                </tr>
                <tr>
                  <td>铁丝2.5mm</td>
                  <td>冯家山水库防汛仓库</td>
                  <td>1410</td>
                </tr>
                <tr>
                  <td>编织袋</td>
                  <td>冯家山水库防汛仓库</td>
                  <td>3200</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="card risk-management">
            <h2>险情管理</h2>
            <div class="info">
              <p>19 险情控制</p>
              <p>21 隐患排查</p>
              <ul>
                <li>冯家山水库大坝除险加固 2024-7-1</li>
                <li>冯家山水库管理段加固 2024-6-29</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <footer class="footer">
        <el-button>首页</el-button>
        <el-button>四全</el-button>
        <el-button>四制</el-button>
        <el-button>四预</el-button>
        <el-button>四管</el-button>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MatrixPlatform',
  };
  </script>
  
  <style scoped>
  .matrix-platform {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f5f5f5;
    position: relative;
  }
  
  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #003366;
    color: white;
    padding: 20px;
    position: relative;
  }
  
  .nav-links {
    display: flex;
    gap: 20px;
  }
  
  .title {
    font-size: 1.5em;
    font-weight: bold;
    text-align: center;
    border-bottom: 2px solid white;
    padding-bottom: 5px;
  }
  
  .weather-info {
    display: flex;
    gap: 15px;
    align-items: center;
  }
  
  .main-content {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: 20px 0;
  }
  
  .left-section, .right-section {
    width: 45%;
  }
  
  .card {
    background-color: #ffffff;
    padding: 20px;
    margin-bottom: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  
  .footer {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 10px;
    background-color: #0055a5;
  }
  </style>
  