<template>
  <div id="signin">
    <div class="signin-mask"></div>
    <div class="signin-container">
      <div class="close" @click="$router.back()">
        <i class="iconfont icon-guanbi"></i>
      </div>
      <div class="user">
        <i class="iconfont icon-denglutouxiang"></i>
      </div>
      <div class="username-input">
        <input type="text" placeholder="请输入账号" v-model="phone">
      </div>
      <div class="password-input">
        <input type="password" placeholder="请输入密码" v-model="password">
      </div>
      <div class="submit-block">
        <span class="signin" v-text="isSignin? '登录':'注册'" @click="submit"></span>
        <span class="signup" v-text="isSignin? '注册':'登录 '" @click="isSignin = !isSignin"></span>
      </div>
      <div class="wx-signin">
        <div class="title">
          <h2>微信授权登录</h2>
        </div>
        <div class="wx-btn">
          <a href="http://b.pokerlady.com.cn/M/wxLogin">
            <i class="iconfont icon-weixin"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {userLogin, userReg} from '../api/api'
  export default {
    data () {
      return {
        isSignin: true,
        phone: '',
        password: ''
      }
    },
    methods: {
      submit () {
        let params = {
          phone: this.phone,
          password: this.password
        }
        if (this.isSignin) {
          userLogin(params).then(data => {
            if (data.success === 1) {
              localStorage.setItem('user_id', data.data.user_id)
              this.$router.push({
                name: 'user'
              })
            } else {
              this.$message(data.desc)
            }
          })
        } else {
          userReg(params).then(data => {
            if (data.success === 1) {
              localStorage.setItem('user_id', data.data.user_id)
              this.$router.push({
                name: 'user'
              })
            } else {
              this.$message(data.desc)
            }
          })
        }
      }
    }
  }
</script>
<style lang="less">
  @import "../assets/less/signin.less";
</style>
