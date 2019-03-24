<template>
  <div style="background: none;">
    <div class="LoginBg":style="{ 'background': 'url('+loginBg+') no-repeat center center'}">
      <el-form ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleForm login-container">
        <h2 class="title">系统登录</h2>
        <el-form-item prop="account">
          <el-input type="text" auto-complete="off" placeholder="账号"></el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input type="password" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-checkbox checked class="remember">记住密码</el-checkbox>
        <el-form-item style="width:100%;">
          <router-link to="/DashBoard">
            <el-button type="primary" style="width:100%;">登录</el-button>
          </router-link>
          <!--<el-button @click.native.prevent="handleReset2">重置</el-button>-->
        </el-form-item>
        <p class="pStyle"><router-link to="/Regist">没有账号?先去注册</router-link></p>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loginBg: '../../static/images/LoginBg.jpg'
      }
    }
  }
</script>
<style scoped>
  .LoginBg {
    height: 1105px;
    margin-top: -25px;
    margin-left: -40px;
  }
  .login-container {
    width: 500px;
    padding-top: 400px;
    padding-left: 580px;
  }
  h2 {
    margin-bottom: 20px;
    margin-left: 130px;
  }
  .remember {
    margin-bottom: 10px;
  }
  .login-container {
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    position: absolute;
    left: 40%;
    top: 30%;
  }
  .pStyle {
    font-size: 14px;
  }
</style>

