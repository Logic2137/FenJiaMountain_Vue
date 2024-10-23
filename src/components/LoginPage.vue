<template>
    <div class="login-page" :style="{ backgroundImage: `url('background-image.jpg')` }">
      <div class="login-container">
        <div class="info-section">
          <h1>冯家山水库灌区信息化平台</h1>
          <img src="devices-image.png" alt="Devices" class="devices-image" />
        </div>
        <div class="login-section">
          <h2>欢迎登录</h2>
          <el-form :model="loginForm" ref="loginFormRef">
            <el-form-item prop="username">
              <el-input v-model="loginForm.username" placeholder="用户名">
                <i class="el-icon-user"></i>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input v-model="loginForm.password" placeholder="密码" type="password">
                <i class="el-icon-user"></i>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-checkbox v-model="loginForm.rememberMe">记住密码</el-checkbox>
              <el-link class="forgot-password">忘记密码</el-link>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onLogin" :loading="loading">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { ElMessage } from 'element-plus';
  
  export default {
    setup() {
      const loginForm = ref({
        username: '',
        password: '',
        rememberMe: false,
      });
  
      const loginFormRef = ref(null);
      const loading = ref(false);
  
      const onLogin = () => {
        loading.value = true;
        loginFormRef.value.validate((valid) => {
          if (valid) {
            ElMessage.success('登录成功');
          } else {
            ElMessage.error('请输入正确的用户名和密码');
          }
          loading.value = false;
        });
      };
  
      return {
        loginForm,
        loginFormRef,
        loading,
        onLogin,
      };
    },
  };
  </script>
  
  <style scoped>
  .login-page {
    width: 100%;
    height: 100vh;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .login-container {
    width: 70%;
    height: 70%;
    background-color: rgba(255, 255, 255, 0.9);
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-radius: 8px;
  }
  
  .info-section {
    width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .devices-image {
    width: 100%;
    max-width: 300px;
    margin-top: 20px;
  }
  
  .login-section {
    width: 50%;
  }
  
  .el-form-item {
    margin-bottom: 20px;
  }
  
  .forgot-password {
    display: block;
    text-align: right;
  }
  </style>
  